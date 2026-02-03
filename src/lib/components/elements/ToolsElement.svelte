<script>
    import {blur} from "svelte/transition";
    import IObserver from "svelte-intersection-observer";
</script>

<div class="bg-[#001220] w-full md:rounded-3xl bg-opacity-60 p-5">
    <div class="mb-1">
        Programming Languages and Tools
    </div>
    <hr class="p-0 m-0 my-1 bg-gray-300">
    <div class="mt-2 grid grid-rows-2 grid-cols-6 md:grid-rows-4 md:grid-cols-3 lg:grid-rows-2 lg:grid-cols-6 [grid-auto-rows:0px] overflow-hidden">
        <div class="flex flex-row bg-orange-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 250}}
        >
            <img
                    src="/images/swift.png"
                    alt="Swift"
            >
        </div>
        <div class="flex flex-row bg-blue-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 500}}
        >
            <img
                    src="/images/python3.png"
                    alt="Python3"
            >
        </div>
        <div class="flex flex-row bg-yellow-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 750}}
        >
            <img
                    src="/images/js.png"
                    alt="JavaScript"
            >
        </div>
        <div class="flex flex-row bg-neutral-700 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1000}}
        >
            <img
                    src="/images/c.png"
                    alt="C"
            >
        </div>
        <div class="flex flex-row bg-blue-800 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1250}}
        >
            <img
                    src="/images/nasm.png"
                    alt="nASM"
            >
        </div>
        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1500}}
        >
            <img
                    src="/images/arduino.png"
                    alt="Arduino"
            >
        </div>
        <div class="flex flex-row bg-orange-800 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1750}}
        >
            <img
                    src="/images/rust.png"
                    alt="Rust"
            >
        </div>
        <div class="flex flex-row bg-orange-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2000}}
        >
            <img
                    src="/images/Svelte.svg"
                    alt="Svelte(Kit)"
            >
        </div>
        <div class="flex flex-row bg-cyan-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2250}}
        >
            <img
                    src="/images/tailwindcss-icon.svg"
                    alt="TailwindCSS"
            >
        </div>
        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2500}}
        >
            <img
                    src="/images/logisim.png"
                    alt="Logisim Evolution"
            >
        </div>
        <div class="flex flex-row bg-purple-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2750}}
        >
            <img
                    src="/images/csharp.png"
                    alt="C#"
            >
        </div>
        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 3000}}
        >
            <img
                    src="https://camo.githubusercontent.com/59f72f50a3ffa6ac9cd8389aa99e8e67f637abcbe50ae7fb0dc4b876d91a70e2/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335333635372f646a616e676f2d69636f6e2e737667"
                    alt="Django"
            >
        </div>
    </div>
</div>