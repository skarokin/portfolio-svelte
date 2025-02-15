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
        Copium.dev streamlines the internship hunt for tech students with
        a focused, purpose-built solution that strips away the clutter of general job boards. Leverages microservices,
        message queues, and event sourcing for a distributed, scalable, fault-tolerant, and high-performance infrastructure.
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
            Implemented pagination to for sub-100ms page loads and 50% reduced data transfer costs.
        </li>
        <li>
            Search and indexing pipeline with Go and RabbitMQ on Google Compute Engine, scaling to 10,000
            concurrent Algolia index operations using goroutine worker pools.
        </li>
        <li>
            Scrapes tech internship listings with Python for 99% data freshness on Algolia.
        </li>
        <li>
            Guaranteed eventual consistency and disaster recovery across distributed data stores with event sourcing.
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
