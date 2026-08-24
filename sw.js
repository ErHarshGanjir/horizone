const CACHE_NAME = "horizon-v1";

const CORE_FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./horizonApps.js",
    "./importantLinks.js"
];


/* =========================================================
   INSTALL
   ========================================================= */

self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(
                    cache =>
                        cache.addAll(
                            CORE_FILES
                        )
                )

        );

        self.skipWaiting();

    }
);


/* =========================================================
   ACTIVATE
   ========================================================= */

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches
                .keys()
                .then(
                    keys =>
                        Promise.all(

                            keys
                                .filter(
                                    key =>
                                        key !==
                                        CACHE_NAME
                                )
                                .map(
                                    key =>
                                        caches.delete(
                                            key
                                        )
                                )

                        )
                )

        );

        self.clients.claim();

    }
);


/* =========================================================
   FETCH
   ========================================================= */

self.addEventListener(
    "fetch",
    event => {

        /*
            Only handle GET requests.
        */

        if (
            event.request.method !==
            "GET"
        ) {

            return;

        }


        /*
            Don't try to cache
            external iframe websites.
        */

        const requestURL =
            new URL(
                event.request.url
            );


        if (
            requestURL.origin !==
            self.location.origin
        ) {

            return;

        }


        event.respondWith(

            caches
                .match(
                    event.request
                )
                .then(
                    cached => {

                        if (
                            cached
                        ) {

                            return cached;

                        }


                        return fetch(
                            event.request
                        )
                        .then(
                            response => {

                                /*
                                    Cache successful
                                    same-origin responses.
                                */

                                if (
                                    response &&
                                    response.status ===
                                    200
                                ) {

                                    const copy =
                                        response.clone();


                                    caches
                                        .open(
                                            CACHE_NAME
                                        )
                                        .then(
                                            cache =>
                                                cache.put(
                                                    event.request,
                                                    copy
                                                )
                                        );

                                }


                                return response;

                            }
                        );

                    }
                )

        );

    }
);
