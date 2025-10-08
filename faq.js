// Redirect buttons
document.getElementById('signInBtn').addEventListener('click', () => {
  window.location.href = "signin.html";
});

document.getElementById('registerBtn').addEventListener('click', () => {
  window.location.href = "register.html";
});

// Search FAQ function
const searchInput = document.getElementById("faqSearch");
const faqs = document.querySelectorAll(".faq-box");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  faqs.forEach(faq => {
    const text = faq.textContent.toLowerCase();
    faq.style.display = text.includes(filter) ? "" : "none";
  });
});
