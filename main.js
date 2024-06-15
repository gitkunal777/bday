const nextButton = document.querySelector(".next-button");

nextButton.addEventListener("click", () => {
  // Add animation to the button click
  nextButton.classList.add("animate");
  // Simulate a page transition
  setTimeout(() => {
    // Remove the animation class
    nextButton.classList.remove("animate");
    // Transition to the next page (button.html)
    window.location.href = "button.html";
  }, 500);
});
