<script>
    import {slide} from "svelte/transition";
    import IObserver from "svelte-intersection-observer";
</script>

<div class="bg-[#001220] md:rounded-3xl bg-opacity-60 p-5 flex flex-col justify-center w-full">
    <div>
        Organisations
    </div>
    <hr class="p-0 m-0 my-1 bg-gray-300">
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
</div>