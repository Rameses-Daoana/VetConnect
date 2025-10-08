document.getElementById("petForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const petName = document.getElementById("petName").value;
  const petType = document.getElementById("petType").value;

  if (petName && petType) {
    alert(`Pet Registered ✅\nName: ${petName}\nType: ${petType}`);
    window.location.href = "booking4.html";
  } else {
    alert("Please fill out all required fields.");
  }
});

document.querySelector(".back-btn").addEventListener("click", function() {
  alert("Going back...");
});
