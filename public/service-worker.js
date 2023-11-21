const CACHE_NAME = 'tetsudai-cache'

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
          .then(async (response) => {
            const cache = await caches.open(CACHE_NAME)
            cache.put(event.request, response.clone())
            return response
          })
          .catch(() => {
            return caches.match(event.request)
              .then((cachedResponse) => cachedResponse || fetch(event.request))
              .catch(() => {
                return new Response(null)
              })
          })
      )
})
