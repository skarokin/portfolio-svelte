<main
    class="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <nav class="text-lg sm:text-xl mb-4 sm:mb-8">
        <ul class="list-none flex">
            <li>
                <a
                    href="/projects"
                    class="inline-block text-lg sm:text-xl mb-0"
                >
                    projects
                </a>
            </li>
            <li class="mx-2">/</li>
            <li class="text-gray-500" aria-current="page">grammaCy</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-lg sm:text-2xl">grammaCy</h1>
    <h3 class="font-semibold text-base sm:text-xl">
        <a href="https://github.com/skarokin/grammacy" target="_blank">
            github
        </a>
        |
        <a href="https://grammacy.com" target="_blank"> grammacy.com </a>
    </h3>
    <h5 class="text-sm sm:text-base mb-2 sm:mb-4">
        Python, spaCy, Flask, Docker, AWS EC2, SvelteKit, Firebase
    </h5>
    <p class="text-sm sm:text-base mb-2">
        A cutting-edge grammar checking tool that combines the speed and efficiency of
        rule-based systems with the accuracy of modern NLP techniques. Prioritizes speed,
        explainability, and resource efficiency while maintaing high accuracy through a unique
        dependency parse-driven approach. Designed for edge devices and real-time applications.

        Deployed as a Python library and a Flask API on AWS EC2 with Docker Compose.
    </p>
    <p class="text-sm sm:text-base mb-2">
        Developed by me (lead engineer),
        <a href="https://github.com/akuwuh" target="_blank">Isaac Nguyen</a> (python dev),
        <a href="https://github.com/PranshuS27" target="_blank">Pranshu Sarin</a> (linguistics).
    </p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>
            A customizable, multi-language grammar checking library built with spaCy.
        </li>
        <li>
            Builds fast, lightweight, CPU-optimized spaCy pipelines for
            dependency parser-based grammar checkers.
        </li>
        <li>
            Preprocessing tools to work with either constituency or dependency
            parse data.
        </li>
        <li>
            Multithreaded + multiprocessed CoNLL-U augmentor to inject grammar
            errors based on linguistic knowledge. Significant improvement over
            random error injection. Parallel and concurrent processing decreased
            processing time on OntoNotes 5.0 from &gt; 220s to 20s.
        </li>
        <li>
            Prepackaged English model trained on GUM corpus with 34
            augmentations. 83% accuracy on over 20 English grammar errors. 98% tagger accuracy, 93% parser LAS, and 98%
            morphologizer accuracy. Total model size is only 10.7MB.
        </li>
        <li>
            Prepacked rules include subject-verb agreement, proper usage of
            subjective and objective pronouns, proper usage of gerunds, copulas,
            and much more.
        </li>
        <li>
            Integrated with symspellpy for fast spelling correction.
        </li>
        <li>
            Built a Flask API to serve the model with Gunicorn. End-to-end latency less than 200ms, supports
            250+ concurrent requests on the t2 nano instance.
        </li>
        <li>
            Used Certbot and a cron job to get and automatically renew SSL certificates.
        </li>
        <li>
            Used Nginx for SSL termination, rate limiting, and load balancing.
        </li>
        <li>
            Deployed the Gunicorn, Nginx, and Certbot services on AWS EC2 with Docker Compose.    
        </li>
        <li>
            Deployed a Svelte website for library documentation, API usage, and a dev blog on Firebase Hosting.
        </li>
    </ul>
</main>

<style>
    li a,
    h3 a,
    p a {
        transition: all 0.2s ease;
        display: inline-block;
    }

    li a:hover,
    h3 a:hover,
    p a:hover {
        text-decoration: underline;
    }

    li a::before {
        content: "<";
        translate: -1.25rem;
        transition: all 0.2s ease;
        position: absolute;
        display: inline-block;
        transform-origin: center;
    }

    li a:hover::before {
        transform: translateX(-10px) scale(1.2);
    }
</style>
