<script>
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let isMobileMenuOpen = false;
    const toggleMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    };
</script>

<header
    class="flex flex-row justify-between font-josefin-slab mt-4 absolute w-full"
>
    <div class="ml-4 sm:ml-16 font-semibold text-base sm:text-xl skarokin">
        <a href="/"> skarokin </a>
    </div>
    <ul class="hidden sm:flex font-semibold text-base sm:text-xl">
        <li class="mr-16">
            <a href="/projects"> projects </a>
        </li>
        <li class="mr-16">
            <a href="/contacts"> contacts </a>
        </li>
        <li class="mr-16">
            <a href="/about"> about </a>
        </li>
        <li class="mr-16">
            <a href="/resume"> resume </a>
        </li>
    </ul>
    <button class="sm:hidden mx-4" on:click={toggleMenu}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>
    </button>
    {#if isMobileMenuOpen}
        <!-- if clicking outside of the menu, close it -->
        <button
            class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            on:click={toggleMenu}
            aria-label="Toggle Menu"
        ></button>
        <div
            class="fixed top-0 right-0 h-full w-2/3 bg-[var(--card-bg)] shadow-lg z-50"
            transition:slide={{ duration: 300, easing: quintOut, axis: "x" }}
        >
            <button
                class="absolute top-2 right-4 text-4xl"
                on:click={toggleMenu}
            >
                &times;
            </button>
            <div class="flex flex-col justify-start mt-16 px-8">
                <p class="text-xl font-semibold">skarokin</p>
                <hr class="border-[var(--text-main)] w-full mb-2" />
                <ul class="ml-2 font-semibold text-base space-y-8">
                    <li>
                        <a href="/projects"> projects </a>
                    <li>
                        <a href="/contacts"> contacts </a>
                    </li>
                    <li>
                        <a href="/about"> about </a>
                    </li>
                    <li>
                        <a href="/resume"> resume </a>
                    </li>
                </ul>
            </div>
        </div>
    {/if}
</header>

<style>
    li {
        list-style-type: "/";
        padding-left: 0.5rem;
        max-width: fit-content;
        transition: all 0.2s ease;
    }

    li:hover {
        list-style-type: ">";
        transform: scale(1.05);
    }
    
    li a {
        text-decoration: none;
        color: var(--text-main);
    }

    li a:hover {
        color: var(--peach);
    }

    .skarokin {
        transition: all 0.2s ease;
    }

    .skarokin:hover {
        color: var(--peach);
        transform: scale(1.05);
    }

    @media (min-width: 641px) {
        .skarokin::before {
            content: "<";
            color: var(--text-main);
            position: absolute;
            transform: translate(0, 0);
            display: inline-block;
            transform-origin: center;
            opacity: 0;
            transition:
                opacity 0.1s ease,
                transform 0.2s ease;
        }

        .skarokin:hover::before {
            opacity: 1;
            transform: translate(-1em, 0);
        }
    }
</style>
