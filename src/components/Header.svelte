<header
    class="flex flex-row justify-between font-josefin-slab mt-4 absolute w-full"
>
    <div class="mx-4 sm:mx-16 font-semibold text-base sm:text-xl skarokin">
        <a href="/"> skarokin </a>
    </div>
    <ul class="flex font-semibold text-base sm:text-xl">
        <li class="mr-4 sm:mr-16">
            <a href="/projects"> projects </a>
        </li>
        <li class="mr-4 sm:mr-16">
            <a href="/contacts"> contacts </a>
        </li>
        <li class="mr-4 sm:mr-16">
            <a href="/about"> about </a>
        </li>
        <li class="mr-4 sm:mr-16">
            <a href="/resume"> resume </a>
        </li>
    </ul>
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
        transform: scale(1.1);
    }

    @media (max-width: 640px) {
        li {
            padding-left: 0.15rem;
        }

        li:hover {
            transform: scale(1.05);
        }

        .skarokin a {
            font-size: 0;
            display: inline-block;
        }

        .skarokin a::before {
            content: "<";
            font-size: 1.5rem;
            color: var(--text-main);
        }

        .skarokin a:active::before {
            color: var(--peach);
        }
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
        transform: scale(1.1);
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
