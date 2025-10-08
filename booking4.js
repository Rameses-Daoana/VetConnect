document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const visitType = document.getElementById("visitType").value;
  const preferredDay = document.getElementById("preferredDay").value;
  const preferredTime = document.getElementById("preferredTime").value;

  if (visitType && preferredDay && preferredTime) {
    alert(`✅ Appointment Submitted!\n\nType: ${visitType}\nDay: ${preferredDay}\nTime: ${preferredTime}`);
  } else {
    alert("⚠️ Please complete all fields before submitting.");
  }
});

document.querySelector(".back-btn").addEventListener("click", function() {
  alert("Going back...");
});
