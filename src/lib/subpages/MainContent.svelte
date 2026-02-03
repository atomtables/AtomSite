<script>
    import {onDestroy, onMount} from "svelte";
    import {slide} from "svelte/transition";
    import SocialsElement from "$lib/components/elements/SocialsElement.svelte";
    import AboutMeElement from "$lib/components/elements/AboutMeElement.svelte";
    import Button from "$lib/components/Button.svelte";
    import UselessElement from "$lib/components/elements/UselessElement.svelte";
    import GoalsElement from "$lib/components/elements/GoalsElement.svelte";
    import OrganisationsElement from "$lib/components/elements/OrganisationsElement.svelte";
    import ToolsElement from "$lib/components/elements/ToolsElement.svelte";

    export let preloadedImages;

    let innerWidth;
    let innerHeight;

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

    let currentScreen = 0;
    export let transform;

    let backgroundIndex = 0;
    let loops = 0;
    let int = setInterval(() => {
        if (preloadedImages == null) return;

        if (backgroundIndex === -1) {
            clearInterval(int);
            return
        }
        loops++;
        backgroundIndex = (backgroundIndex + 1) % 7;
        if (loops >= 21 || backgroundIndex === -1) {
            backgroundIndex = -1;
            clearInterval(int);
        }
    }, 250);
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<div class="w-full h-full">


    <div class="relative flex flex-col items-center justify-center w-full h-max place-items-center grid-flow-col transition-all z-40">
        <div class="lg:pt-24"></div>
        <div
                class="transition-all content-center relative md:rounded-3xl bg-[#001220] bg-opacity-40 backdrop-blur-xl w-full xl:w-4/5 h-max items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
                style={`transform: ${transform}; transition: transform 0.5s ease-out;`}
        >
            <div class="w-full h-full">
                <div class="h-108 flex flex-col w-full relative md:rounded-t-3xl lg:px-0 truncate">
                    <div class="absolute rounded-full bg-black aspect-square opacity-50 circle-animation"
                        style="top: {32}px; left: {24}px; z-index: -1; transform: translate(-50%, -50%);">
                    </div>
                    <div class="h-full flex flex-col lg:flex-row relative m-0 w-max justify-center lg:mx-auto lg:items-center p-2 max-lg:mb-5" in:slide={{axis: 'x'}}>
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
            </div>
            <!--<div class="flex flex-col w-full relative md:rounded-3xl py-6 px-6 lg:px-0 truncate" transition:blur>

            </div>-->

            <div class="xl:rounded-b-3xl p-5 w-full flex flex-wrap lg:justify-center bg-cyan-900 bg-opacity-25 gap-2">
                <Button icon="/icons/down.png" url="#aboutme">About Me</Button>
                <Button icon="/icons/forward.png" url="/projects">Projects</Button>
                <Button icon="/icons/external.png" url="//blog.atomtables.dev">Blog</Button>
            </div>
        </div>

        <div
                class="md:rounded-3xl bg-opacity-40 h-max w-full lg:w-5/6 relative"
                style="transition: transform 0.5s ease-out;"
        >

            <div class="lg:pt-[150px]" ></div>
            <div class="pt-12" id="aboutme"></div>
            <div class="flex flex-col w-full h-full relative md:rounded-3xl justify-center">
                <div class="flex flex-col mx-5 py-3 h-full">
                    <div class="flex flex-col md:flex-row mb-2 h-full md:justify-center md:space-x-2 space-y-2 md:space-y-0">
                        <div class="flex flex-col md:w-2/3 lg:w-1/2 h-full space-y-2">
                            <UselessElement/>
                            <AboutMeElement/>
                            <SocialsElement/>
                        </div>
                        <div class="flex flex-col w-full md:w-1/3 lg:w-1/2 space-y-2">
                            <ToolsElement/>
                            <GoalsElement/>
                            <OrganisationsElement/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>



    <!-- <ProjectsScreen bind:transform/> -->


</div>
