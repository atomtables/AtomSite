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
</script>

{#if preloadedImages}
    <BackgroundLaggers {innerWidth} {innerHeight}/>
    <MainContent bind:preloadedImages />
{:else}
    <div>Loading...</div>
{/if}
