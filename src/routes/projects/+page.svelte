<script>
    import Card from "../../components/Card.svelte";
</script>

<main
    class="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <Card
        title="grammaCy"
        githubLink="https://github.com/skarokin/grammacy"
        websiteName="grammacy.com"
        websiteLink="https://grammacy.com/"
        description="A multi-language grammar checking library built with spaCy to build dependency parser-based grammar checkers.
        Our prepackaged English model rivals transformer NMT models with significantly decreased latency, model size, computational
        cost, and development time."
    />

    <Card
        title="ref:note"
        githubLink="https://github.com/akuwuh/ref-note"
        websiteName="refnote.app"
        websiteLink="https://refnote.app/"
        description="A Next.js note-taking app for students, focusing on class-based organization and real-time collaboration.
        Collaborative features implemented with a Node.js WebSockets server using Yjs on Google Cloud Run.
        Uses a Go backend on Google Cloud Run to manage data and granular permissions on a
        Firestore database. Uses OAuth2 (Google Sign-In) and JWT for authentication."
    />

    <Card
        title="ref:type"
        githubLink="https://github.com/skarokin/ref-type"
        websiteName="reftype.app"
        websiteLink="https://steam-link-409216.web.app/"
        description="A competitive typing game built with React and Node.js. Uses Google Cloud SQL
        to store user data and leaderboard status."
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
        description="A markdown note-taking app built with Node.js. Stores notes locally and renders them with markdown-it.
        My first ever project!"
    />
</main>
