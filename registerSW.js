if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/final-tracker/sw.js', { scope: '/final-tracker/' })})}