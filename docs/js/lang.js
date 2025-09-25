(function() {

  const userLang = navigator.language.startsWith('pl') ? 'pl' : 'en';

  if (userLang !== 'pl') return;

  function translateElement(el) {
    if (el.hasAttribute('l-pl')) {
      const text = el.getAttribute('l-pl');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  }

  function translateAll() {
    document.querySelectorAll('[l-pl]').forEach(translateElement);
  }

  document.addEventListener('DOMContentLoaded', translateAll);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          translateElement(node);

          node.querySelectorAll('[l-pl]').forEach(translateElement);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

    AOS.init({
        offset: 150,
        duration: 1000,
        once: true,
    });

    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
        AOS.refresh();
    });
})();