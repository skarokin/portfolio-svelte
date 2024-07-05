<main
    class="text-[var(--text-main)] flex flex-col justify-start min-h-screen pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <p class="text-sm sm:text-base mb-4">
        interested? check out the
        <a
            href="https://docs.google.com/document/d/1Lx08w3H91Z7bkabc3S1iGBtXa9qtNXdhNe58tYcncno/export?format=pdf"
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
        <h3 class="font-semibold text-xl sm:text-2xl">UHACCS Hackathon 2022</h3>
        <h5 class="text-lg sm:text-xl">4th place</h5>
        <h5 class="text-lg sm:text-xl">Dec 2022</h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li>
                Led a two-person team to develop a housing price prediction
                model with Java on CSV datasets
            </li>
            <li>
                Implemented ordinary linear regression to predict prices based
                on square footage, number of rooms, and location
            </li>
        </ul>
    </div>
    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">projects</h1>
    <hr class="border-[var(--text-main)] w-1/2 my-4" />
    <div class="bg-[var(--card-bg)] p-4 rounded-md mb-8">
        <h3 class="font-semibold text-xl sm:text-2xl">grammaCy</h3>
        <h5 class="text-lg sm:text-xl">
            Python, spaCy, Flask, AWS EC2, Docker, Svelte, Firebase
        </h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4">
            <li>
                Developed a multi-language grammar checking library with spaCy
                to build real-time grammar checkers with dependency parsing.
            </li>
            <li>
                Created a CoNLL-U corpus augmentor with multiprocessing and
                multithreading, increasing processing speeds by over 8x on a 2
                million-word corpus.
            </li>
            <li>
                Built an English grammar checking model with a GUM-trained
                dependency parser (93% LAS) and POS tagger (98% accuracy),
                checking for 20+ grammar errors with 83% accuracy.
            </li>
            <li>
                Deployed the English model as a dockerized Flask API on AWS EC2,
                averaging 25ms prediction time.
            </li>
            <li>
                Created a Svelte web page for library documentation and usage
                guides, deployed on Firebase Hosting.
            </li>
        </ul>
        <h3 class="font-semibold text-xl sm:text-2xl">ref:type</h3>
        <h5 class="text-lg sm:text-xl">TypeScript, React, Node, GCP</h5>
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li>
                Developed a competitive typing game with React, deployed on
                Firebase Hosting with 120 active users.
            </li>
            <li>
                Leveraged Firebase Cloud Functions written in Node for live
                leaderboard and user profile updates, ensuring consistency
                between clients with sub-150ms latency.
            </li>
            <li>
                Implemented a MySQL database on Google Cloud SQL to manage user
                data and leaderboard status.
            </li>
        </ul>
    </div>
    <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">skills</h1>
    <hr class="border-[var(--text-main)] w-1/2 my-4" />
    <div class="bg-[var(--card-bg)] p-4 rounded-md mb-8">
        <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8">
            <li>
                <span class="font-bold">Languages:</span> Python, Java, TypeScript,
                JavaScript, C, SQL
            </li>
            <li>
                <span class="font-bold">Web Dev:</span> Node, Flask, Express, React,
                Next, Svelte, Tailwind
            </li>
            <li>
                <span class="font-bold">ML/DS:</span> NumPy, Pandas, Matplotlib,
                PyTorch, OpenCV, spaCy
            </li>
            <li>
                <span class="font-bold">Tools/Platforms:</span> Git, GCP, AWS
                EC2, Docker, Jupyter Notebook
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
