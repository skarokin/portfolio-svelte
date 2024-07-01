<header class="flex flex-row justify-between font-josefin-slab mt-4 absolute w-full">
    <div class="mx-4 sm:mx-16 font-semibold text-md sm:text-xl">
        <a href="/">
            skarokin
        </a>
    </div>
    <ul class="flex font-semibold text-md sm:text-xl">
        <li class="mr-4 sm:mr-16">
            <a href="/projects">
                projects
            </a>
        </li>
        <li class="mr-4 sm:mr-16">
            <a href="/contacts">
                contacts
            </a>
        </li>
        <li class="mr-4 sm:mr-16">
            <a href="/about">
                about
            </a>
        </li>
        <li class="mr-4 sm:mr-16">
            <a href="/resume">
                resume
            </a>
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
            padding-left: 0.25rem;
        }

        li:hover {
            transform: scale(1.05);
        }
    }

    li a {
        text-decoration: none;
        color: #4c4f69;
    }

    
    li a:hover {
        color: var(--peach);
    }
</style>