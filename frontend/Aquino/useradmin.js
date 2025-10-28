const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  icon.classList.toggle('fa-chevron-right');
  icon.classList.toggle('fa-chevron-left');
});
