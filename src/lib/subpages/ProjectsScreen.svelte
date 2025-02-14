<script>
    import picture from "$lib/backgrounds/Yosemite_5.jpg";
    import picture2 from "$lib/backgrounds/Galaxy.jpg";

    export let transform;
</script>

<!-- <div class="bg-green-900 bg-opacity-50 justify-center items-center font-normal text-center text-2xl h-min bg-cover bg-center xl:rounded-b-2xl p-5 px-8 lg:px-5">
                        A YouTube client for Windows Phone 8.1. Yeah. Uses the Invidious API to fetch YouTube data, such as video streams, comments, channels, and metadata.
                        <br><br>
                        I had to remake this app from scratch after losing the original source code in 2023.
                    </div> -->

<!-- eighttube -->
<div
        class="relative flex flex-col items-center justify-center xl:h-screen xl:max-w-7xl w-full mx-auto xl:[margin-top:calc(-6rem)] xl:[margin-bottom:calc(-6rem)] transition-all z-40"
        aria-label="When your mouse moves, the atomtables element moves with it."
>
    <div
            class="transition-all relative md:rounded-3xl xl:h-screen w-full block"
            style="transition: transform 0.5s ease-out;"
    >
        <div class="group pointer-events-none xl:pointer-events-auto transition-all p-5 xl:p-0">
            <div class="hidden xl:block opacity-75 group-hover:opacity-100 transition-all xl:absolute p-5 group-hover:bg-neutral-500 rounded-2xl group-hover:shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
                <img src="ratemyteachers2.png" alt="Rate My Teachers"
                     class="lg:h-96 transition-all">
            </div>
            <div class="opacity-100 group-hover:opacity-50 transition-all xl:absolute xl:top-48 xl:left-48 xl:p-5 group-hover:p-0 xl:bg-neutral-500 group-hover:bg-none xl:rounded-2xl xl:shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
                <img src="ratemyteachers1.png" alt="Rate My Teachers"
                     class="lg:h-96 transition-all object-contain">
            </div>
        </div>
        <div class="flex flex-col xl:absolute right-6 top-24 2xl:top-12 z-10 w-full xl:w-min shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] xl:rounded-3xl"
             style={`transform: ${transform}; transition: transform 0.5s ease-out;`}
        >
            <div class="xl:relative bg-blend-darken xl:rounded-3xl font-bold text-5xl bg-opacity-40 -z-10 overflow-hidden">
                <div class="relative flex flex-col xl:rounded-3xl backdrop-blur-xl min-w-[32rem]">
                    <div class="flex justify-center items-center font-semibold text-2xl sm:text-4xl md:text-6xl h-min bg-cover bg-center xl:rounded-t-2xl p-5">
                        RateMyTeachers
                    </div>
                    <hr class="p-0 m-0">
                    <div class="bg-green-900 bg-opacity-50 justify-center items-center font-normal text-center text-2xl h-min bg-cover bg-center xl:rounded-b-2xl p-5 px-8 lg:px-5">
                        An app designed to help students get a feel for how teachers are before they take their class.
                        Similar to RateMyProfessor, but customized towards districts/schools having their own instance.
                        <br><br>
                        <b>Award winner at HackJPS 2023.</b>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center xl:items-end xl:absolute right-6 top-[32rem] z-10 w-full xl:w-max backdrop-blur-xl bg-opacity-40 p-2 xl:rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
            <div class="flex flex-row my-2 space-x-2">
                <img src="https://camo.githubusercontent.com/59f72f50a3ffa6ac9cd8389aa99e8e67f637abcbe50ae7fb0dc4b876d91a70e2/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335333635372f646a616e676f2d69636f6e2e737667"
                     alt="Django"
                     class="h-16 rounded-full">
                <img src="https://saidvandeklundert.net/img/jinja_logo.png"
                     alt="Jinja2"
                     class="h-16 rounded-full">
                <img src="https://styles.redditmedia.com/t5_2tqnh/styles/communityIcon_xgyqt9ik2c8b1.jpg?format=pjpg&s=5f35426ed93752386d76399ff852d641c956ae02"
                     alt="Bootstrap5"
                     class="h-16 rounded-full">
            </div>
            <div class="text-center text-xl font-medium">
                Made with Django, Jinja2, and Bootstrap5
            </div>
        </div>
        <div class="flex flex-row flex-wrap justify-center xl:flex-col xl:absolute top-[24rem] z-10 w-full xl:w-max backdrop-blur-xl bg-opacity-40 p-2 xl:rounded-2xl xl:shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row items-center"
               href={`//github.com/atomtables/rate-my-teachers`}
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/github.webp" alt="GitHub"
                     class="h-16 mr-2 rounded-full">
                <div class="flex flex-col">
                    <div class="">atomtables/</div>
                    <div class="font-bold text-2xl">rate-my-teachers</div>
                </div>
            </a>
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-red-900 hover:bg-red-800 active:bg-red-700 flex flex-row items-center"
               href="//www.youtube.com/watch?v=Dknf8L3Dlrc"
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/youtube.webp" alt="Youtube"
                     class="h-16 mr-2 rounded-full">
                <div class="flex flex-col">
                    <div class="">Demoed on</div>
                    <div class="font-bold text-2xl">YouTube</div>
                </div>
            </a>
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-blue-950 hover:bg-blue-900 active:bg-blue-800 flex flex-row items-center"
               href="//devpost.com/software/ratemyteachers"
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/devpost.png" alt="Devpost"
                     class="h-16 mr-2 rounded-full">
                <div class="flex flex-col">
                    <div class="">Original submission on</div>
                    <div class="font-bold text-2xl">Devpost</div>
                </div>
            </a>
        </div>
    </div>

</div>

<div class="p-12 xl:hidden"></div>

<!-- hackjps 2024 -->
<div
        class="relative flex flex-col items-center justify-center xl:h-screen xl:max-w-7xl w-full mx-auto xl:[margin-top:calc(-6rem)] xl:[margin-bottom:calc(-6rem)] transition-all z-40"
        aria-label="When your mouse moves, the atomtables element moves with it."
>
    <div
            class="transition-all relative md:rounded-3xl xl:h-screen w-full block"
            style="transition: transform 0.5s ease-out;"
    >
        <div class="group pointer-events-none xl:pointer-events-auto transition-all p-5 xl:p-0">
            <div class="hidden xl:block opacity-75 group-hover:opacity-100 transition-all xl:absolute xl:right-0 p-5 group-hover:bg-neutral-500 rounded-2xl group-hover:shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
                <img src="collegedebtsolver2.png" alt="CollegeDebtSolver"
                     class="h-96 transition-all">
            </div>
            <div class="opacity-100 group-hover:opacity-50 transition-all xl:absolute  xl:top-48 xl:right-48 xl:p-5 group-hover:p-0 xl:bg-neutral-500 group-hover:bg-none xl:rounded-2xl xl:shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
                <img src="collegedebtsolver1.png" alt="CollegeDebtSolver"
                     class="h-96 transition-all object-contain">
            </div>
        </div>
        <div class="flex flex-col xl:absolute -left-6 top-12 z-10 w-full xl:w-min shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] xl:rounded-3xl"
             style={`transform: ${transform}; transition: transform 0.5s ease-out;`}
        >
            <div class="xl:relative bg-blend-darken xl:rounded-3xl font-bold text-5xl bg-opacity-40 -z-20 overflow-hidden">
                <div class="relative flex flex-col backdrop-blur-xl rounded-3xl">
                    <div class="flex justify-center items-center font-semibold text-2xl sm:text-4xl md:text-6xl h-min bg-cover bg-center xl:rounded-t-2xl p-5">
                        CollegeDebtSolver
                    </div>
                    <hr class="p-0 m-0">
                    <div class="justify-center items-center text-center font-normal text-2xl h-min bg-cover bg-center xl:rounded-b-2xl p-5 px-8 lg:px-5 bg-green-900 bg-opacity-50">
                        An app designed to help people, primarily college students, predict the possibility of a stock
                        increasing or decreasing in value over the next month. Using a neural network and machine
                        learning backend in Python, the app was able to predict the stock market.
                        <br><br>
                        <b>Award winner at HackJPS 2024.</b>
                    </div>
                </div>
            </div>
        </div> <!-- left-6 -bottom-60 -->
        <div class="flex flex-col items-center xl:items-start xl:absolute top-[32rem] z-10 w-full xl:w-max backdrop-blur-xl bg-opacity-40 p-2 xl:rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
            <div class="flex flex-row my-2 space-x-2">
                <img src="https://avatars.githubusercontent.com/u/156354296?s=200&v=4"
                     alt="FastAPI"
                     class="h-16 rounded-full">
                <img src="https://styles.redditmedia.com/t5_3htkz/styles/communityIcon_5gn47dhdp4o31.png"
                     alt="SvelteKit"
                     class="h-16 rounded-full">
                <img src="https://pbs.twimg.com/profile_images/1103339571977248768/FtFnqC38_400x400.png"
                     alt="TensorFlow"
                     class="h-16 rounded-full">
            </div>
            <div class="text-xl font-medium text-center lg:text-left">
                Made with FastAPI, SvelteKit, and TensorFlow
            </div>
        </div>
        <div class="flex flex-col items-start xl:absolute top-6 right-6 z-10 w-full xl:w-max backdrop-blur-xl bg-opacity-40 p-2 lg:rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
            <div class="text-xl font-medium w-full text-center xl:text-right">
                In collaboration with Nathaniel George, <br class="hidden xl:block">
                Alexander Poon, and Arnav Daine
            </div>
        </div>
        <div class="flex flex-row flex-wrap justify-center xl:flex-col xl:absolute right-0 top-[20rem] z-10 w-full xl:w-max backdrop-blur-xl bg-opacity-40 p-2 xl:rounded-2xl xl:shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)]">
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row xl:flex-row-reverse text-left xl:text-right items-center"
               href={`//github.com/atomtables/CollegeDebtSolverFrontend`}
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/github.webp" alt="GitHub"
                     class="h-16 mr-2 xl:mr-0 xl:ml-2 rounded-full">
                <div class="flex flex-col truncate">
                    <div class="">atomtables/</div>
                    <div class="font-bold text-2xl">CollegeDebtSolverFrontend</div>
                </div>
            </a>
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 flex flex-row xl:flex-row-reverse text-left xl:text-right items-center"
               href={`//github.com/atomtables/CollegeDebtSolverBackend`}
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/github.webp" alt="GitHub"
                     class="h-16 mr-2 xl:mr-0 xl:ml-2 rounded-full">
                <div class="flex flex-col truncate">
                    <div class="">atomtables/</div>
                    <div class="font-bold text-2xl">CollegeDebtSolverBackend</div>
                </div>
            </a>
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-red-900 hover:bg-red-800 active:bg-red-700 flex flex-row xl:flex-row-reverse text-left xl:text-right items-center"
               href="//www.youtube.com/watch?v=JRPn7U_KfT0"
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/youtube.webp" alt="Youtube"
                     class="h-16 mr-2 xl:mr-0 xl:ml-2 rounded-full">
                <div class="flex flex-col">
                    <div class="">Demoed on</div>
                    <div class="font-bold text-2xl">YouTube</div>
                </div>
            </a>
            <a class="m-1 rounded-2xl shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] p-2 bg-blue-950 hover:bg-blue-900 active:bg-blue-800 flex flex-row xl:flex-row-reverse text-left xl:text-right items-center"
               href="//devpost.com/software/collegedebtsolver"
               target="_blank" rel="noopener noreferrer"
            >
                <img src="/images/devpost.png" alt="Devpost"
                     class="h-16 mr-2 xl:mr-0 xl:ml-2 rounded-full">
                <div class="flex flex-col">
                    <div class="">Original submission on</div>
                    <div class="font-bold text-2xl">Devpost</div>
                </div>
            </a>
        </div>
    </div>
</div>