<script>
    import {typewriter} from "$lib/transitions/typewriter.js";

    import picture from "$lib/backgrounds/Wave.jpg";
    import IObserver from "svelte-intersection-observer";

    let name1, name1IO;
</script>

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
                <div transition:typewriter>
                    Portfolio
                </div>
            </div>
        </div>
    </div>
</IObserver>