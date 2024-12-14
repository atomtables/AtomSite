<script>
    import {onDestroy, onMount} from "svelte";
    import {slide} from "svelte/transition";
    import {sineInOut} from "svelte/easing";
    import {blur, fade, crossfade} from "svelte/transition";
    import {typewriter} from "$lib/transitions/typewriter.js";
    import BackgroundLaggers from "$lib/components/BackgroundLaggers.svelte";
    import FirstScreen from "$lib/subpages/FirstScreen.svelte";
    import {events} from "$lib/functions.js";
    import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
    import picture from "$lib/backgrounds/Yosemite_5.jpg";
    import ProjectsScreen from "$lib/subpages/ProjectsScreen.svelte";

    export let preloadedImages;

    let innerWidth;
    let innerHeight;

    let mounted = false;

    onMount(() => {
        mounted = true;
        hideContent = true;
    })

    let isScrolling = false;
    let currentScreen = 0;

    function wheel(e) {
        if (isScrolling) return;
        isScrolling = true;

        const viewHeight = window.innerHeight;

        // Determine the current screen
        if (e.deltaY > 0) {
            currentScreen = Math.min(2, currentScreen + 1);
        } else if (e.deltaY < 0) {
            currentScreen = Math.max(0, currentScreen - 1);
        }

        window.scrollTo({top: currentScreen * viewHeight, behavior: 'smooth'});
        setTimeout(() => {
            window.scrollTo({top: currentScreen * viewHeight, behavior: 'smooth'});
        }, 250)
        setTimeout(() => {
            window.scrollTo({top: currentScreen * viewHeight, behavior: 'smooth'});
        }, 500)
        setTimeout(() => {
            window.scrollTo({top: currentScreen * viewHeight, behavior: 'smooth'});
        }, 750)
        setTimeout(() => {
            window.scrollTo({top: currentScreen * viewHeight, behavior: 'smooth'});
        }, 1000);
        setTimeout(() => {
            isScrolling = false;
        }, 1500)

        // e.preventDefault();
        e.returnValue = false;
    }

    onDestroy(() => {
        clearAllBodyScrollLocks();
    });

    let startX, startY;

    let hideContent = true;
    let transform = "";
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<div class="w-full h-full">

    <FirstScreen bind:preloadedImages bind:currentScreen bind:hideContent bind:transform/>

    {#if !hideContent}
        <div
                class="relative flex flex-col items-center justify-center h-max lg:h-screen w-full transition-all z-40 py-24"
                aria-label="When your mouse moves, the atomtables element moves with it."
        >
            <div
                    class="transition-all content-center relative bg-[#001220] md:rounded-3xl bg-opacity-40 h-max w-full xl:w-4/5 lg:h-max flex items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
                    style="transition: transform 0.5s ease-out;"
            >
                <div class="flex flex-col w-full relative md:rounded-3xl">
                    <div class="h-96 flex flex-col lg:flex-row relative m-0 w-full justify-center lg:mx-auto lg:items-center">
                        <div class="relative m-0 w-full justify-center lg:mx-auto lg:items-center"
                             transition:slide={{duration: 500}}>
                            <div class="pl-5 rounded-3xl text-5xl sm:text-6xl md:text-7xl text-center font-bold w-full">
                                Scroll down to check out some of my projects!
                            </div>
                            <hr>
                            <div class="pl-5 rounded-3xl text-2xl sm:text-3xl md:text-4xl text-center font-bold w-full">
                                There's more coming soon!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ProjectsScreen bind:transform/>

        <div
                class="relative flex flex-col items-center justify-center h-max w-full transition-all z-40 pt-24 xl:pt-0 xl:pb-48"
                aria-label="When your mouse moves, the atomtables element moves with it."
        >
            <div
                    class="transition-all content-center relative bg-[#001220] md:rounded-3xl bg-opacity-40 h-max w-full xl:w-4/5 lg:h-max flex items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
                    style="transition: transform 0.5s ease-out;"
            >
                <div class="flex flex-col w-full relative md:rounded-3xl">
                    <div class="h-48 flex flex-col lg:flex-row relative m-0 w-full justify-center lg:mx-auto lg:items-center">
                        <div class="relative m-0 w-full justify-center lg:mx-auto lg:items-center"
                             transition:slide={{duration: 500}}>
                            <div class="pl-5 rounded-3xl text-5xl sm:text-6xl md:text-7xl text-center font-bold w-full">
                                Come back later for more!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative w-full bg-neutral-800 mt-24 p-12 h-max">
            &lt;atomtables&gt;
            <br>
            My Github: <a href="//github.com/atomtables" target="_blank" rel="noopener noreferrer" class="underline">atomtables</a>
            <br>
            Thank you to Apple for the pictures used here.
        </div>
    {/if}

</div>

<!--<div>
                <img src="/atomtablesPicture.jpeg" alt="atomtables" class="w-48 h-48 my-2">
                <div class="text-7xl">
                    I'm
                    {#if modify}
                        <div transition:typewriter={{speed: 2}}
                             class="font-medium inline after:text-gray-400 after:font-normal after:content-['\_'] {blink ? 'after:hidden' : ''}">
                            atomtables
                        </div>
                    {:else}
                        {#if show}
                            <div transition:typewriter={{speed: 3}}
                                 class="font-medium inline after:text-gray-400 after:font-normal after:content-['\_'] {blink ? 'after:hidden' : ''}">
                                Adithiya Venkatakrishnan
                            </div>
                        {/if}
                    {/if}
                </div>
                <div class="text-2xl my-2">
                                        My name is Adithiya Venkatakrishnan, and I am an aspiring developer who likes to
                           create applications and make music in my free time! I am currently a high school student, and
                                   aim to pursue a career in computer science. I am currently learning web development, and have
                                worked on a couple projects. Check out my blog, where I talk about projects and tech news.
                    I'm a high school sophomore at Middlesex County Academy, and I like making applications and
                    websites. You'll see some of my projects below.
                    <ul class="list-disc ml-6 mt-2 text-base">
                        <li>I love coding for the devices I have</li>
                        <li>I primarily use Swift, Python, and JS/HTML/CSS</li>
                        <li>Check out <a class="underline" href="https://github.com/atomtables/DiscordForMac">DiscordForMac</a>
                            (it's what im working on rn)
                        </li>
                        <li>I don't make a lot of commits because I don't like committing broken code 💀</li>
                        <li>I'm also interested in cybersecurity, mainly on linux</li>
                        <li>I like to learn new things all the time, so I'm trying to learn Obj-C and Rust later</li>
                    </ul>
                </div>
                               <Button url="/blog" className="bg-green-900">To the Blog!</Button>
                            <Button url="/portfolio" className="border-1">Some of my projects!</Button>
            </div>-->
