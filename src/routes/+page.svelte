<script>
    import sean from "$lib/assets/sean.jpg";
</script>

<!-- vertical centering only for the home page -->
<main
    class="text-[var(--text-main)] flex flex-col justify-center min-h-screen pt-0 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <img
        src={sean}
        alt="sean kim"
        class="w-[150px] sm:w-[200px] h-auto rounded-full mb-8 self-center sm:self-start shadow-2xl"
    />

    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">
        Sean Kim
    </h1>
    <h3 class="font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">
        Rutgers University-New Brunswick, 2026
    </h3>

    <p class="text-md sm:text-xl mb-4 sm:mb-8">
        I'm a CS student based in Bergen County, NJ with experience in ML engineering,
        full-stack web development, and DevOps.
    </p>

    <ul class="pl-2 font-semibold text-md sm:text-xl">
        <li>
            <a href="/projects">projects</a>
        </li>
        <li>
            <a href="/contacts">contacts</a>
        </li>
        <li>
            <a href="/about">about</a>
        </li>
        <li>
            <a href="/resume">resume</a>
        </li>
    </ul>
</main>

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
        padding-left: 0.25rem;
    }

    li a {
        color: var(--text-main);
    }

    li a:hover {
        color: var(--peach);
    }
</style>
