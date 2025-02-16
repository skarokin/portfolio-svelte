<main
    class="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <nav class="text-lg sm:text-xl mb-4 sm:mb-8">
        <ul class="list-none flex">
            <li>
                <a
                    href="/projects"
                    class="inline-block text-lg sm:text-xl mb-0"
                >
                    projects
                </a>
            </li>
            <li class="mx-2">/</li>
            <li class="text-gray-500" aria-current="page">ref:note</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-lg sm:text-2xl">ref:note</h1>
    <h3 class="font-semibold text-base sm:text-xl">
        <a href="https://github.com/akuwuh/ref-note" target="_blank">
            github
        </a>
        |
        <a href="https://www.refnote.app/" target="_blank">
            refnote.app
        </a>
    </h3>
    <h5 class="text-sm sm:text-base mb-2 sm:mb-4">
        Go, TypeScript, Next.js, Node.js, OAuth2, Docker, GCP, Vercel
    </h5>
    <p class="text-sm sm:text-base mb-2">
        A web app for students to manage notes for all of their classes.
        Students can share classes with granular permissions and collaborate on notes in real-time.
    </p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>
            Next.js app deployed on Vercel. Uses dynamic routing and a mixture of client and server-side rendering.
        </li>
        <li>
            Uses OAuth2 (Google Sign-In) and JWT for authentication. Sessions are managed with cookies and
            security is ensured by verifying JWT signatures for every API request.
        </li>
        <li>
            Firestore database to store user, class, and note data with granular permissions.
        </li>
        <li>
            Go/Docker backend on Google Cloud Run for Firestore database management with cold start times &lt; 100ms to ensure
            consistently low-latency API responses and auto-scaling to handle traffic spikes.
        </li>
        <li>
            Node.js WebSockets server on Google Cloud Run for real-time collaboration using Yjs, handling
            over 500 concurrent collaborative sesssions.
        </li>
        <li>
            Synced horizontally-scaled WS instances with Redis Pub/Sub, which reduced infrastructure costs by 37%
            compared to Firestore's real-time database while maintaining 100% consistency and minimal latency. 
        </li>
        <li>
            Dockerized Go and Node.js servers to leverage Cloud Run's auto scaling and zero-downtime deployments.
            Used multi-stage builds to significantly reduce image size.
        </li>
    </ul>
</main>

<style>
    li a,
    h3 a {
        transition: all 0.2s ease;
        display: inline-block;
    }

    li a:hover,
    h3 a:hover, 
    p a:hover {
        text-decoration: underline;
    }

    li a::before {
        content: "<";
        translate: -1.25rem;
        transition: all 0.2s ease;
        position: absolute;
        display: inline-block;
        transform-origin: center;
    }

    li a:hover::before {
        transform: translateX(-10px) scale(1.2);
    }
</style>
