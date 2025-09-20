document.addEventListener("DOMContentLoaded", () => {
  fetch('/src/downboard.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('downboard-container').innerHTML = html;
    })
    .catch(err => console.error('Could not load a downboard:', err));
});