const link = document.createElement('link');

link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = chrome.extension.getURL('css_dark.css');

const observer = new MutationObserver(() => link.parentNode == null && document.head.appendChild(link));

setTimeout(() => {
    document.head.appendChild(link);
    document.body.style.background = '#000';
    observer.observe(document, { childList: true, subtree: true });
}, 0);

window.addEventListener('load', () => void document.body.style.removeProperty('background'), { passive: true, once: true });
