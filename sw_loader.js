if ('serviceWorker' in navigator) {
  if (window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/mnts.rndm.org/sw.js', { scope: '/mnts.rndm.org/' }).then(registration => {
      const infoEl = document.getElementById("swInfo");
      if (infoEl) {
        infoEl.innerHTML = "Service Worker registered with scope: " + registration.scope;
      }
    }).catch(error => {
      const infoEl = document.getElementById("swInfo");
      if (infoEl) {
        infoEl.innerHTML = "Service Worker registration failed: " + error.message;
      }
    });
    document.getElementById("manifestTestLoad")?.setAttribute('href', '/mnts.rndm.org/manifest.webmanifest');
  } else {
    const infoEl = document.getElementById("swInfo");
    if (infoEl) {
      infoEl.innerHTML = "Service workers can be registered only on HTTPS: protocol.";
    }
  }
}