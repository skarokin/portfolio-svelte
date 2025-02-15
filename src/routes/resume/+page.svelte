<script>
    import resume from "$lib/assets/SeanKimResumeFeb2025.pdf";
</script>

<main
    class="text-[var(--text-main)] flex flex-col justify-start pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
>
    <!-- intro -->
    <section class="mb-4 sm:mb-8">
        <a
            href={resume}
            target="_blank"
            class="text-sm sm:text-base"
        >
            pdf version
        </a>
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
            <li>Reduced infrastructure costs by 19% while accommodating a 12% customer base expansion by migrating cloud
                infrastructure to AWS EC2 using Docker, Elastic Load Balancer, and EC2 Auto Scaling.
            </li>
            <li>
                Processed over 500 batch insurance claims 42% faster by optimizing an internal Go service with goroutines.
            </li>
            <li>
                Rebuilt company website with SvelteKit, increasing market presence in the local community with SEO-friendly
                Korean language support which boosted site traffic by 30% and increased conversion rate by 25%.
            </li>
        </ul>
    </section>

    <!-- projects -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">projects</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />

        <p class="text-sm sm:text-base font-bold">copium</p>
        <p class="text-sm sm:text-base">Go, Python, TypeScript, SvelteKit, RabbitMQ, Nginx, Docker, GCP</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li>Built a SvelteKit internship management platform using Google Cloud SQL for user data and live postings.</li>
            <li>Scaled search engine indexing to 10,000 concurrent operations with a distributed RabbitMQ and Go pipeline.</li>
            <li>Achieved sub-100ms page load latency and reduced data transfer costs by 50% with paginated Algolia searches.</li>
            <li>Delivered 99% data freshness for internship searches with a scheduled Python scraper for Algolia indexing.</li>
        </ul>

        <p class="text-sm sm:text-base font-bold">ref:note</p>
        <p class="text-sm sm:text-base">Go, TypeScript, Node.js, Next.js, OAuth2, Docker, GCP, Vercel</p>
        <ul class="text-xs sm:text-sm list-disc pl-6">
            <li>Launched a Next.js collaborative note editor on Vercel, supporting 1000 concurrent collaborative sessions.</li>
            <li>Reduced deployment costs by 37% by optimizing Node.js WebSocket synchronization with Redis Pub/Sub.</li>
            <li>Deployed a Go/Docker backend on Cloud Run with sub-50ms cold starts for low-latency Firestore queries.</li>
            <li>Streamlined user authentication with OAuth2 and JWT, improving user registration conversion rates by 17%.</li>
        </ul>

        <p class="text-sm sm:text-base font-bold">grammaCy</p>
        <p class="text-sm sm:text-base">Python, spaCy, Flask, Nginx, Docker, AWS EC2, SvelteKit, Firebase</p>
        <ul class="text-xs sm:text-sm list-disc pl-6 mb-2">
            <li>Developed dependency tree-based grammar checking with spaCy, achieving 83% accuracy on 20 English errors.</li>
            <li>Handled over 250 concurrent requests at peak traffic with sub-200ms end-to-end latency by engineering a
                Flask API hosted on AWS EC2 configured with Docker Compose and an Nginx reverse proxy.</li>
            <li>Sped up augmentation times by 10x and boosted feature velocity by 20% by parallelizing a CoNLL-U augmentor.</li>
        </ul>
    </section>
    <!-- skills -->
    <section class="mb-4 sm:mb-8">
        <h5 class="text-sm sm:text-base tracking-widest font-josefin-sans">skills</h5>
        <hr class="border-[var(--hr)] w-full mb-2" />
        <div class="flex flex-col gap-2 sm:gap-4">
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Languages</p>
                <p class="text-xs sm:text-sm">Go, Python, TypeScript, JavaScript, Java, C, SQL, OCaml</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Libraries & Frameworks</p>
                <p class="text-xs sm:text-sm">Flask, Node.js, Express.js, Next.js, SvelteKit</p>
            </div>
            <div class="flex flex-col">
                <p class="text-sm sm:text-base font-bold mb-2">Tools & Platforms</p>
                <p class="text-xs sm:text-sm">Git, AWS, Google Cloud Platform, MySQL, MongoDB, Docker, RabbitMQ, Nginx</p>
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
