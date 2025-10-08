// Back button
document.querySelector(".back-btn").addEventListener("click", () => {
  alert("Going back...");
  // Example: window.history.back();
});

// Form submission
document.getElementById("appointmentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name && email) {
    alert(`Thank you ${name}! We'll contact you at ${email} or ${phone}.`);
    // Example: window.location.href = "next-step.html";
  } else {
    alert("Please fill in required fields.");
  }
});
