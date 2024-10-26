const CACHE_NAME = 'tetsudai-cache'

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
    .then(async (response) => {
      if (event.request.method === "POST") return response
      if (new URL(event.request.url).pathname.toLowerCase().includes("list")) return response
      const cache = await caches.open(CACHE_NAME)
      cache.put(event.request, response.clone())
      return response
    })
    .catch(async () => {
      return caches.match(event.request)
        .then((cachedResponse) => cachedResponse)
        .catch(() => {
          return new Response(null)
        })
    })
  )
})
