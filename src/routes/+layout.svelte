<script>
    import {goto, invalidate} from "$app/navigation";
    import "$lib/app.css"
    import Button from "$lib/components/Button.svelte";

    import {slide} from "svelte/transition";
    import {sineInOut} from "svelte/easing";
    import BackgroundLaggers from "$lib/components/BackgroundLaggers.svelte";

    let innerWidth = 2000;
    let innerHeight = 2000;

    let collapsed = true;


</script>

<svelte:window bind:innerHeight bind:innerWidth/>


<div class="h-full z-50">
    <header class="bg-neutral-800 flex justify-between border-b-aquamarine border-b-2 w-full p-2 z-50 fixed top-0 box-border">

        <div class="align-middle">
            {#if (collapsed || innerWidth > 768) && innerWidth > 370}
                <div class="align-self-middle font-medium text-3xl align-middle h-full text-left" id="titleButton"
                        transition:slide={{axis: 'x'}}>
                    <a href="/"><b>&lt;atomtables&gt;</b></a>
                </div>
            {/if}
        </div>
<!--        <div class="justify-self-end my-2 h-full">-->
<!--            <Button url="/portfolio">Portfolio</Button>-->
<!--            <Button url="/ping">Ping</Button>-->
<!--        </div>-->
    </header>
    <div class="min-h-screen w-full">
        <div class="pt-[54px]"></div>
        <BackgroundLaggers />
        <slot/>
    </div>
    <footer class="relative w-full bg-neutral-800 mt-24 p-12 h-max">
        Adithiya Venkatakrishnan
        <br>
        My Github: <a href="//github.com/atomtables" target="_blank" rel="noopener noreferrer" class="underline">atomtables</a>
        <br>
    </footer>
</div>