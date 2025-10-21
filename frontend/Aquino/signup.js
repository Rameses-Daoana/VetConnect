document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const fullname = document.getElementById("fullname").value;

  if (email && username && fullname) {
    alert("✅ Sign up successful for " + fullname + "!");
    
    window.location.href = "homepage.html"
  } else {
    alert("❌ Please fill out all fields.");
  }
});
