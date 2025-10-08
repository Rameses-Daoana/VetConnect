document.getElementById("resetForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (newPass === "" || confirmPass === "") {
    alert("❌ Please fill in all fields.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("❌ Passwords do not match!");
  } else {
    alert("✅ Password has been successfully reset!");
    // here you could redirect to login page
    // window.location.href = "login.html";
  }
});
