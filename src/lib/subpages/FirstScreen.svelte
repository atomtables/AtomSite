<script>
    import {typewriter} from "$lib/transitions/typewriter.js";
    import {crossfade, slide, blur} from "svelte/transition";
    import {onMount} from "svelte";
    import picture from "$lib/backgrounds/Wave.jpg";
    import IObserver from 'svelte-intersection-observer';

    let innerWidth, innerHeight;
    $: innerWidth, innerHeight;

    export let hideContent;

    let backgroundIndex = 0;
    let loops = 18;
    let int = setInterval(() => {
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

    let screen1element1 = null;
    let screen1element2 = null;

    let [screenSend, screenReceive] = crossfade({delay: 200});

    export let preloadedImages;
    export let currentScreen;
    let _currentScreen = currentScreen;

    $: currentScreen + 1 && (() => {
        setTimeout(() => {
            _currentScreen = currentScreen;
            console.log(_currentScreen)
        }, 200);
    })()

    export let transform = "";

    function mousemove(e) {
        if (mounted) {
            if (screen1element1 != null) {
                if (e == null) {
                    screen1element1.style.transform = "translate(-50%, -50%)";
                    return;
                }
                if (innerWidth > 1280)
                    screen1element1.style.transform = `translate(calc(-50% + ${-((e.clientX - innerWidth / 2) / 50)}px), calc(-50% + ${-((e.clientY - innerHeight / 2) / 50)}px))`;
                else screen1element1.style.transform = "translate(-50%, -50%)";
            } else {
                if (e == null) {
                    transform = "";
                    return;
                }
                if (innerWidth > 1280)
                    transform = `translate(${-((e.clientX - innerWidth) / 50)}px, ${-((e.clientY - innerHeight) / 50)}px)`;
                else transform = "";
            }
        }
    }

    let mounted = false;
    onMount(() => {
        mounted = true;
    })

    let name1;
    let name1IO = false;

    let socials;
    let socialsIO = false;

    let programming;
    let programmingIO = false;

    let organisations;
    let organisationsIO = false;
</script>

<svelte:window on:mousemove={mousemove} bind:innerHeight bind:innerWidth/>

<div
        class="relative flex flex-col items-center justify-center w-full h-max place-items-center grid-flow-col transition-all z-40"
        aria-label="When your mouse moves, the atomtables element moves with it."
>
    <div class="pt-[62px] lg:pt-[calc(62px+6rem)]"></div>
    <!-- transition:slide={{ duration: 500 }}-->
    {#if backgroundIndex !== -1}
        <div
                class="align-middle content-center bg-[#001220] lg:rounded-3xl bg-opacity-40 h-full w-full xl:w-5/6 lg:h-96 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
                style="transition: transform 0.5s ease-out;"
                bind:this={screen1element1}
                in:screenReceive={{ duration: 500 }}
                out:screenSend={{ duration: 500 }}
        >
            {#each preloadedImages as image, index}
                {#if backgroundIndex === index}
                    <div class="flex flex-col w-full h-full relative bg-blend-darken lg:rounded-3xl">
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
        </div>
    {:else}
        <!--
            transition:slide={{ easing: sineInOut, delay: 500, axis: "x" }}-->
        <div
                class="transition-all content-center relative bg-[#001220] md:rounded-3xl bg-opacity-40 w-full xl:w-4/5 h-max flex items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
                bind:this={screen1element2}
                style={`transform: ${transform}; transition: transform 0.5s ease-out;`}
                in:screenReceive={{ duration: 500 }}
                out:screenSend={{ duration: 500 }}
        >
            <div class="flex flex-col w-full relative md:rounded-3xl py-6 px-6 lg:px-0 truncate">
                <div class="h-96 flex flex-col lg:flex-row relative m-0 w-max justify-center lg:mx-auto lg:items-center">
                    <div class="flex flex-col lg:flex-row relative m-0 w-max justify-center lg:mx-auto lg:items-center"
                         transition:slide={{duration: 500}}>
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
                            <IObserver element={name1} bind:intersecting={name1IO} once>
                                <div class="hover:p-2 flex flex-col w-full relative bg-blend-darken rounded-3xl h-1/6">
                                    <img
                                            src={picture}
                                            alt="Background"
                                            class="absolute inset-0 w-full h-full object-cover lg:rounded-3xl"
                                    />
                                    <div class="relative w-full h-full flex justify-center items-center"
                                         bind:this={name1}>
                                        <div class={`font-semibold text-6xl bg-cover bg-center w-full h-full grid place-items-center
                                [-webkit-background-clip:text] backdrop-blur-xl rounded-2xl p-5`}
                                             style={`background-image: url(${picture})`}
                                        >
                                            {#if name1IO}
                                                <div transition:typewriter>
                                                    Portfolio
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                </div>
                            </IObserver>
                            <div class="bg-[#005630] md:rounded-3xl bg-opacity-60 hover:bg-opacity-90 p-3 flex flex-col justify-center">
                                <div>
                                    About Me
                                </div>
                                <div class="font-semibold">
                                    I'm Adithiya Venkatakrishnan, but I go with friends as Venky and online as
                                    atomtables.
                                    <br><br>
                                    I'm a high school sophomore who's passionate about the world of software
                                    development, cybersecurity, and general computer science. Check out my projects
                                    below!
                                    <br><br>
                                    I've been coding since I was about seven years old, and my main interests lie in
                                    mobile app development, web development, and low-level programming.
                                    <br><br>
                                    I like music a lot, and I sing and play the piano (I'm working on some stuff right
                                    now).
                                    <br><br>
                                    I go to Edison Academy Magnet School, and I'm on the Computer Science Club Council
                                    there. I also write articles for the Eagle Eye and the school newspaper, especially
                                    for the Tech topics.
                                </div>
                            </div>
                            <IObserver element={socials} bind:intersecting={socialsIO} once>
                                <div class="bg-[#001220] md:rounded-3xl bg-opacity-60 p-5 flex flex-col justify-center w-full"
                                     bind:this={socials}
                                >
                                    <div class="mb-2">
                                        My Socials
                                    </div>
                                    <div class="hidden flex-col h-full w-full space-y-1 lg:flex">
                                        {#if socialsIO}
                                            <a class="rounded-2xl p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row h-1/2 items-center"
                                               href="//github.com/atomtables"
                                               target="_blank" rel="noopener noreferrer"
                                               transition:slide={{duration: 500, axis: 'x', delay: 250}}
                                            >
                                                <img src="/images/github.webp" alt="GitHub"
                                                     class="h-20 w-20 mr-2 rounded-full">
                                                <div class="flex flex-col truncate">
                                                    <div class="">Check out all of my projects at</div>
                                                    <div class="font-bold text-2xl">github.com/atomtables</div>
                                                </div>
                                            </a>
                                            <a class="rounded-2xl p-2 bg-red-900 hover:bg-red-800 active:bg-red-700 flex flex-row h-1/2 items-center"
                                               href="//youtube.com/@atomtables"
                                               target="_blank" rel="noopener noreferrer"
                                               transition:slide={{duration: 500, axis: 'x', delay: 500}}
                                            >
                                                <img src="/images/youtube.webp" alt="GitHub"
                                                     class="h-20 w-20 mr-2 rounded-full">
                                                <div class="flex flex-col truncate">
                                                    <div class="">Check out some of my project explanations at</div>
                                                    <div class="font-bold text-2xl">youtube.com/@atomtables</div>
                                                </div>
                                            </a>
                                            <a class="rounded-2xl p-2 bg-blue-900 hover:bg-blue-800 active:bg-blue-700 flex flex-row h-1/2 items-center"
                                               href="//www.linkedin.com/in/adithiya-venkatakrishnan-724a15303/"
                                               target="_blank" rel="noopener noreferrer"
                                               transition:slide={{duration: 500, axis: 'x', delay: 750}}
                                            >
                                                <img src="/images/linkedin.png" alt="GitHub"
                                                     class="h-20 w-20 mr-2 rounded-full">
                                                <div class="flex flex-col w-fit truncate">
                                                    <div class="">Check out my profile on LinkedIn!</div>
                                                    <div class="font-bold text-2xl w-fit overflow-ellipsis">Adithiya
                                                        Venkatakrishnan
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="rounded-2xl p-2 bg-cyan-800 hover:bg-cyan-700 active:bg-cyan-600 flex flex-row h-1/2 items-center"
                                               href="mailto:atomtables@icloud.com"
                                               target="_blank" rel="noopener noreferrer"
                                               transition:slide={{duration: 500, axis: 'x', delay: 1000}}
                                            >
                                                <img src="/images/icloud.png" alt="GitHub"
                                                     class="h-20 w-20 mr-2 rounded-full">
                                                <div class="flex flex-col truncate">
                                                    <div class="">Email me if you really want at</div>
                                                    <div class="font-bold text-2xl">atomtables@icloud.com</div>
                                                </div>
                                            </a>
                                        {/if}
                                    </div>
                                    <div class="flex flex-row h-full w-full space-x-2 lg:hidden">
                                        <div class="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1 h-full w-1/2">
                                            <a class="flex-1 rounded-2xl p-2 bg-neutral-900 flex flex-row md:flex-col items-center justify-center md:justify-normal"
                                               href="//github.com/atomtables"
                                               target="_blank" rel="noopener noreferrer"
                                            >
                                                <img src="/images/github.webp" alt="GitHub"
                                                     class="md:h-20 lg:mr-2 rounded-full">
                                                <div class="hidden md:flex flex-col text-center">
                                                    <div class="">github.com/</div>
                                                    <div class="font-bold text-2xl">atomtables</div>
                                                </div>
                                            </a>
                                            <a class="flex-1 rounded-2xl p-2 bg-red-900 flex flex-row md:flex-col items-center justify-center md:justify-normal"
                                               href="//youtube.com/@atomtables"
                                               target="_blank" rel="noopener noreferrer"
                                            >
                                                <img src="/images/youtube.webp" alt="GitHub"
                                                     class="md:h-20 lg:mr-2 rounded-full">
                                                <div class="hidden md:flex flex-col text-center">
                                                    <div class="">youtube.com/</div>
                                                    <div class="font-bold text-2xl">@atomtables</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1 h-full w-1/2">
                                            <a class="truncate flex-1 rounded-2xl p-2 bg-blue-900 flex flex-row md:flex-col items-center justify-center md:justify-normal"
                                               href="//www.linkedin.com/in/adithiya-venkatakrishnan-724a15303/"
                                               target="_blank" rel="noopener noreferrer"
                                            >
                                                <img src="/images/linkedin.png" alt="GitHub"
                                                     class="md:h-20 lg:mr-2 rounded-full">
                                                <div class="hidden md:flex flex-col w-fit truncate text-center">
                                                    <div class="">linkedin.com/</div>
                                                    <div class="font-bold text-2xl w-fit truncate">
                                                        Adithiya V.
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="flex-1 rounded-2xl p-2 bg-cyan-800 flex flex-row md:flex-col items-center justify-center md:justify-normal"
                                               href="mailto:atomtables@icloud.com"
                                               target="_blank" rel="noopener noreferrer"
                                            >
                                                <img src="/images/icloud.png" alt="GitHub"
                                                     class="md:h-20 lg:mr-2 rounded-full">
                                                <div class="hidden md:flex flex-col-reverse truncate text-center">
                                                    <div class="">@icloud.com</div>
                                                    <div class="font-bold text-2xl">atomtables</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </IObserver>
                        </div>
                        <div class="flex flex-col w-full md:w-1/3 lg:w-1/2 space-y-2">
                            <IObserver element={programming} bind:intersecting={programmingIO} once>
                                <div class="bg-[#001220] w-full md:rounded-3xl bg-opacity-60 p-3"
                                     bind:this={programming}
                                >
                                    <div class="px-2 mb-1">
                                        Programming Languages and Tools
                                    </div>
                                    <div class="grid grid-rows-2 grid-cols-3 sm:grid-cols-6 [grid-auto-rows:0px] overflow-hidden">
                                        <div class="flex flex-row bg-orange-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 250}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/03f36d16e385e56b8d67ff1a9828d6d8cfd386736a8c82342d661e5ea4088869/68747470733a2f2f646576656c6f7065722e6170706c652e636f6d2f73776966742f696d616765732f73776966742d6f672e706e67"
                                                    alt="Swift"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-blue-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 500}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/6be4ac216b7ab43287258c629dc9e96687208edf6beeedb25afbd44c10cc8f25/68747470733a2f2f63646e332e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6c6f676f732d616e642d6272616e64732d61646f62652f3531322f3236375f507974686f6e2d3531322e706e67"
                                                    alt="Python3"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-yellow-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 750}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/d3405185f542f432dd3fb4cdf6c9cd3f7a4475ba933701eef7c4a03e82b69d77/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36612f4a6176615363726970742d6c6f676f2e706e67"
                                                    alt="JavaScript"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-neutral-700 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 1000}}
                                        >
                                            <img
                                                    src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/c@0.0.3/c_256x256.png"
                                                    alt="C"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-blue-800 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 1250}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/7538cdfc8bc48a5613c40298df6762fb87e87f87a2fe800d6a40872c701b1d3c/68747470733a2f2f746965726d616b65722e636f6d2f696d616765732f63686172742f63686172742f70726f6772616d6d696e672d6c616e67756167652d3938343538322f6e61736d706e672e706e67"
                                                    alt="nASM"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 1500}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/8d45c84aea893b3994976eb5aada3e315dad5cc4047bcdec312566be2bdbf05f/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f667265652d61726475696e6f2d3232363037322e706e67"
                                                    alt="Arduino"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-orange-800 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 1750}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/697d39479dd4002ee29cf88b63c51054db8ef8d137adb5b9f05145116de0273b/68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031372f30382f30352f31312f31362f6c6f676f2d323538323734385f313238302e706e67"
                                                    alt="HTML5"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-orange-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 2000}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/26f81ec817d3a568ab3c3a5301d18c3a60b0089258df900d28a01181926536cf/68747470733a2f2f72616661656c6d617274696e657a2e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f72616661656c6d617274696e657a2f7376656c74652d707265766965772f322e372e312f313730383337323430343731342f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74"
                                                    alt="Svelte(Kit)"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-cyan-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 2250}}
                                        >
                                            <img
                                                    src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.2.0/1558040563649/Microsoft.VisualStudio.Services.Icons.Default"
                                                    alt="TailwindCSS"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 2500}}
                                        >
                                            <img
                                                    src="https://avatars.githubusercontent.com/u/84764158?v=4"
                                                    alt="Logisim Evolution"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-purple-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 2750}}
                                        >
                                            <img
                                                    src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C.png"
                                                    alt="C#"
                                            >
                                        </div>
                                        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
                                             transition:blur={{duration: 500, delay: 3000}}
                                        >
                                            <img
                                                    src="https://camo.githubusercontent.com/59f72f50a3ffa6ac9cd8389aa99e8e67f637abcbe50ae7fb0dc4b876d91a70e2/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335333635372f646a616e676f2d69636f6e2e737667"
                                                    alt="Django"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </IObserver>
                            <div class="bg-[#001220] md:rounded-3xl bg-opacity-60 p-5 flex flex-col justify-center">
                                <div>
                                    Stats about me
                                </div>
                                <div class="mt-2 flex flex-col lg:block">
                                    <img
                                            src="https://github-readme-stats.vercel.app/api/top-langs?username=atomtables&show_icons=true&theme=dark&locale=en&layout=compact"
                                            alt="My Top Languages"
                                            class="xl:float-left p-2"
                                    >
                                    <div class="px-3 font-medium max-lg:pt-2">
                                        <ul>
                                            <li>
                                                - The first programming language I used was BASIC on a 2007 HP
                                                Probook running Ubuntu 14.04.
                                            </li>
                                            <li>
                                                - I've been singing for a little more than a decade now, and
                                                have been playing the piano since 2018.
                                            </li>
                                            <li>
                                                - My parents did not force me into engineering, I chose it
                                                myself.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <IObserver element={organisations} bind:intersecting={organisationsIO} once>
                                <div class="bg-[#001220] md:rounded-3xl bg-opacity-60 p-5 flex flex-col justify-center w-full"
                                     bind:this={organisations}>
                                    <div>
                                        Organisations
                                    </div>
                                    {#if organisationsIO}
                                        <div class="flex flex-col mt-2 h-[calc(100%-32px)] w-full space-y-2">
                                            <a class="flex flex-col lg:flex-row items-center bg-green-900 md:rounded-3xl bg-opacity-60 hover:bg-opacity-100 p-5"
                                               href="//gradescout.live"
                                               target="_blank" rel="noopener noreferrer"
                                               transition:slide={{duration: 500, axis: 'x', delay: 250}}
                                            >
                                                <img src="images/gradescout.jpeg" alt="GradeScout"
                                                     class="rounded-2xl mr-2 w-16 h-16 aspect-square">
                                                <div class="flex flex-col w-full lg:truncate">
                                                    <div class="flex flex-col text-center lg:text-left xl:flex-row justify-between mb-1">
                                                        <div class="font-bold text-2xl lg:truncate">
                                                            GradeScout
                                                        </div>
                                                        <div class="text-xl lg:text-2xl lg:truncate">
                                                            Developer
                                                        </div>
                                                    </div>
                                                    <div class="lg:truncate text-center lg:text-left text-sm lg:text-base">
                                                        GradeScout modernises the way students interact with their
                                                        grades.
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="flex flex-col lg:flex-row items-center bg-orange-900 md:rounded-3xl bg-opacity-60 hover:bg-opacity-100 p-5"
                                               href="//atomtables.github.io/TwoStepsAheadRobotics"
                                               target="_blank" rel="noopener noreferrer"
                                               transition:slide={{duration: 500, axis: 'x', delay: 500}}
                                            >
                                                <img src="images/tsar.png" alt="Two Steps Ahead Robotics"
                                                     class="rounded-2xl mr-2 w-16 h-16 aspect-square">
                                                <div class="flex flex-col w-full lg:truncate text-center lg:text-left">
                                                    <div class="flex flex-col xl:flex-row justify-between w-full lg:truncate mb-1">
                                                        <div class="font-bold text-2xl lg:truncate">
                                                            Two Steps Ahead
                                                        </div>
                                                        <div class="text-xl lg:text-2xl lg:truncate">
                                                            Electronics Lead
                                                        </div>
                                                    </div>
                                                    <div class="lg:truncate text-center lg:text-left text-sm lg:text-base">
                                                        FIRST Robotics Team #10600
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="flex flex-col lg:flex-row items-center bg-blue-900 md:rounded-3xl bg-opacity-60 hover:bg-opacity-100 p-5"
                                                 transition:slide={{duration: 500, axis: 'x', delay: 750}}
                                            >
                                                <img src="images/mcacs.png"
                                                     alt="Middlesex County Academy Computer Science"
                                                     class="rounded-2xl mr-2 w-16 h-16 aspect-square">
                                                <div class="w-full flex flex-col lg:truncate">
                                                    <div class="flex flex-col w-full lg:truncate text-center lg:text-left">
                                                        <div class="flex flex-col xl:flex-row justify-between w-full lg:truncate mb-1">
                                                            <div class="font-bold text-2xl lg:truncate">
                                                                MCACS Cybersecurity
                                                            </div>
                                                            <div class="text-xl lg:text-2xl lg:truncate">
                                                                Vice Captain
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="lg:truncate text-center lg:text-left text-sm lg:text-base">
                                                        Middlesex County Academy's Competitive Cybersecurity Team
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/if}
                                </div>
                            </IObserver>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/if}


</div>
