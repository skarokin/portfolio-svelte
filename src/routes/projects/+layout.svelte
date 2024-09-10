<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import '../../app.css';
</script>

<body>
    <Header />
    <div class="flex flex-col flex-grow min-h-screen justify-between">
        <slot />
        <Footer />
    </div>
</body>