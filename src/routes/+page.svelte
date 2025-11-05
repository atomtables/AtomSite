<script>
    import { onMount } from "svelte";
    import MainContent from "$lib/subpages/MainContent.svelte";
    import BackgroundLaggers from "$lib/components/BackgroundLaggers.svelte";

    const imageModules = import.meta.glob("$lib/backgrounds/*.jpg", {
        eager: true,
        // query: {
        //     enhanced: true
        // }
    });

    let preloadedImages = null;
    let mounted = false;

    function preloadImages() {
        return Object.entries(imageModules).map(([_, module]) => {
            const img = new Image();
            img.src = module.default;
            return img;
        });
    }

    onMount(() => {
        mounted = true;
        preloadedImages = preloadImages();
    });

    let innerWidth, innerHeight;
    $: innerWidth, innerHeight;
    function mousemove(e) {
        if (mounted) {
            if (e == null) transform = "";
            else if (innerWidth > 1280) transform = `translate(${-((e.clientX - innerWidth / 2) / 50)}px, ${-((e.clientY - innerHeight / 2) / 50)}px)`;
            else transform = "";
        }
    }

    let transform = "";
</script>

<svelte:window bind:innerWidth bind:innerHeight on:mousemove={mousemove} />

<MainContent bind:preloadedImages bind:transform />