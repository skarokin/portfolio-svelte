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
            <li class="text-gray-500" aria-current="page">MYnote.md</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-lg sm:text-2xl">MYnote.md</h1>
    <h3 class="font-semibold text-base sm:text-xl">
        <a href="https://github.com/skarokin/MYnote.md" target="_blank">
            github
        </a>
    </h3>
    <h5 class="text-sm sm:text-base mb-2 sm:mb-4">
        JavaScript, Node.js, HTML, CSS
    </h5>
    <p class="text-sm sm:text-base mb-2">A markdown note-taking app with Electron. My first ever project!</p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>Supports syntax highlighting in code blocks and LaTeX.</li>
        <li>
            Notes are stored locally as .md files through the fs module and
            rendered with markdown-it.
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
    }
</style>
