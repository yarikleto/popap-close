(function() {
  var popapCloseId = 'popap-close';

  var popapClose = document.getElementById(popapCloseId);
  var isUsedPopapClose = localStorage.getItem('isUsedPopapClose');

  function handleActivePopapClose(e) {
    if (e.pageY < 20) {
      popapClose.style.zIndex = 9999;
      popapClose.style.opacity = 1;
      localStorage.setItem('isUsedPopapClose', true);
      window.removeEventListener('mousemove', handleActivePopapClose);
    }
  }

  if (!isUsedPopapClose) {
    window.addEventListener('mousemove', handleActivePopapClose);
  }
})();