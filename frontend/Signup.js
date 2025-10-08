document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match.");
    return;
  }

  alert("✅ Account created successfully!");
  window.location.href = "login.html"; // redirect to login page
});
