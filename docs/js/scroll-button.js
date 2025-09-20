function createScrollButton(scrollValue = 500) {
  const button = document.createElement('button');
  button.className = "scroll-button w-12 h-12 inline-flex items-center justify-center rounded-full transition-transform shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]";

  button.addEventListener('click', () => {
    window.scrollBy({ top: scrollValue, behavior: 'smooth' });
  });

  button.innerHTML = `
    <svg class="w-full h-full" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#96cff9"/>
          <stop offset="100%" stop-color="#00a6f4"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="none" stroke="url(#gradient)" stroke-width="3"/>
      <path d="M24 14v20m0 0l-8-8m8 8l8-8" stroke="url(#gradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  return button;
}

function injectScrollButtons(defaultScroll = 500) {
  if (window.innerWidth < 768) return;
  
  const containers = document.querySelectorAll('#scroll-button');
  containers.forEach(container => {

    const scrollValue = parseInt(container.getAttribute('data-scroll'), 10) || defaultScroll;
    const btn = createScrollButton(scrollValue);
    container.appendChild(btn);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  injectScrollButtons();
});
