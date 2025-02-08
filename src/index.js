// Animate progress bars when the page loads
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".skill").forEach((skill) => {
    let valueText = skill.querySelector(".skill-lvl").innerText;
    let value = parseInt(valueText);
    let bar = skill.querySelector(".skill-bar");

    bar.style.width = value + "%"; // Set width dynamically
    bar.style.transition = "width 1.5s ease-in-out"; // Add animation
  });
});
