// Back button
document.querySelector(".back-btn").addEventListener("click", () => {
  alert("Going back...");
  // Example: window.history.back(); // Uncomment this if you want to go back in browser history
});

// Form submission
document.getElementById("appointmentForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Check if required fields are filled
  if (name && email) {
    alert(`Thank you ${name}! We'll contact you at ${email} or ${phone}.`);
    
    // Uncomment the following line to redirect after form submission
    window.location.href = "booking3.html";  // Redirect to the next page
  } else {
    alert("Please fill in required fields.");
  }
});
