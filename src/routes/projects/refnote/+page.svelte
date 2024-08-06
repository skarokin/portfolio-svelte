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
            <li class="text-gray-500" aria-current="page">ref:note</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-2xl sm:text-4xl mb-0.5">ref:note</h1>
    <h3 class="font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">
        <a href="https://github.com/akuwuh/ref-note" target="_blank">
            github
        </a>
        |
        <a href="https://www.refnote.app/" target="_blank">
            refnote.app
        </a>
    </h3>
    <h5 class="text-base sm:text-xl mb-4 sm:mb-8">
        Go, TypeScript, Next.js, Node.js, Socket.IO, Firestore, AWS EC2, GCP
    </h5>
    <p class="mb-2">
        A tool for students to manage notes for all of their classes.
        Students can share classes with granular permissions and collaborate on notes in real-time.
    </p>
    <p class="mb-2">
        Developed by <a href="https://github.com/akuwuh" target="_blank">Isaac Nguyen</a> (tbd) and me (tbd).
    </p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>
            this project is currently in development
        </li>
        <li>
            but should be done before the school year starts
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
        color: var(--peach);
    }
</style>
