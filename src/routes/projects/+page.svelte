<script>
    import Card from "../../components/Card.svelte";
</script>

<main
    class="text-[var(--text-main)] flex flex-col justify-start min-h-screen pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <Card
        title="grammaCy"
        githubLink="https://github.com/skarokin/grammacy"
        websiteLink="https://grammacy.com/"
        description="A multi-language grammar checking library built with spaCy to build dependency parser-based grammar checkers.
        Our prepackaged English model rivals transformer NMT models with significantly decreased latency, model size, computational
        cost, and development time."
    />

    <Card
        title="ref:type"
        githubLink="https://github.com/skarokin/ref-type"
        websiteLink="https://https://steam-link-409216.web.app/"
        description="A competitive typing game built with React and Node. Uses Google Cloud SQL to store user data and leaderboard status."
    />

    <Card
        title="pycaptcha"
        githubLink="https://github.com/skarokin/pycaptcha"
        websiteLink=""
        description="A CAPTCHA system that fetches images from Google Street View, using a custom-trained YOLOv4 model to generate tests.
        NumPy, Pandas, and OpenCV are used in dataset augmentation pipelines and to preprocess images before test generation."
    />

    <Card
        title="MYnote.md"
        githubLink="https://github.com/skarokin/MYnote.md"
        websiteLink=""
        description="A markdown note-taking app built with Node. Stores notes locally and renders them with markdown-it.
        My first ever project!"
    />
</main>
