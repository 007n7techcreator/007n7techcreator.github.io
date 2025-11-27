self.addEventListener('install', event => {
    console.log('Service Worker installed');
    // Perform any initial setup here
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    // Clean up old versions of the Service Worker here if needed
});

self.addEventListener('push', event => {
    const options = {
        body: 'You have received a push notification!',
        icon: 'https://via.placeholder.com/128', // Replace with your icon
        badge: 'https://via.placeholder.com/72' // Replace with your badge
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
