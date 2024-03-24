<script>
    import KUTE from 'kute.js'
    import {onDestroy, onMount} from "svelte";
    import Button from "$lib/components/Button.svelte";
    import {slide} from "svelte/transition";
    import {sineInOut} from "svelte/easing";

    let fromTo = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    let mainElement = null;

    let yoyo = true;
    let duration = 4500;
    let delay = 750;
    let redelay = 150;
    let repeat = 1;
    let runAnimation = true;
    let easing = "easingSinusoidalInOut";

    let x;
    let y;

    let innerWidth;
    let innerHeight;

    onMount(async () => {

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && runAnimation) {
            setTimeout(() => {
                KUTE.fromTo(fromTo[0], {path: fromTo[0]}, {path: "M0 324.5C-45.3 323.5 -90.6 322.4 -124.2 299.8C-157.7 277.2 -179.5 232.9 -197.3 197.3C-215.1 161.7 -228.9 134.8 -249.4 103.3C-270 71.9 -297.2 35.9 -324.5 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay)
            setTimeout(() => {
                KUTE.fromTo(fromTo[1], {path: fromTo[1]}, {path: "M0 283.9C-39.7 283 -79.3 282.1 -108.7 262.3C-138 242.5 -157.1 203.8 -172.6 172.6C-188.2 141.5 -200.3 117.9 -218.3 90.4C-236.2 62.9 -260.1 31.5 -283.9 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay)
            setTimeout(() => {
                KUTE.fromTo(fromTo[2], {path: fromTo[2]}, {path: "M0 243.4C-34 242.6 -68 241.8 -93.1 224.8C-118.3 207.9 -134.6 174.7 -148 148C-161.3 121.3 -171.7 101.1 -187.1 77.5C-202.5 53.9 -222.9 27 -243.4 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 2)
            setTimeout(() => {
                KUTE.fromTo(fromTo[3], {path: fromTo[3]}, {path: "M0 202.8C-28.3 202.2 -56.6 201.5 -77.6 187.4C-98.6 173.2 -112.2 145.6 -123.3 123.3C-134.4 101.1 -143.1 84.2 -155.9 64.6C-168.7 44.9 -185.8 22.5 -202.8 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 3)
            setTimeout(() => {
                KUTE.fromTo(fromTo[4], {path: fromTo[4]}, {path: "M0 162.2C-22.7 161.7 -45.3 161.2 -62.1 149.9C-78.9 138.6 -89.7 116.4 -98.6 98.6C-107.5 80.8 -114.5 67.4 -124.7 51.7C-135 35.9 -148.6 18 -162.2 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 4)
            setTimeout(() => {
                KUTE.fromTo(fromTo[5], {path: fromTo[5]}, {path: "M0 121.7C-17 121.3 -34 120.9 -46.6 112.4C-59.1 103.9 -67.3 87.3 -74 74C-80.7 60.6 -85.8 50.5 -93.5 38.7C-101.2 27 -111.5 13.5 -121.7 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 5)
            setTimeout(() => {
                KUTE.fromTo(fromTo[6], {path: fromTo[6]}, {path: "M0 81.1C-11.3 80.9 -22.7 80.6 -31 74.9C-39.4 69.3 -44.9 58.2 -49.3 49.3C-53.8 40.4 -57.2 33.7 -62.4 25.8C-67.5 18 -74.3 9 -81.1 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 6)
            setTimeout(() => {
                KUTE.fromTo(fromTo[7], {path: fromTo[7]}, {path: "M0 40.6C-5.7 40.4 -11.3 40.3 -15.5 37.5C-19.7 34.6 -22.4 29.1 -24.7 24.7C-26.9 20.2 -28.6 16.8 -31.2 12.9C-33.7 9 -37.2 4.5 -40.6 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 7)
            setTimeout(() => {
                KUTE.fromTo(fromTo[8], {path: fromTo[8]}, {path: "M0 -324.5C48.8 -326 97.6 -327.6 124.2 -299.8C150.7 -272 155 -214.9 183.8 -183.8C212.7 -152.8 266.2 -148 293.8 -121.7C321.3 -95.4 322.9 -47.7 324.5 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay)
            setTimeout(() => {
                KUTE.fromTo(fromTo[9], {path: fromTo[9]}, {path: "M0 -283.9C42.7 -285.3 85.4 -286.6 108.7 -262.3C131.9 -238 135.6 -188 160.9 -160.9C186.1 -133.7 233 -129.5 257.1 -106.5C281.2 -83.5 282.6 -41.7 283.9 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay)
            setTimeout(() => {
                KUTE.fromTo(fromTo[10], {path: fromTo[10]}, {path: "M0 -243.4C36.6 -244.5 73.2 -245.7 93.1 -224.8C113 -204 116.2 -161.1 137.9 -137.9C159.5 -114.6 199.7 -111 220.3 -91.3C241 -71.6 242.2 -35.8 243.4 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 2)
            setTimeout(() => {
                KUTE.fromTo(fromTo[11], {path: fromTo[11]}, {path: "M0 -202.8C30.5 -203.8 61 -204.7 77.6 -187.4C94.2 -170 96.9 -134.3 114.9 -114.9C133 -95.5 166.4 -92.5 183.6 -76.1C200.8 -59.6 201.8 -29.8 202.8 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 3)
            setTimeout(() => {
                KUTE.fromTo(fromTo[12], {path: fromTo[12]}, {path: "M0 -162.2C24.4 -163 48.8 -163.8 62.1 -149.9C75.4 -136 77.5 -107.4 91.9 -91.9C106.4 -76.4 133.1 -74 146.9 -60.8C160.7 -47.7 161.5 -23.9 162.2 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 4)
            setTimeout(() => {
                KUTE.fromTo(fromTo[13], {path: fromTo[13]}, {path: "M0 -121.7C18.3 -122.3 36.6 -122.8 46.6 -112.4C56.5 -102 58.1 -80.6 68.9 -68.9C79.8 -57.3 99.8 -55.5 110.2 -45.6C120.5 -35.8 121.1 -17.9 121.7 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 5)
            setTimeout(() => {
                KUTE.fromTo(fromTo[14], {path: fromTo[14]}, {path: "M0 -81.1C12.2 -81.5 24.4 -81.9 31 -74.9C37.7 -68 38.7 -53.7 46 -46C53.2 -38.2 66.6 -37 73.4 -30.4C80.3 -23.9 80.7 -11.9 81.1 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 6)
            setTimeout(() => {
                KUTE.fromTo(fromTo[15], {path: fromTo[15]}, {path: "M0 -40.6C6.1 -40.8 12.2 -40.9 15.5 -37.5C18.8 -34 19.4 -26.9 23 -23C26.6 -19.1 33.3 -18.5 36.7 -15.2C40.2 -11.9 40.4 -6 40.6 0L0 0Z"}, {
                    repeat: repeat,
                    duration: duration,
                    yoyo: yoyo,
                    easing: easing
                }).start()
            }, delay + redelay * 7)
        }
    })

    onDestroy(() => {
        repeat = 0
    })

    function mousemove(e) {
        mainElement.style.transform = `translate(${-((e.clientX * 3 - (innerWidth / 2)) / 100)}px, ${-((e.clientY * 3 - (innerHeight / 2)) / 100)}px)`
    }
</script>

<svelte:window on:mousemove={mousemove} bind:innerHeight bind:innerWidth/>

<div class="grid h-full w-full place-items-center grid-flow-col relative transition-all" id="content-onepage">
    <div class="w-full h-full">
        <svg id="visual" class="relative z-1"
             width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <g style="transform: translate(100%, 0) scale(1.75)">
                <path d="M0 486.7C-56.1 465.3 -112.3 443.8 -176 425C-239.8 406.1 -311.2 389.9 -344.2 344.2C-377.1 298.5 -371.6 223.4 -389 161.1C-406.3 98.8 -446.5 49.4 -486.7 0L0 0Z"
                      fill="#001a2a" bind:this={fromTo[0]}></path>
                <path d="M0 425.9C-49.1 407.1 -98.2 388.4 -154 371.9C-209.8 355.4 -272.3 341.1 -301.2 301.2C-330 261.2 -325.2 195.5 -340.3 141C-355.5 86.5 -390.7 43.2 -425.9 0L0 0Z"
                      fill="#002a3e" bind:this={fromTo[1]}></path>
                <path d="M0 365.1C-42.1 349 -84.2 332.9 -132 318.7C-179.9 304.6 -233.4 292.4 -258.1 258.1C-282.8 223.9 -278.7 167.5 -291.7 120.8C-304.7 74.1 -334.9 37.1 -365.1 0L0 0Z"
                      fill="#003b4d" bind:this={fromTo[2]}></path>
                <path d="M0 304.2C-35.1 290.8 -70.2 277.4 -110 265.6C-149.9 253.8 -194.5 243.7 -215.1 215.1C-235.7 186.6 -232.3 139.6 -243.1 100.7C-253.9 61.8 -279.1 30.9 -304.2 0L0 0Z"
                      fill="#004d57" bind:this={fromTo[3]}></path>
                <path d="M0 243.4C-28.1 232.6 -56.1 221.9 -88 212.5C-119.9 203.1 -155.6 194.9 -172.1 172.1C-188.6 149.2 -185.8 111.7 -194.5 80.6C-203.2 49.4 -223.3 24.7 -243.4 0L0 0Z"
                      fill="#005f58" bind:this={fromTo[4]}></path>
                <path d="M0 182.5C-21 174.5 -42.1 166.4 -66 159.4C-89.9 152.3 -116.7 146.2 -129.1 129.1C-141.4 111.9 -139.4 83.8 -145.9 60.4C-152.4 37.1 -167.4 18.5 -182.5 0L0 0Z"
                      fill="#007053" bind:this={fromTo[5]}></path>
                <path d="M0 121.7C-14 116.3 -28.1 111 -44 106.2C-60 101.5 -77.8 97.5 -86 86C-94.3 74.6 -92.9 55.8 -97.2 40.3C-101.6 24.7 -111.6 12.4 -121.7 0L0 0Z"
                      fill="#008146" bind:this={fromTo[6]}></path>
                <path d="M0 60.8C-7 58.2 -14 55.5 -22 53.1C-30 50.8 -38.9 48.7 -43 43C-47.1 37.3 -46.5 27.9 -48.6 20.1C-50.8 12.4 -55.8 6.2 -60.8 0L0 0Z"
                      fill="#00893e" bind:this={fromTo[7]}></path>
            </g>
            <g style="transform: translate(0, 100%) scale(1.75)">
                <path d="M0 -486.7C47.7 -442.5 95.4 -398.3 158 -381.6C220.7 -364.8 298.2 -375.5 344.2 -344.2C390.2 -312.9 404.6 -239.6 423.1 -175.3C441.6 -110.9 464.2 -55.5 486.7 0L0 0Z"
                      fill="#001a2a" bind:this={fromTo[8]}></path>
                <path d="M0 -425.9C41.8 -387.2 83.5 -348.5 138.3 -333.9C193.1 -319.2 260.9 -328.5 301.2 -301.2C341.4 -273.8 354.1 -209.7 370.2 -153.4C386.4 -97 406.2 -48.5 425.9 0L0 0Z"
                      fill="#002a3e" bind:this={fromTo[9]}></path>
                <path d="M0 -365.1C35.8 -331.9 71.6 -298.7 118.5 -286.2C165.5 -273.6 223.6 -281.6 258.1 -258.1C292.6 -234.7 303.5 -179.7 317.4 -131.5C331.2 -83.2 348.1 -41.6 365.1 0L0 0Z"
                      fill="#003b4d" bind:this={fromTo[10]}></path>
                <path d="M0 -304.2C29.8 -276.6 59.6 -249 98.8 -238.5C137.9 -228 186.4 -234.7 215.1 -215.1C243.9 -195.6 252.9 -149.8 264.5 -109.5C276 -69.3 290.1 -34.7 304.2 0L0 0Z"
                      fill="#004d57" bind:this={fromTo[11]}></path>
                <path d="M0 -243.4C23.9 -221.3 47.7 -199.2 79 -190.8C110.3 -182.4 149.1 -187.7 172.1 -172.1C195.1 -156.4 202.3 -119.8 211.6 -87.6C220.8 -55.5 232.1 -27.7 243.4 0L0 0Z"
                      fill="#005f58" bind:this={fromTo[12]}></path>
                <path d="M0 -182.5C17.9 -166 35.8 -149.4 59.3 -143.1C82.8 -136.8 111.8 -140.8 129.1 -129.1C146.3 -117.3 151.7 -89.9 158.7 -65.7C165.6 -41.6 174.1 -20.8 182.5 0L0 0Z"
                      fill="#007053" bind:this={fromTo[13]}></path>
                <path d="M0 -121.7C11.9 -110.6 23.9 -99.6 39.5 -95.4C55.2 -91.2 74.5 -93.9 86 -86C97.5 -78.2 101.2 -59.9 105.8 -43.8C110.4 -27.7 116 -13.9 121.7 0L0 0Z"
                      fill="#008146" bind:this={fromTo[14]}></path>
                <path d="M0 -60.8C6 -55.3 11.9 -49.8 19.8 -47.7C27.6 -45.6 37.3 -46.9 43 -43C48.8 -39.1 50.6 -30 52.9 -21.9C55.2 -13.9 58 -6.9 60.8 0L0 0Z"
                      fill="#00893e" bind:this={fromTo[15]}></path>
            </g>
        </svg>
    </div>
    <div class="align-middle content-center bg-[#001220] md:rounded-3xl bg-opacity-40 p-5 xl:w-1/2 md:h-1/2 h-full absolute flex justify-center items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black"
         transition:slide={{easing: sineInOut}} bind:this={mainElement} style="transition: transform 0.5s ease-out;">
        <div class="flex md:flex-row flex-col">
            <img src="/atomtablesPicture.jpeg" alt="atomtables" class="w-48 h-48 p-2">
            <div>
                <div class="font-bold text-3xl">Hello! I'm atomtables!</div>
                <div class="text-md my-2">
                    My name is Adithiya Venkatakrishnan, and I am an aspiring developer who likes to
                    create applications and make music in my free time! I am currently a high school student, and
                    aim to pursue a career in computer science. I am currently learning web development, and have
                    worked on a couple projects. Check out my blog, where I talk about projects and tech news.
                </div>
                <Button url="/blog" className="bg-green-900">To the Blog!</Button>
                <Button url="/blog" className="border-1">Some of my projects!</Button>
            </div>
        </div>
    </div>
</div>

