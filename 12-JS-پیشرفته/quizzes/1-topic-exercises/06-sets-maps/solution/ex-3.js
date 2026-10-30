/* تمرین ۳ — انتخاب صندلی سینما با Set */

const TICKET_PRICE = 120000;
const MAX_SEATS = 4;

const soldSeats = new Set([3, 7]);
const selectedSeats = new Set();

const seatsBox = document.getElementById("seats");
const message = document.getElementById("message");
const summary = document.getElementById("summary");

function showSummary() {
  if (selectedSeats.size === 0) {
    summary.textContent = "هنوز صندلی‌ای انتخاب نکرده‌اید.";
    return;
  }

  // Set ترتیب عددی ندارد؛ اول آرایه می‌کنیم و بعد مرتب
  const sorted = Array.from(selectedSeats).sort((a, b) => a - b);
  const seatNames = sorted.map((seat) => seat.toLocaleString("fa-IR")).join("، ");
  const total = selectedSeats.size * TICKET_PRICE;

  summary.textContent = `صندلی‌ها: ${seatNames} — مبلغ: ${total.toLocaleString("fa-IR")} تومان`;
}

function toggleSeat(seat, button) {
  message.textContent = "";

  if (selectedSeats.has(seat)) {
    selectedSeats.delete(seat);
    button.setAttribute("aria-pressed", "false");
  } else if (selectedSeats.size >= MAX_SEATS) {
    message.textContent = "حداکثر ۴ صندلی می‌توانید انتخاب کنید.";
  } else {
    selectedSeats.add(seat);
    button.setAttribute("aria-pressed", "true");
  }

  showSummary();
}

for (let seat = 1; seat <= 12; seat++) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = seat.toLocaleString("fa-IR");
  button.setAttribute("aria-pressed", "false");

  if (soldSeats.has(seat)) {
    button.disabled = true;
    button.setAttribute("aria-label", `صندلی ${seat} فروخته شده`);
  }

  button.addEventListener("click", () => {
    toggleSeat(seat, button);
  });

  seatsBox.append(button);
}

showSummary();
