<script>
    import resume from "$lib/assets/SeanKimNov2024.pdf";
</script>

<main
    class="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <!-- intro -->
    <section class="mb-4 sm:mb-8">
        <div class="flex flex-row justify-between">
        <h1 class="font-bold text-lg sm:text-2xl">Sean Kim</h1>
        <a
            href={resume}
            target="_blank"
            class="text-sm sm:text-base"
        >
            pdf version
        </a>
    </div>
        <p class="text-sm sm:text-base">
            Rutgers student passionate about building accurate NLP models for resource-constrained environments
            with experience in full-stack web development, DevOps, and MLOps.
        </p>
    </section>

    <!-- education -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">education</h5> 
        <hr class="border-[var(--hr)] w-full mb-2" />
        <p class="text-sm sm:text-base font-bold">Rutgers University-New Brunswick</p>
        <p class="text-sm sm:text-base">B.A. Computer Science</p>
        <p class="text-sm sm:text-base">Sep 2022 - May 2026</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li><span class="font-bold">GPA:</span> 3.88</li>
            <li><span class="font-bold">Dean's List:</span> 2022-2024</li>
            <li><span class="font-bold">Coursework:</span> DSA, Deep Learning, Databases, Data Management, Computer Architecture </li>
    </section>

    <!-- experience -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">experience</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <p class="text-sm sm:text-base font-bold">Full Stack Developer</p>
        <p class="text-sm sm:text-base">ACL Agency LLC</p>
        <p class="text-sm sm:text-base">Jun 2024 - Aug 2024</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li>Rebuilt company website with SvelteKit, adding SEO-friendly Korean language support with SSR which boosted site traffic by 30% and enhanced market presence in the local community.</li>
            <li>Optimized an internal Go service with goroutines, achieving a 42% increase in insurance claims processing speed on over 500 concurrent OCR and file compression tasks.</li>
            <li>Deployed service on AWS EC2 with Nginx for SSL termination and whitelisting using Docker Compose.</li>
        </ul>
    </section>

    <!-- projects -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">projects</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <p class="text-sm sm:text-base font-bold">grammaCy</p>
        <p class="text-sm sm:text-base">Python, spaCy, Flask, Nginx, Docker, AWS EC2, SvelteKit, Firebase</p>
        <ul class="text-xs sm:text-sm list-disc pl-6 mb-2">
            <li>Led a team of 3 to develop a grammar-checking library with spaCy featuring a CoNLL-U corpus augmentor that improved processing speeds on OntoNotes 5.0 by over 10x with parallel and concurrent processing.</li>
            <li>Built a prepackaged English model by training a dependency parser (93% LAS) and POS tagger (98% accuracy) on an augmented GUM corpus, checking over 20 grammar errors with 83% accuracy.</li>
            <li>Constructed a Flask API endpoint running on Gunicorn to serve over 600 concurrent English grammar and spell-checking requests, averaging 25ms prediction times.</li>
            <li>Deployed the endpoint behind an Nginx reverse proxy for SSL termination and rate limiting on AWS EC2 using Docker Compose.</li>
            <li>Created a SvelteKit site for library documentation and API guides, deployed on Firebase Hosting.</li>
        </ul>
        <p class="text-sm sm:text-base font-bold">ref:note</p>
        <p class="text-sm sm:text-base">Go, TypeScript, Node, Next, OAuth2, Docker, GCP, Vercel</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li>Led a team of 2 to develop a collaborative note editor with Next, deployed on Vercel.</li>
            <li>Implemented real-time collaboration using Yjs on a Node WebSockets server running on Google Cloud Run, handling 250 concurrent note edits with 100% consistency between clients.</li>
            <li>Built a Go backend for database operations on Google Cloud Run, reducing cold start times to 100ms.</li>
            <li>Secured API endpoints using OAuth2 and JWT, enabling 1000 users to safely access collaborative features.</li>
            <li>Leveraged Firestore to store user and note data, implementing granular access control for each note.</li>
        </ul>
    </section>
    <!-- skills -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">skills</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <div class="grid grid-rows-2 grid-cols-2 justify-between gap-2 sm:gap-4">
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Languages</p>
                <p class="text-xs sm:text-sm">Python, TS/JS, Go, Java, C, SQL</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">ML/DS</p>
                <p class="text-xs sm:text-sm">NumPy, Pandas, PyTorch, OpenCV, spaCy, NLTK</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Web Dev</p>
                <p class="text-xs sm:text-sm">Flask, Node, Express, Nginx, React, Next, SvelteKit, Tailwind</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Tools/Platforms</p>
                <p class="text-xs sm:text-sm">Git, AWS EC2, GCP, Vercel, Docker</p>
            </div>
        </div>
</main>

<style>
    a {
        transition: all 0.2s ease;
        display: inline-block;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }

    a::after {
        font-family: monospace;
        content: "\2197";
        margin-left: 0.25em;
        transition: all 0.2s ease;
        display: inline-block;
        transform-origin: center;
    }

    a:hover::after {
        transform: translate(5px, -5px) scale(1.3);
    }
</style>
