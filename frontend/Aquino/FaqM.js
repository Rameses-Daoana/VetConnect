// Expand / Collapse FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Search Functionality
const searchInput = document.getElementById("faqSearch");
searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question").textContent.toLowerCase();
    item.style.display = question.includes(filter) ? "block" : "none";
  });
});

// Add FAQ (example placeholder)
document.getElementById("addFaqBtn").addEventListener("click", () => {
  alert("Add New FAQ functionality coming soon!");
});
