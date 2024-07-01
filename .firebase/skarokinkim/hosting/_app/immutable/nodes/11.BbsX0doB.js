import{s as l,n as a}from"../chunks/scheduler.BvLojk_z.js";import{S as n,i as o,e as c,c as m,n as p,o as d,b as g,d as h}from"../chunks/index.3TFik1IB.js";function u(r){let e,s=`<div class="inline-block svelte-188l715"><a href="/projects" class="inline-block text-lg sm:text-xl mb-4 svelte-188l715">back</a></div> <h1 class="font-semibold text-2xl sm:text-4xl -mb-0.5">grammaCy</h1> <h3 class="font-semibold text-lg sm:text-2xl mb-2 sm:mb-4 svelte-188l715"><a href="https://github.com/skarokin/grammacy" target="_blank" class="svelte-188l715">github</a>
        |
        <a href="https://grammacy.com" target="_blank" class="svelte-188l715">grammacy.com</a></h3> <h5 class="text-base sm:text-xl mb-4 sm:mb-8">Python, spaCy, Flask, Docker, AWS EC2, Svelte, Firebase</h5> <p>This project aims to improve the accuracy of rule-based grammar checking
        with dependency parsing. NMT-based systems are highly accurate, but are
        slow, resource-intensive, require significant development time, and
        often require GPUs to run. Traditional rule-based systems are extremely
        fast and lightweight, but are too inaccurate to be used in production.
        We leverage all the benefits of rule-based systems, while improving
        accuracy to a level that is competitive with NMT-based grammar checkers.</p> <p class="svelte-188l715">Developers: Me (library, model, rules, API, frontend),
        <a href="https://github.com/akuwuh" class="svelte-188l715">Isaac Nguyen</a> (library, API,
        frontend),
        <a href="https://github.com/PranshuS27" class="svelte-188l715">Pranshu Sarin</a> (rules, API)</p> <ul class="text-sm sm:text-base list-disc pl-4 sm:pl-8 mb-4 sm:mb-8"><li>A multi-language grammar checking library to produce CPU-optimized spaCy pipelines for dependency parser-based grammar checking.</li> <li>Builds fast, lightweight, CPU-optimized spaCy pipelines for
            dependency parser-based grammar checkers.</li> <li>Preprocessing tools to work with either constituency or dependency parse data.</li> <li>Multithreaded + multiprocessed CoNLL-U augmentor to inject grammar
            errors based on linguistic knowledge. Significant improvement over
            random error injection. Parallel and concurrent processing decreased
            processing time on OntoNotes 5.0 from &gt;220s to 20-30s.</li> <li>Prepackaged English spaCy pipeline trained on GUM corpus with 34
            augmentations. 98% tagger accuracy, 93% parser LAS, and 98%
            morphologizer accuracy. Total model size is only 10.7MB.</li> <li>Created over 20 dependency parse-based rules for English grammar
            checking including subject-verb agreement, proper usage of
            subjective and objective pronouns, proper usage of gerunds, copulas,
            and much more.</li> <li>Integrated English grammar checker with symspellpy for fast spelling
            correction.</li> <li>Built a Flask API for English grammar and spell checking, deployed
            on AWS EC2 through Docker. Average prediction time is 50ms.</li> <li>Developed a Svelte website for library documentation and API usage,
            deployed on Firebase Hosting.</li></ul>`;return{c(){e=c("main"),e.innerHTML=s,this.h()},l(t){e=m(t,"MAIN",{class:!0,"data-svelte-h":!0}),p(e)!=="svelte-1ndu5sa"&&(e.innerHTML=s),this.h()},h(){d(e,"class","text-[var(--text-main)] flex flex-col justify-center min-h-screen pt-16 sm:pt-32 w-3/4 sm:w-1/2 mx-auto font-josefin-slab")},m(t,i){g(t,e,i)},p:a,i:a,o:a,d(t){t&&h(e)}}}class y extends n{constructor(e){super(),o(this,e,null,u,l,{})}}export{y as component};
