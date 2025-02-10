<script>
    import OrganisationsElement from "$lib/components/OrganisationsElement.svelte";
    import SocialsElement from "$lib/components/SocialsElement.svelte";
    import ToolsElement from "$lib/components/ToolsElement.svelte";
    import AboutMeElement from "$lib/components/AboutMeElement.svelte";
    import GoalsElement from "$lib/components/GoalsElement.svelte";
    import {typewriter} from "$lib/transitions/typewriter.js";
    import {crossfade, slide, blur} from "svelte/transition";
    import {onMount} from "svelte";
    import picture from "$lib/backgrounds/Wave.jpg";
    import IObserver from 'svelte-intersection-observer';
    import UselessElement from "$lib/components/UselessElement.svelte";

    let innerWidth, innerHeight;
    $: innerWidth, innerHeight;

    export let hideContent;

    let backgroundIndex = 0;
    let loops = 0;
    let int = setInterval(() => {
        if (preloadedImages == null) return;

        if (backgroundIndex === -1) {
            hideContent = false
            clearInterval(int);
            return
        }
        loops++;
        backgroundIndex = (backgroundIndex + 1) % 7;
        if (loops >= 21 || backgroundIndex === -1) {
            backgroundIndex = -1;
            hideContent = false
            clearInterval(int);
        }
    }, 250);

    let [screenSend, screenReceive] = crossfade({
        duration: 500
    });

    export let preloadedImages;
    export let currentScreen;
    let _currentScreen = currentScreen;

    $: currentScreen + 1 && (() => {
        setTimeout(() => {
            _currentScreen = currentScreen;
        }, 200);
    })()

    export let transform = "";

    function mousemove(e) {
        if (mounted) {
            if (e == null) transform = "";
            else if (innerWidth > 1280) transform = `translate(${-((e.clientX - innerWidth / 2) / 50)}px, ${-((e.clientY - innerHeight / 2) / 50)}px)`;
            else transform = "";
        }
    }

    let mounted = false;
    onMount(() => {
        mounted = true;

        let loaded = window.localStorage.getItem('loaded');
        if (loaded === null || loaded === false || loaded === undefined) {
            window.localStorage.setItem('loaded', 'true');
        } else {
            loops = 15;
        }
    })
</script>

<svelte:window on:mousemove={mousemove} bind:innerHeight bind:innerWidth/>

<div class="relative flex flex-col items-center justify-center w-full h-max place-items-center grid-flow-col transition-all z-40">
    <div class="pt-[62px] lg:pt-[calc(62px+6rem)]"></div>
    <div
            class="transition-all content-center relative bg-[#001220] md:rounded-3xl bg-opacity-40 w-full xl:w-4/5 h-max flex items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
            style={`transform: ${transform}; transition: transform 0.5s ease-out;`}
            in:screenReceive={{ duration: 500 }}
            out:screenSend={{ duration: 500 }}
    >
        {#if backgroundIndex !== -1}
            <div class="w-full h-full">
                <div class="flex flex-col w-full relative md:rounded-3xl lg:px-0 truncate" transition:slide={{axis: "x"}}>
                    <div class="h-96 flex flex-col w-full lg:flex-row relative m-0 justify-center lg:mx-auto lg:items-center">
                        {#if preloadedImages}
                            {#each preloadedImages as image, index}
                                {#if backgroundIndex === index}
                                    <div class="flex flex-col w-full h-full relative bg-blend-darken lg:rounded-3xl"
                                    >
                                        <img
                                                src={image.src}
                                                alt="Background"
                                                class="absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
                                        />
                                        <div class="relative w-full h-full flex justify-center items-center">
                                            <div class={`font-semibold text-6xl md:text-9xl bg-cover bg-center
                                [-webkit-background-clip:text] backdrop-blur-3xl rounded-2xl p-5`}
                                                 style={`background-image: url(${image.src})`}
                                            >
                                                &lt;atomtables&gt;
                                            </div>
                                        </div>
                                    </div>
                                {/if}
                            {/each}
                        {:else}
                            <div class="flex flex-col w-full h-full relative bg-blend-darken lg:rounded-3xl">
                                <div class="relative w-full h-full flex justify-center items-center">
                                    <div class={`font-semibold text-6xl md:text-9xl bg-cover bg-center
                                [-webkit-background-clip:text] backdrop-blur-3xl rounded-2xl p-5`}
                                    >
                                        &lt;atomtables&gt;
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {:else}
            <div class="flex flex-col w-full relative md:rounded-3xl py-6 px-6 lg:px-0 truncate" transition:slide>
                <div class="h-96 flex flex-col lg:flex-row relative m-0 w-max justify-center lg:mx-auto lg:items-center">
                    <div class="flex flex-col lg:flex-row relative m-0 w-max justify-center lg:mx-auto lg:items-center">
                        <img
                                src="atomtablesPicture.jpeg"
                                alt="atomtables"
                                class="aspect-square w-48 h-48 my-2 mx-5 lg:mx-0"
                        />
                        <div class="pl-5 rounded-3xl text-6xl sm:text-7xl md:text-8xl font-bold w-min truncate">
                            Adithiya
                            <div class="hidden sm:block truncate">Venkatakrishnan</div>
                            <div class="block sm:hidden">Venkata-<br>krishnan</div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
    <div
            class="md:rounded-3xl bg-opacity-40 h-max w-full lg:w-5/6 relative"
            style="transition: transform 0.5s ease-out;"
    >

        <div class="lg:pt-[200px]"></div>
        <div class="flex flex-col w-full h-full relative md:rounded-3xl justify-center">
            <div class="flex flex-col mx-5 py-3 h-full"
                 transition:slide={{duration: 500, axis: 'y'}}>
                <div class="flex flex-col md:flex-row mb-2 h-full md:justify-center md:space-x-2 space-y-2 md:space-y-0">
                    <div class="flex flex-col md:w-2/3 lg:w-1/2 h-full space-y-2">
                        <UselessElement />
                        <AboutMeElement />
                        <SocialsElement/>
                    </div>
                    <div class="flex flex-col w-full md:w-1/3 lg:w-1/2 space-y-2">
                        <ToolsElement />
                        <GoalsElement />
                        <OrganisationsElement/>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
