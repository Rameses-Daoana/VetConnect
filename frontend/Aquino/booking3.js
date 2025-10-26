const editBtn = document.getElementById("editBtn");
const submitBtn = document.getElementById("submitBtn");
const inputs = document.querySelectorAll("input");

editBtn.addEventListener("click", () => {
  inputs.forEach(input => input.disabled = false);
  alert("You can now edit your appointment details.");
});

submitBtn.addEventListener("click", () => {
  const formData = {};
  inputs.forEach(input => (formData[input.id] = input.value));
  console.log("Submitted Data:", formData);
  alert("Appointment details submitted successfully!");
});
