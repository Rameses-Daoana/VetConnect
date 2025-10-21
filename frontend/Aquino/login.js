document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const forgot = document.getElementById("forgot");
  const signup = document.getElementById("signup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (email.value.trim() === "" || password.value.trim() === "") {
      alert("⚠️ Please fill in both fields.");
      return;
    }

    if (email.value === "example123@gmail.com" && password.value === "123456") {
      alert("✅ Login successful! Redirecting...");

      window.location.href = "appointment.html"
    } else {
      alert("❌ Invalid email or password.");
    }
  });

  });

  forgot.addEventListener("click", () => {
    window.location.href = "reset.html"
  });

  signup.addEventListener("click", () => {
    window.location.href = "signup.html";
  })
;
