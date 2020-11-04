const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const price = document.getElementById("price");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const SelectedSeatscount = selectedSeats.length;
  count.innerText = SelectedSeatscount;
  price.innerText = SelectedSeatscount * ticketPrice;
}
movieSelect.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});
