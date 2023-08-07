const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const input = box.querySelector("input[type='radio']");
  input.addEventListener("click", function () {
    boxes.forEach((box) => box.classList.remove("expanded"));
    this.closest(".box").classList.toggle("expanded");
  });
});

// Function to handle radio button click
function handleRadioButtonClick(index) {
  // Remove the "active" class from all boxes
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.classList.remove("active"));

  // Add the "active" class to the clicked box
  const box = document.querySelector(`#bundle${index}`);
  box.classList.add("active");
}
