// Simple placeholder for a calendar display
const calendar = document.getElementById("calendar");
const today = new Date();

let html = "<table><tr>";
for (let i = 1; i <= 30; i++) {
  html += `<td style="padding:8px; text-align:center; ${i === today.getDate() ? 'background:#7b8346; color:#fff; border-radius:50%;' : ''}">${i}</td>`;
  if (i % 7 === 0) html += "</tr><tr>";
}
html += "</tr></table>";

calendar.innerHTML = html;
