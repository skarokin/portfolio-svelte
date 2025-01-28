<script>
    import resume from "$lib/assets/SeanKimResumeJan2025.pdf";
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
            Rutgers student building high-scale, low-latency cloud services.
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
            <li><span class="font-bold">GPA:</span> 3.90</li>
            <li><span class="font-bold">Dean's List:</span> 2022-2024</li>
            <li><span class="font-bold">Coursework:</span> DSA, Deep Learning, Databases, Data Management, Computer Architecture </li>
    </section>

    <!-- experience -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">experience</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <p class="text-sm sm:text-base font-bold">Software Engineer Intern</p>
        <p class="text-sm sm:text-base">ACL Agency LLC</p>
        <p class="text-sm sm:text-base">May 2024 - Aug 2024</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li>Rebuilt company website with SvelteKit, increasing market presence in the local community with SEO-friendly
                Korean language support which boosted site traffic by 30% and increased conversion rate by 25%.
            </li>
            <li>
                Optimized an internal Go service with goroutines, processing over 500 batch insurance claims 42% faster.
            </li>
            <li>
                Migrated service to a horizontally scaling architecture on AWS EC2 using Docker, ELB, and EC2 Auto
                Scaling, reducing infrastructure costs by 19% while accommodating a 12% customer base expansion
            </li>
            <li>
                Implemented a MySQL database on Amazon RDS, automating manual data processing which reduced data
                entry errors to under 1% and saved 13 hours per week in employee time on data searching and validation.
            </li>
        </ul>
    </section>

    <!-- projects -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">projects</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <p class="text-sm sm:text-base font-bold">ref:note</p>
        <p class="text-sm sm:text-base">Go, TypeScript, Node.js, Next.js, OAuth2, Docker, GCP, Vercel</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li>Launched a Next.js collaborative note editor on Vercel, supporting 500 concurrent collaborative sessions.</li>
            <li>Enabled real-time collaboration using a Node.js WebSockets server on Google Cloud Run with Docker,
                synchronizing horizontally scaled instances via Redis Pub/Sub which reduced infrastructure costs by 37%.</li>
            <li>Deployed a horizontally-scaling Go backend on Google Cloud Run with Docker, maintaining sub-100ms
                cold starts and processing Firestore operations over 50% faster to support over 5,000 daily requests.</li>
            <li>Streamlined user authentication with OAuth2 and JWT, improving user registration conversion rates by 17%.</li>
        </ul>
        <p class="text-sm sm:text-base font-bold">grammaCy</p>
        <p class="text-sm sm:text-base">Python, spaCy, Flask, Nginx, Docker, AWS EC2, SvelteKit, Firebase</p>
        <ul class="text-xs sm:text-sm list-disc pl-6 mb-2">
            <li>Developed a grammar checking library with spaCy, achieving 83% accuracy on over 20 English grammar errors.</li>
            <li>Engineered a Flask API hosted on AWS EC2, configured with Docker Compose and an Nginx reverse
                proxy to handle over 250 concurrent requests at peak traffic with sub-200ms end-to-end latency.</li>
            <li>Reduced deployment costs by 27% and improved latency by 71% via the library’s efficient model architecture.</li>
            <li>Parallelized a CoNLL-U augmentor, achieving a 10x speedup and increasing feature velocity by 20%.</li>
            <li>Created an interactive SvelteKit documentation site on Firebase, reducing library integration time by 30%.</li>
        </ul>
    </section>
    <!-- skills -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">skills</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <div class="grid grid-rows-2 grid-cols-2 justify-between gap-2 sm:gap-4">
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Languages</p>
                <p class="text-xs sm:text-sm">Python, TS/JS, Go, Java, C, SQL, OCaml</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">ML/DS</p>
                <p class="text-xs sm:text-sm">NumPy, Pandas, PyTorch, OpenCV, spaCy, NLTK</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Full-Stack Development</p>
                <p class="text-xs sm:text-sm">Nginx, Flask, Node.js, Express.js, React.js, Next.js, SvelteKit, Tailwind</p>
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
