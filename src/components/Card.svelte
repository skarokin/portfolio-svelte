<script>
    import "../app.css";
    export let title = "";
    export let githubLink = "";
    export let websiteName = "";
    export let websiteLink = "";
    export let description = "";

    const projectURL = `/projects/${title.replace(":", "")}`
</script>

<div class="my-4 border rounded-md p-4 bg-[var(--card-bg)]">
    <h3 class="text-sm sm:text-base">
        <a href={projectURL}>{title}</a> |
        <a href={githubLink} target="_blank">GitHub</a>
        {#if websiteLink}
            | <a href={websiteLink} target="_blank">{websiteName}</a>
        {/if}
    </h3>
    <hr class="border-[var(--text-main)] w-full mb-2" />
    <p class="text-sm sm:text-base">{description}</p>
    <h5 class="text-sm sm:text-base mt-4">
        <a href={projectURL}>read more</a>
    </h5>
</div>

<style>
    h3 a,
    h5 a {
        transition: all 0.2s ease;
        display: inline-block;
    }

    h3 a:hover,
    h5 a:hover {
        text-decoration: underline;
    }

    h5 a::after {
        font-family: monospace;
        content: ">";
        margin-left: 0.5rem;
        transition: all 0.2s ease;
        display: inline-block;
        transform-origin: center;
    }

    h5 a:hover::after {
        transform: translateX(5px) scale(1.1);
    }
</style>
