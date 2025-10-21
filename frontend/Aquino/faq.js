document.getElementById('signInBtn').addEventListener('click', () => {
  window.location.href = "login.html"
});

document.getElementById('registerBtn').addEventListener('click', () => {
  window.location.href = "signup.html"
});

document.getElementById('bookingtBtn').addEventListener('click', () => {
  window.location.href = "booking1.html"
});

const searchInput = document.getElementById("faqSearch");
const faqs = document.querySelectorAll(".faq-box");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  faqs.forEach(faq => {
    const text = faq.textContent.toLowerCase();
    faq.style.display = text.includes(filter) ? "" : "none";
  });
});
