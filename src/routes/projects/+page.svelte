<script>
    import Marquee from "$lib/components/Marquee.svelte";
    import Button from "$lib/components/Button.svelte";
    import BackgroundLaggers from "$lib/components/BackgroundLaggers.svelte"
    import {onMount} from "svelte";

    let mounted = false;
    onMount(() => {
        mounted = true;
    })

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

<svelte:window bind:innerWidth bind:innerHeight on:mousemove={mousemove}/>

<div class="w-full h-full">
    <div class="relative flex flex-col items-center justify-center w-full h-max place-items-center grid-flow-col transition-all z-40">
        <div class="lg:pt-24"></div>
        <div
                class="transition-all content-center relative md:rounded-3xl bg-[#001220] bg-opacity-40 backdrop-blur-xl w-full xl:w-4/5 h-max items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
                style={`transform: ${transform}; transition: transform 0.5s ease-out;`}
        >
            <div class="w-full h-full">
                <div class="h-96 flex flex-col w-full relative md:rounded-t-3xl lg:px-0 truncate">
                    <div class="h-full flex flex-col lg:flex-row relative m-0 w-max justify-center lg:mx-auto lg:items-center p-2 max-lg:mb-5">
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

            <div class="xl:rounded-b-3xl p-5 w-full flex justify-center bg-cyan-900 bg-opacity-25 space-x-2">
                <Button icon="/icons/back.png" url="/">About Me</Button>
                <Button icon="/icons/down.png" url="#projects">Projects</Button>
                <!--<Button icon="/icons/external.png">Blog</Button>-->
            </div>
        </div>

        <div class="lg:pt-[50px]"></div>

        <div class="bg-[#001220] bg-opacity-50 text-center  p-12 max-w-full overflow-hidden backdrop-blur-xl">
            <h1 class="text-4xl font-bold pb-6">Featured Projects</h1>
            <Marquee speed={100} play={true} pauseOnHover={true} pauseOnClick={true}>
                <div class="flex flex-row space-x-5 text-left ml-5">
                    <div class="backdrop-blur-xl rounded-2xl p-5 h-72 flex flex-row">
                        <img src="/projects/networkos1.png" alt="NetworkOS" class="rounded-xl w-96 object-cover">
                        <div class="flex flex-col px-3">
                            <div class="text-4xl font-bold pb-2">
                                NetworkOS
                            </div>
                            <div class="text-base max-w-80">
                                A (somewhat) operating system designed to be light, fast, but user-friendly. Something
                                for older computers that need a network connection and actual programs.
                            </div>
                            <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                               href={`//github.com/atomtables/NetworkOS`}
                               target="_blank" rel="noopener noreferrer"
                            >
                                <img src="/images/github.webp" alt="GitHub"
                                     class="h-16 mr-2 rounded-full">
                                <div class="flex flex-col">
                                    <div class="">atomtables/</div>
                                    <div class="font-bold text-2xl">NetworkOS</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="backdrop-blur-xl rounded-2xl p-5 h-72 flex flex-row">
                        <img src="/projects/xcoderpc1.png" alt="XcodeRPC" class="rounded-xl w-96 object-cover">
                        <div class="flex flex-col px-3">
                            <div class="text-4xl font-bold pb-2">
                                XcodeRPC
                            </div>
                            <div class="text-base max-w-80">
                                A pretty simple, stable, and social Discord RPC for Xcode. It's main feature is that it
                                shows the app icon you're working on. It's the RPC that I would use, that's for sure.
                            </div>
                            <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                               href={`//github.com/atomtables/XcodeRPC`}
                               target="_blank" rel="noopener noreferrer"
                            >
                                <img src="/images/github.webp" alt="GitHub"
                                     class="h-16 mr-2 rounded-full">
                                <div class="flex flex-col">
                                    <div class="">atomtables/</div>
                                    <div class="font-bold text-2xl">XcodeRPC</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="backdrop-blur-xl rounded-2xl p-5 h-72 flex flex-row">
                        <img src="/projects/eighttube1.png" alt="EightTube" class="rounded-xl w-96 object-cover">
                        <div class="flex flex-col px-3">
                            <div class="text-4xl font-bold pb-2">
                                EightTube
                            </div>
                            <div class="text-base max-w-80">
                                Since Google took down their official app for YouTube (in 2013), I made my own in 32
                                hours. It's somewhat usable, and worked for me when I dailyed one.
                            </div>
                            <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                               href={`//github.com/atomtables/EightTube`}
                               target="_blank" rel="noopener noreferrer"
                            >
                                <img src="/images/github.webp" alt="GitHub"
                                     class="h-16 mr-2 rounded-full">
                                <div class="flex flex-col">
                                    <div class="">atomtables/</div>
                                    <div class="font-bold text-2xl">EightTube</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>

        <div class="lg:pt-[50px]"></div>


        <div class="bg-[#001220] bg-opacity-50 backdrop-blur-xl p-12">
            <h1 class="text-4xl font-bold pb-6 text-center">All Projects</h1>
            <div class="flex flex-row flex-wrap justify-center *:m-2">
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/networkos1.png" alt="NetworkOS" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            NetworkOS
                        </div>
                        <div class="text-base max-w-96">
                            A (somewhat) operating system designed to be light, fast, but user-friendly. Something
                            for older computers that need a network connection and actual programs.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/NetworkOS`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">NetworkOS</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/xcoderpc1.png" alt="XcodeRPC" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            XcodeRPC
                        </div>
                        <div class="text-base max-w-96">
                            A pretty simple, stable, and social Discord RPC for Xcode. It's main feature is that it
                            shows the app icon you're working on. It's the RPC that I would use, that's for sure.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/XcodeRPC`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">XcodeRPC</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/eighttube1.png" alt="EightTube" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            EightTube
                        </div>
                        <div class="text-base max-w-96">
                            Since Google took down their official app for YouTube (in 2013), I made my own in 32
                            hours. It's somewhat usable, and worked for me when I dailyed one.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/EightTube`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">EightTube</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/ratemyteachers1.png" alt="RateMyTeachers" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            RateMyTeachers
                        </div>
                        <div class="text-base max-w-96">
                            An app designed to help students get a feel for how teachers are before they take their
                            class.
                            Similar to RateMyProfessor, but customized towards districts/schools having their own
                            instance.
                            Award winner at HackJPS 2023.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/rate-my-teachers`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">RateMyTeachers</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/collegedebtsolver1.png" alt="CollegeDebtSolver"
                         class="rounded-xl w-96 object-cover h-60">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            CollegeDebtSolver
                        </div>
                        <div class="text-base max-w-96">
                            An app designed to help people, primarily college students, predict the possibility of a
                            stock
                            increasing or decreasing in value over the next month. Using a neural network and machine
                            learning backend in Python, the app was able to predict the stock market. Award winner at
                            HackJPS 2024.
                        </div>
                        <div class="flex flex-row *:flex-shrink space-x-1">
                            <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                               href={`//github.com/atomtables/CollegeDebtSolverFrontend`}
                               target="_blank" rel="noopener noreferrer"
                            >
                                <img src="/images/github.webp" alt="GitHub"
                                     class="h-16 mr-2 rounded-full">
                                <div class="flex flex-col">
                                    <div class="">atomtables/</div>
                                    <div class="font-bold text-2xl">Frontend</div>
                                </div>
                            </a>
                            <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                               href={`//github.com/atomtables/CollegeDebtSolverBackend`}
                               target="_blank" rel="noopener noreferrer"
                            >
                                <img src="/images/github.webp" alt="GitHub"
                                     class="h-16 mr-2 rounded-full">
                                <div class="flex flex-col">
                                    <div class="">atomtables/</div>
                                    <div class="font-bold text-2xl">Backend</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/gitman1.png" alt="GitMan" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            GitMan
                        </div>
                        <div class="text-base max-w-96">
                            An (incomplete) self-hosted Git server designed to make hooks, commit processing, blames,
                            etc. easier without relying on something like Github. It was fun while it lasted but the
                            computer I was testing on became a Windows machine.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/GitMan`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">GitMan</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/youtubeformac1.png" alt="YouTubeForMac" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            YouTubeForMac
                        </div>
                        <div class="text-base max-w-96">
                            A horribly underpowered native version of YouTube for Macs since Monterey. I originally made
                            it to gain understanding of Codable and the Invidious API, leading to bigger projects in the
                            future.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/YouTubeForMac`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">YouTubeForMac</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/atomchatjbs1.png" alt="AtomChatJBS" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            AtomChatJBS
                        </div>
                        <div class="text-base max-w-96">
                            A lightweight chatting application designed to be portable, instantly deployable, and
                            reliable for all of your communication purposes. Mainly used for chatting during classes
                            (still a high schooler man).
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/AtomChatJBS`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">AtomChatJBS</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="backdrop-blur-xl rounded-2xl p-5 flex flex-col flex-shrink-0">
                    <img src="/projects/discordformac1.png" alt="DiscordForMac" class="rounded-xl w-96 h-60 object-cover">
                    <div class="flex flex-col py-3 h-max flex-shrink-0">
                        <div class="text-4xl font-bold pb-2">
                            DiscordForMac
                        </div>
                        <div class="text-base max-w-96">
                            A native Discord client that uses SwiftUI. Technically it also works on iOS (somewhat). Right now
                            it's too slow due to SwiftUI inefficiencies, so the project is on a temporary (for the past ~6 months)
                            hiatus. I'll get back to it soon.
                        </div>
                        <a class="mt-4 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
                           href={`//github.com/atomtables/DiscordForMac`}
                           target="_blank" rel="noopener noreferrer"
                        >
                            <img src="/images/github.webp" alt="GitHub"
                                 class="h-16 mr-2 rounded-full">
                            <div class="flex flex-col">
                                <div class="">atomtables/</div>
                                <div class="font-bold text-2xl">DiscordForMac</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>