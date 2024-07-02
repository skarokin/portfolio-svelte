<main
    class="text-[var(--text-main)] flex flex-col justify-start min-h-screen pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <div class="mb-16">
        <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">contacts</h1>
        <hr class="border-[var(--text-main)] w-1/2 my-4" />
        <ul class="list-none mb-4 sm:mb-8">
            <li class="text-base sm:text-xl mb-2 sm:mb-4">
                LinkedIn >
                <a
                    href="https://www.linkedin.com/in/sean-kim-959174238/"
                    target="_blank"
                >
                    Sean Kim
                </a>
            </li>
            <li class="text-md sm:text-xl mb-2 sm:mb-4">
                Email >
                <a href="mailto:taemin.kim0327@gmail.com" target="_blank">
                    taemin.kim0327@gmail.com
                </a>
            </li>
            <li class="text-md sm:text-xl mb-2 sm:mb-4">
                GitHub >
                <a href="https://github.com/skarokin" target="_blank">
                    skarokin
                </a>
            </li>
            <li class="text-md sm:text-xl">
                Discord >
                <a
                    href="https://www.discord.com/users/257628157237133313"
                    target="_blank"
                >
                    skarokin
                </a>
            </li>
        </ul>
        <p class="text-base sm:text-lg">
            Feel free to reach out to me on any of these platforms! I'm open to collaborations, job opportunities, or just a chat.
        </p>
    </div>
</main>

<style>
    li {
        max-width: fit-content;
    }

    li a {
        transition: all 0.2s ease;
        display: inline-block; 
    }

    li a:hover {
        text-decoration: underline;
    }

    li a::after {
        font-family: monospace;
        content: "\2197";
        margin-left: 0.25em;
        transition: all 0.2s ease; 
        display: inline-block; 
        transform-origin: center; 
    }

    li a:hover::after {
        transform: translate(5px, -5px) scale(1.3);
        color: var(--peach);
    }
</style>
