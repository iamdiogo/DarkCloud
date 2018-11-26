window.addEventListener('DOMNodeRemoved', function() {
  if (document.getElementById('darkstyle_css') == null) {
    var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

    link.id     = 'darkstyle_css';
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = chrome.extension.getURL('css_dark.css');
    link.media  = 'all';

    head.appendChild(link);
  }
});

