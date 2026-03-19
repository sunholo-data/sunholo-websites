/**
 * device.js
 * Detects device type and adds class to <html>.
 * Classes: 'is-mobile' | 'is-desktop'
 * Used by CSS and optionally by other scripts.
 */
(function () {
  'use strict';

  var MOBILE_BREAKPOINT = 1024;

  function isMobileUA() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);
  }

  function isMobileViewport() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }

  function classify() {
    var root = document.documentElement;
    root.classList.remove('is-mobile', 'is-desktop');
    if (isMobileUA() || isMobileViewport()) {
      root.classList.add('is-mobile');
    } else {
      root.classList.add('is-desktop');
    }
  }

  // Run on load
  classify();

  // Re-evaluate on resize (debounced)
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(classify, 150);
  });
})();
