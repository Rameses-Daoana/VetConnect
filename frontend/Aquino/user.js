// Search Functionality
const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#userTable tbody tr");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  tableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(searchValue) ? "" : "none";
  });
});

// Example button actions
document.querySelectorAll(".view").forEach(btn => {
  btn.addEventListener("click", () => alert("View user details"));
});

document.querySelectorAll(".edit").forEach(btn => {
  btn.addEventListener("click", () => alert("Edit user details"));
});

document.querySelectorAll(".delete").forEach(btn => {
  btn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this user?")) {
      btn.closest("tr").remove();
    }
  });
});
