<main
    class="text-[var(--text-main)] flex flex-col justify-start min-h-screen pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
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
            <li class="text-gray-500" aria-current="page">ref:type</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-2xl sm:text-4xl mb-0.5">ref:type</h1>
    <h3 class="font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">
        <a href="https://github.com/skarokin/ref-type" target="_blank">
            github
        </a>
        |
        <a href="https://steam-link-409216.web.app/" target="_blank">
            reftype.app
        </a>
    </h3>
    <h5 class="text-base sm:text-xl mb-4 sm:mb-8">
        TypeScript, Node.js, Express.js, React, Tailwind, GCP
    </h5>
    <p class="mb-2">
        A full-stack competitive typing game. Users compete for the top 10
        leaderboard positions.
    </p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>
            Frontend built with React and Tailwind CSS, deployed on Firebase
            Hosting.
        </li>
        <li>
            Backend built with Node and Express, deployed on Firebase Cloud
            Functions.
        </li>
        <li>Cookies and JWT for authentication and user sessions.</li>
        <li>
            MySQL database hosted on Google Cloud SQL for user information.
            Custom hash and salt with bcrypt for password security.
        </li>
        <li>Live-updated leaderboard storing the top 10 typers.</li>
    </ul>
</main>

<style>
    li a,
    h3 a {
        transition: all 0.2s ease;
        display: inline-block;
    }

    li a:hover,
    h3 a:hover {
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
        color: var(--peach);
    }
</style>
