// Close notification cards
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none';
  });
});
