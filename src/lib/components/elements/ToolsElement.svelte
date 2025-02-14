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
                    src="https://camo.githubusercontent.com/03f36d16e385e56b8d67ff1a9828d6d8cfd386736a8c82342d661e5ea4088869/68747470733a2f2f646576656c6f7065722e6170706c652e636f6d2f73776966742f696d616765732f73776966742d6f672e706e67"
                    alt="Swift"
            >
        </div>
        <div class="flex flex-row bg-blue-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 500}}
        >
            <img
                    src="https://camo.githubusercontent.com/6be4ac216b7ab43287258c629dc9e96687208edf6beeedb25afbd44c10cc8f25/68747470733a2f2f63646e332e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6c6f676f732d616e642d6272616e64732d61646f62652f3531322f3236375f507974686f6e2d3531322e706e67"
                    alt="Python3"
            >
        </div>
        <div class="flex flex-row bg-yellow-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 750}}
        >
            <img
                    src="https://camo.githubusercontent.com/d3405185f542f432dd3fb4cdf6c9cd3f7a4475ba933701eef7c4a03e82b69d77/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36612f4a6176615363726970742d6c6f676f2e706e67"
                    alt="JavaScript"
            >
        </div>
        <div class="flex flex-row bg-neutral-700 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1000}}
        >
            <img
                    src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/c@0.0.3/c_256x256.png"
                    alt="C"
            >
        </div>
        <div class="flex flex-row bg-blue-800 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1250}}
        >
            <img
                    src="https://camo.githubusercontent.com/7538cdfc8bc48a5613c40298df6762fb87e87f87a2fe800d6a40872c701b1d3c/68747470733a2f2f746965726d616b65722e636f6d2f696d616765732f63686172742f63686172742f70726f6772616d6d696e672d6c616e67756167652d3938343538322f6e61736d706e672e706e67"
                    alt="nASM"
            >
        </div>
        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1500}}
        >
            <img
                    src="https://camo.githubusercontent.com/8d45c84aea893b3994976eb5aada3e315dad5cc4047bcdec312566be2bdbf05f/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f667265652d61726475696e6f2d3232363037322e706e67"
                    alt="Arduino"
            >
        </div>
        <div class="flex flex-row bg-orange-800 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 1750}}
        >
            <img
                    src="https://camo.githubusercontent.com/697d39479dd4002ee29cf88b63c51054db8ef8d137adb5b9f05145116de0273b/68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031372f30382f30352f31312f31362f6c6f676f2d323538323734385f313238302e706e67"
                    alt="HTML5"
            >
        </div>
        <div class="flex flex-row bg-orange-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2000}}
        >
            <img
                    src="https://camo.githubusercontent.com/26f81ec817d3a568ab3c3a5301d18c3a60b0089258df900d28a01181926536cf/68747470733a2f2f72616661656c6d617274696e657a2e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f72616661656c6d617274696e657a2f7376656c74652d707265766965772f322e372e312f313730383337323430343731342f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74"
                    alt="Svelte(Kit)"
            >
        </div>
        <div class="flex flex-row bg-cyan-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2250}}
        >
            <img
                    src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.2.0/1558040563649/Microsoft.VisualStudio.Services.Icons.Default"
                    alt="TailwindCSS"
            >
        </div>
        <div class="flex flex-row bg-green-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2500}}
        >
            <img
                    src="https://avatars.githubusercontent.com/u/84764158?v=4"
                    alt="Logisim Evolution"
            >
        </div>
        <div class="flex flex-row bg-purple-900 rounded-2xl p-2 aspect-square mx-1 my-1"
             in:blur={{duration: 500, delay: 2750}}
        >
            <img
                    src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C.png"
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