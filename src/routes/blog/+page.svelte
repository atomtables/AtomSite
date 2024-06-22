<script>
    import Button from "$lib/components/Button.svelte";
    import {apiDomain} from "$lib/secrets/secrets.js";

    import Library from 'svelte-material-icons/Library.svelte';

    export let data;

    $: blogs = data.layout.blog
</script>
<div class={`w-full flex justify-center bg-opacity-40 [z-index:10] relative`}>
    <div class="xl:w-4/5 lg:flex-row flex flex-nowrap flex-col">
        <div class="w-full lg:w-2/3 bg-gray-900 p-5 m-3 rounded-2xl">
            {#each blogs as {author, title, subtitle, content, titleImage, titleCaption, likes, comments}, index}
                {#if index === 0}
                    <div>
                        <div style={`--image-url:url('${apiDomain}${titleImage}')`}
                             class={`bg-[image:var(--image-url)] rounded-xl h-96 bg-cover`}>
                            <div class="from-gray-50/0 to-75% to-gray-800 bg-gradient-to-b bg-opacity-50 w-full h-full rounded-xl flex flex-col align-left text-left justify-end p-5">
                                <h1>{title}</h1>
                                <h3>{subtitle}</h3>po
                                <div class="pt-2">
                                    <Button action="()" icon={Library}>Read Article</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                {:else}
                    <div>
                        <h3>{title}</h3>
                    </div>
                {/if}

            {/each}

        </div>
        <div class="w-full lg:w-1/3 bg-gray-900 m-3 p-5 rounded-2xl h-[calc(100vh-66px-1.25rem)] sticky top-[calc(66px+0.75rem)]">

            <Button action="()">Like</Button>
        </div>
    </div>
</div>
