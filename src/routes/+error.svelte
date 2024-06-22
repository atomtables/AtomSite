<script>
    import { page } from '$app/stores'

    import {sineInOut} from "svelte/easing";
</script>

<div class="grid h-full w-full place-items-center relative transition-all" id="content-onepage">
    <div class="align-middle content-center bg-[#001220] md:rounded-3xl bg-opacity-40 p-5 w-full h-full absolute flex justify-center items-center shadow-[0_0_50px_0px_rgb(0_0_0_/_0.25)] shadow-black">
        <div class="text-center">
            <h3>Oopsie Daisy!</h3>
            <h1><code>Error {$page.status}</code></h1>
            <h1 class="text-5xl">{$page.error.message}!</h1>
            <img src="/Tom%20and%20Jerry%20Tom%20crashing.gif" alt="Tom and Jerry crashing" class="w-ful mx-auto p-4 rounded-3xl" />
        </div>
    </div>
</div>