document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Example check (replace with real backend validation)
  if (email === "admin@vetconnect.com" && password === "admin123") {
    alert("✅ Admin login successful!");
    // Redirect to admin dashboard
    // window.location.href = "admin-dashboard.html";
  } else {
    alert("❌ Invalid admin credentials. Try again.");
  }
});
