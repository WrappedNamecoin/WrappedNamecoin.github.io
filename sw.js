const sw = self;
sw.addEventListener("install", (event) => {
    // This will be called when the service worker is installed.
    event.waitUntil(() => console.info("Installed!"));
});
sw.addEventListener("fetch", function (ev) {
    // respond to fetch events
});
sw.addEventListener("push", function (ev) {
    ev.waitUntil(sw.registration.showNotification("My Title", {
        body: "Hello world!",
    }));
});
export {};
