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
            <li class="text-gray-500" aria-current="page">copium</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-lg sm:text-2xl">copium</h1>
    <h3 class="font-semibold text-base sm:text-xl">
        <a href="https://github.com/juhun32/copium" target="_blank">
            github
        </a>
        |
        <a href="https://copium.dev" target="_blank"> copium.dev </a>
    </h3>
    <h5 class="text-sm sm:text-base mb-2 sm:mb-4">
        Go, RabbitMQ, SvelteKit, Docker, Algolia, GCP
    </h5>
    <p class="text-sm sm:text-base mb-2">
        Copium streamlines the internship hunt for tech students with a focused, purpose-built tracking solution, stripping
        away the noise and clutter of general job boards to deliver a lightning-fast, reliable platform 
        wrapped in a beautiful and modern UI. Designed for scale, reliability, and speed for the modern tech student.w
    </p>
    <p class="text-sm sm:text-base mb-2">
        Developed by me (tech lead, lead engineer) and
        <a href="https://github.com/juhun32" target="_blank">Juhun Park</a> (co-lead engineer).
    </p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>
            SvelteKit frontend with beautiful and responsive shadcn-ui components.
        </li>
        <li>
            Implemented pagination to reduce payload response sizes by 75%, cutting outgoing data transfer costs by 30%.
        </li>
        <li>
            Distributed search and indexing pipeline with Go and RabbitMQ on Google Compute Engine, scaling to 3000
            concurrent Algolia index operations with sub-100ms search latency using goroutine worker pools.
        </li>
        <li>
            Manages 350 users with Google Cloud SQL.
        </li>
        <li>
            Scrapes tech internship listings with Python.
        </li>
    </ul>
</main>

<style>
    li a,
    h3 a,
    p a {
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
