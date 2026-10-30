/* تمرین ۳ — هشتگ‌یاب و پنهان کردن شماره تلفن */

const HASHTAG_PATTERN = /#[^\s#]+/g; // # و بعد هر چیزی تا فاصله بعدی
const MOBILE_PATTERN = /(09\d{2})\d{3}(\d{4})/g; // دو گروه: ۴ رقم اول و ۴ رقم آخر

const commentInput = document.getElementById("comment");
const tagCount = document.getElementById("tag-count");
const tagList = document.getElementById("tag-list");
const safeText = document.getElementById("safe-text");

document.getElementById("check").addEventListener("click", () => {
  const text = commentInput.value;

  // هشتگ‌ها
  tagList.textContent = "";
  const tags = text.match(HASHTAG_PATTERN);

  if (tags === null) {
    tagCount.textContent = "هشتگی پیدا نشد.";
  } else {
    tagCount.textContent = tags.length.toLocaleString("fa-IR") + " هشتگ";
    for (const tag of tags) {
      const li = document.createElement("li");
      li.textContent = tag;
      tagList.append(li);
    }
  }

  // شماره‌ها: $1 و $2 همان گروه‌های داخل پرانتز هستند
  safeText.textContent = text.replace(MOBILE_PATTERN, "$1***$2");
});
