<main
    class="text-[var(--text-main)] flex flex-col justify-start min-h-screen pt-24 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab"
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
            <li class="text-gray-500" aria-current="page">pycaptcha</li>
        </ul>
    </nav>

    <h1 class="font-semibold text-2xl sm:text-4xl mb-0.5">pycaptcha</h1>
    <h3 class="font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">
        <a href="https://github.com/skarokin/pycaptcha" target="_blank">
            github
        </a>
    </h3>
    <h5 class="text-base sm:text-xl mb-4 sm:mb-8">
        Python, NumPy, Pandas, Matplotlib, OpenCV, YOLOv4
    </h5>
    <p class="mb-2">
        A CAPTCHA system that generates tests with YOLOv4 object detection on
        Google Street View images.
    </p>
    <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8">
        <li>
            Image augmentation pipeline with OpenCV, NumPy, and Matplotlib to
            generate training data.
        </li>
        <li>
            Trained YOLOv4 on 12 classes with 0.05 loss and 0.9 mAP from Google
            Open Images Dataset.
        </li>
        <li>
            NumPy and Pandas to process and filter images before test generation
            to ensure quality of tests.
        </li>
    </ul>
</main>

<style>
    li a,
    h3 a {
        transition: all 0.2s ease;
        display: inline-block;
    }

    li a:hover,
    h3 a:hover {
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
        color: var(--peach);
    }
</style>
