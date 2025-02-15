<script>
    import Card from "../../components/Card.svelte";
</script>

<main
    class="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <Card
        title="copium"
        githubLink="https://github.com/juhun32/copium"
        websiteName="copium.dev"
        websiteLink="https://copium.dev/"
        date="Jan 2025 - Present"
        description="A SvelteKit tech internship tracking platform that aggregates internship listings from various sources in real-time.
        Uses a distributed Go/RabbitMQ search indexing pipeline on Google Compute Engine for fast,
        scalable, and reliable Algolia indexing. Leverages event sourcing for eventual consistency between data sources. Front-facing
        backend API built with Go, deployed on Google Cloud Run with Docker. Features Google Sign-In with OAuth2 and uses
        Python to scrape internship listings."
    />

    <Card
        title="ref:note"
        githubLink="https://github.com/skarokin/ref-note"
        websiteName="refnote.app"
        websiteLink="https://refnote.app/"
        date="Aug 2024 - Sep 2024"
        description="A Next.js note-taking app for students, focusing on class-based organization and real-time collaboration.
        Collaborative features implemented with a Node.js WebSockets server using Yjs on Google Cloud Run, using Redis to cache
        note data and Redis Pub/Sub to broadcast CRDT updates across horizontally scaled instances.
        Published a Go backend on Google Cloud Run with Docker to manage data and granular permissions on a
        Firestore database. Uses OAuth2 (Google Sign-In) and JWT for authentication."
    />

    <Card
        title="grammaCy"
        githubLink="https://github.com/skarokin/grammacy"
        websiteName="grammacy.com"
        websiteLink="https://grammacy.com/"
        date="Mar 2024 - Jul 2024"
        description="A multi-language grammar checking library built with spaCy to build dependency parser-based grammar checkers.
        Prepackaged English model rivals transformer NMT models with significantly decreased latency, model size, computational
        cost, and development time."
    />

    <Card
        title="pycaptcha"
        githubLink="https://github.com/skarokin/pycaptcha"
        websiteLink=""
        date="Jan 2024 - Feb 2024"
        description="A CAPTCHA system that fetches images from Google Street View, using a custom-trained YOLOv4 model to generate tests.
        NumPy, Pandas, and OpenCV are used in dataset augmentation pipelines and to preprocess images before test generation."
    />

    <Card
        title="ref:type"
        githubLink="https://github.com/skarokin/ref-type"
        websiteName="reftype.app"
        websiteLink="https://steam-link-409216.web.app/"
        date="Nov 2023 - Jan 2024"
        description="My first full-stack application! A competitive typing game built with React and Node.js. Uses Google Cloud SQL
        to store user data and leaderboard status."
    />

    <Card
        title="MYnote.md"
        githubLink="https://github.com/skarokin/MYnote.md"
        websiteLink=""
        date="May 2023 - Jun 2023"
        description="My first ever project! A markdown note-taking app built with Node.js. Stores notes locally and renders them with markdown-it."
    />
</main>
