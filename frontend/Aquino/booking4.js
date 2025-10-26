// Button redirect example
const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
  alert("Returning to your dashboard...");
  window.location.href = "dashboard.html"; // Change this to your dashboard page
});
