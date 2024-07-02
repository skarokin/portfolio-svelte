<script>
    import "../app.css";
    export let title = "title";
    export let githubLink = "";
    export let websiteLink = "";
    export let description = "";
</script>

<div class="my-4 border rounded-md p-4 bg-[var(--card-bg)]">
    <h1 class="text-md sm:text-lg">
        <span>{title}</span> |
        <a href={githubLink} target="_blank">GitHub</a>
        {#if websiteLink}
            | <a href={websiteLink} target="_blank">Website</a>
        {/if}
    </h1>
    <hr class="mb-4 border-[var(--text-main)]" />
    <p class="text-sm sm:text-base">{description}</p>
    <h3 class="text-sm sm:text-base mt-4">
        <a href={`/projects/${title.replace(":", "")}`}>read more</a>
    </h3>
</div>

<style>
    h1 a,
    h3 a {
        transition: all 0.2s ease;
        display: inline-block;
    }

    h1 a:hover,
    h3 a:hover {
        text-decoration: underline;
    }

    h1 a::after,
    h3 a::after {
        font-family: monospace;
        content: "\2197";
        margin-left: 0.25em;
        transition: all 0.2s ease;
        display: inline-block;
        transform-origin: center;
    }

    h1 a:hover::after {
        transform: translate(2px, -2px) scale(1.2);
        color: var(--peach);
    }

    h3 a::after {
        font-family: monospace;
        content: ">";
        margin-left: 0.25em;
        transition: all 0.2s ease;
        display: inline-block;
        transform-origin: center;
    }

    h3 a:hover::after {
        transform: translateX(5px) scale(1.1);
        color: var(--peach);
    }
</style>
