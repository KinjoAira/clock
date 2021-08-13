
// resister service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then((registration) => {
      console.log('ServiceWorker registration succeeded: ', registration.scope);
  }).catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
  });
}

