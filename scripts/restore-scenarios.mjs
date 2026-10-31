import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const transcriptDir =
  "C:/Users/Nasrin/.cursor/projects/c-Users-Nasrin-Desktop-html-handbook/agent-transcripts";

const targets = new Map(); // rel -> { contents, len }

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith(".jsonl")) scanFile(p);
  }
}

function scanFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  for (const line of text.split("\n")) {
    try {
      const j = JSON.parse(line);
      for (const c of j.message?.content || []) {
        if (c.type !== "tool_use" || c.name !== "Write") continue;
        const fp = c.input?.path || "";
        if (!fp.includes("سناریو-تدریس.md")) continue;
        const idx = fp.toLowerCase().indexOf("html-handbook");
        if (idx < 0) continue;
        const rel = fp
          .slice(idx + "html-handbook".length)
          .replace(/^[/\\]+/, "")
          .replace(/\\/g, "/");
        if (!/^(09|10|11|12|13)-/.test(rel)) continue;
        const contents = c.input.contents || "";
        const prev = targets.get(rel);
        if (!prev || contents.length > prev.len) {
          targets.set(rel, { contents, len: contents.length, from: filePath });
        }
      }
    } catch {
      /* skip */
    }
  }
}

walk(transcriptDir);

for (const [rel, { contents, len, from }] of targets) {
  const out = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, contents);
  console.log("restored", rel, len, "from", path.basename(from));
}
