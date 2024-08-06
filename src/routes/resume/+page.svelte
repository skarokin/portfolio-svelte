<main
    class="text-[var(--text-main)] flex flex-col justify-start min-h-screen pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <p class="text-sm sm:text-base mb-4">
        interested? check out the
        <a
            href="https://docs.google.com/document/d/1tRDzDHee2Tzo69DIKUbjzBvazWD5S1xeZPv4q8h0x50/export?format=pdf"
            target="_blank"
        >
            pdf version
        </a>
    </p>

    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">education</h1>
    <hr class="border-[var(--text-main)] w-1/2 my-4" />
    <div class="bg-[var(--card-bg)] p-4 rounded-md mb-8">
        <h3 class="font-semibold text-xl sm:text-2xl">
            Rutgers University-New Brunswick
        </h3>
        <h5 class="text-lg sm:text-xl">Bachelor of Arts - Computer Science</h5>
        <h5 class="text-lg sm:text-xl">Sep 2022 - May 2026</h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li><span class="font-bold">GPA:</span> 3.88</li>
            <li><span class="font-bold">Dean's List:</span> 2022-2024</li>
            <li>
                <span class="font-bold">Coursework:</span> DSA, Computer Architecture, Databases, Data
                Management, Deep Learning, Principles of Programming Languages
            </li>
        </ul>
    </div>
    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">experience</h1>
    <hr class="border-[var(--text-main)] w-1/2 my-4" />
    <div class="bg-[var(--card-bg)] p-4 rounded-md mb-8">
        <h3 class="font-semibold text-xl sm:text-2xl">ACL Agency LLC</h3>
        <h5 class="text-lg sm:text-xl">Full-Stack Developer</h5>
        <h5 class="text-lg sm:text-xl">June 2024 - Aug 2024</h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li>
                Rebuilt company website with SvelteKit, adding SEO-friendly Korean language support with SSR
                which boosted site traffic by 30% and enhanced market presence in the local community.
            </li>
            <li>
                Optimized an internal Go service with goroutines, achieving a 42% increase in insurance claims
                processing speed on over 500 concurrent OCR and file compression tasks.
            </li>
            <li>
                Deployed service on AWS EC2 with Nginx for SSL termination and whitelisting using Docker Compose.
            </li>
        </ul>
    </div>
    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">projects</h1>
    <hr class="border-[var(--text-main)] w-1/2 my-4" />
    <div class="bg-[var(--card-bg)] p-4 rounded-md mb-8">
        <h3 class="font-semibold text-xl sm:text-2xl">grammaCy</h3>
        <h5 class="text-lg sm:text-xl">
            Python, spaCy, Flask, Nginx, Docker, AWS EC2, SvelteKit, Firebase
        </h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4">
            <li>
                Led a team of 3 to develop a grammar-checking library with spaCy featuring a CoNLL-U corpus augmentor that
                improved processing speeds on OntoNotes 5.0 by over 10x with parallel and concurrent processing.
            </li>
            <li>
                Built a prepackaged English model by training a dependency parser (93% LAS) and POS tagger (98% accuracy)
                on an augmented GUM corpus, checking over 20 grammar errors with 83% accuracy.
            </li>
            <li>
                Constructed a Flask API endpoint running on Gunicorn to serve over 600
                concurrent English grammar and spell-checking requests, averaging 25ms prediction times.
            </li>
            <li>
                Deployed the endpoint behind an Nginx reverse proxy for SSL termination and rate limiting on AWS EC2 using Docker Compose.
            </li>
            <li>
                Created a SvelteKit site for library documentation and API guides, deployed on Firebase Hosting.
            </li>
        </ul>
        <h3 class="font-semibold text-xl sm:text-2xl">ref:note</h3>
        <h5 class="text-lg sm:text-xl">Go, TypeScript, Node, Next, OAuth2, AWS EC2, GCP</h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li>
                Led a team of 2 to develop a collaborative note editor with Next, deployed on Firebase Hosting.
            </li>
            <li>
                Implemented real-time note collaboration using Socket.IO running on AWS EC2, handling 500
                concurrent note edits with 100% consistency between clients.
            </li>
            <li>
                Built a Go backend on Google Cloud Functions, resulting in cold start times under 100ms.
            </li>
            <li>
                Secured API endpoints using OAuth2 and JWT, enabling 1000 users to safely access collaborative features.
            </li>
            <li>
                Leveraged Firestore to store user and note data, implementing granular access control for each note.
            </li>
        </ul>
    </div>
    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">skills</h1>
    <hr class="border-[var(--text-main)] w-1/2 my-4" />
    <div class="bg-[var(--card-bg)] p-4 rounded-md mb-8">
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li>
                <span class="font-bold">Languages:</span> Python, TS/JS, Go, Java, C, SQL
            </li>
            <li>
                <span class="font-bold">ML/DS:</span> NumPy, Pandas, PyTorch, OpenCV, spaCy, NLTK
            </li>
            <li>
                <span class="font-bold">Web Dev:</span> Flask, Node, Express, Nginx, React, Next, Svelte, Tailwind
            </li>
            <li>
                <span class="font-bold">Tools/Platforms:</span> Git, AWS EC2, GCP, Docker
            </li>
        </ul>
    </div>
</main>

<style>
    p a {
        transition: all 0.2s ease;
        display: inline-block;
        font-weight: bold;
    }

    p a:hover {
        text-decoration: underline;
    }

    p a::after {
        font-family: monospace;
        content: "\2197";
        margin-left: 0.25em;
        transition: all 0.2s ease;
        display: inline-block;
        transform-origin: center;
    }

    p a:hover::after {
        transform: translate(5px, -5px) scale(1.3);
        color: var(--peach);
    }
</style>
