document.getElementById("resetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newPass = document.getElementById("newPassword").value.trim();
  const confirmPass = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");

  if (newPass === "" || confirmPass === "") {
    message.textContent = "Please fill in both fields.";
    return;
  }

  if (newPass !== confirmPass) {
    message.textContent = "Passwords do not match!";
  } else {
    message.style.color = "lightgreen";
    message.textContent = "Password successfully reset!";
    
    setTimeout(() => {
      document.getElementById("resetForm").reset();
      message.textContent = "";
    }, 2000);
  }
});
