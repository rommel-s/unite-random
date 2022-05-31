self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pokeroutes-cache").then(cache => {
      return cache.addAll([
        "./",
        "./src/scripts/app.js",
        "./src/scripts/pokes.js",
        "./src/styles/style.css",
        "./public/icons/144x144.png",
        "./public/icons/192x192.png",
        "./public/icons/512x512.png",
        "./public/assets/default.png",
        "./public/assets/cards/Absol.png",
        "./public/assets/cards/Aegislash.png",
        "./public/assets/cards/Azumarill.png",
        "./public/assets/cards/Blastoise.png",
        "./public/assets/cards/Blissey.png",
        "./public/assets/cards/Charizard.png",
        "./public/assets/cards/Cinderace.png",
        "./public/assets/cards/Cramorant.png",
        "./public/assets/cards/Crustle.png",
        "./public/assets/cards/Decidueye.png",
        "./public/assets/cards/Delphox.png",
        "./public/assets/cards/Dragonite.png",
        "./public/assets/cards/Duraludon.png",
        "./public/assets/cards/Eldegoss.png",
        "./public/assets/cards/Espeon.png",
        "./public/assets/cards/Garchomp.png",
        "./public/assets/cards/Gardevoir.png",
        "./public/assets/cards/Gengar.png",
        "./public/assets/cards/Greedent.png",
        "./public/assets/cards/Greninja.png",
        "./public/assets/cards/Hoopa.png",
        "./public/assets/cards/Lucario.png",
        "./public/assets/cards/Machamp.png",
        "./public/assets/cards/Mamoswine.png",
        "./public/assets/cards/MrMime.png",
        "./public/assets/cards/Ninetales.png",
        "./public/assets/cards/Pikachu.png",
        "./public/assets/cards/Slowbro.png",
        "./public/assets/cards/Snorlax.png",
        "./public/assets/cards/Sylveon.png",
        "./public/assets/cards/Talonflame.png",
        "./public/assets/cards/Tsareena.png",
        "./public/assets/cards/Venusaur.png",
        "./public/assets/cards/Wigglytuff.png",
        "./public/assets/cards/Zeraora.png"
      ])
    })
  )
})

self.addEventListener('message', e => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})