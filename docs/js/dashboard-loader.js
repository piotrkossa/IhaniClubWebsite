document.addEventListener("DOMContentLoaded", () => {
  fetch('./dashboard.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('dashboard-container').innerHTML = html;

      const btn = document.getElementById("announcements-btn");
      if (btn) {
        const currentPage = window.location.pathname;

        if (currentPage.includes("announcements.html")) {
          btn.href = "./index.html";
          btn.textContent = "Home";
          btn.setAttribute("l-pl", "Strona Główna");
        } else {
          btn.href = "./announcements.html";
          btn.textContent = "Announcements";
          btn.setAttribute("l-pl", "Ogłoszenia");
        }
      }
    })
    .catch(err => console.error('Could not load a dashboard:', err));
});
