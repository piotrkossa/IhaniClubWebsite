document.addEventListener("DOMContentLoaded", () => {
  fetch('/src/dashboard.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('dashboard-container').innerHTML = html;
    })
    .catch(err => console.error('Could not load a dashboard:', err));
});