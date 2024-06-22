<script>
    import {marked} from 'marked';
    import {apiDomain} from '$lib/secrets/secrets.js';
    import Button from "$lib/components/Button.svelte";

    let contentHtml;

    const renderer = {
        blockquote(text) {
            return `
            <blockquote>
                ${text}
            </blockquote>`;
        },
        paragraph(text) {
            return `
            <p class="text-lg mt-2 mb-1">
                ${text}
            </p>`;
        },
        image(href, title, text) {
            return `
            <div class="bg-gray-950 rounded-2xl p-2">
                <img src="${href}" alt="" class="w-full rounded-2xl object-cover p-2">
                <div class="px-2 italic">${text}</div>
            </div>
            `;
        },
    }

    marked.use({renderer});

    export let data;

    $: ({author, title, subtitle, content, titleImage, titleCaption, blogImages, comments, likes} = data.page?.blog)

    $: {
        for (let i = 0; i < blogImages.count; i++) {
            // noinspection JSUnresolvedReference
            content = content.replace(`<<<IMAGE${i + 1}>>>`, `![${blogImages.captions[i]}](${apiDomain}${blogImages.images[i]})`);
        }
        contentHtml = marked.parse(content)
    }
</script>

{#if data.page}
<!--    <div>-->
<!--        <img src={`${apiDomain}${titleImage}`} alt={"titleImage"} class="w-full object-cover h-96 blur-md [z-index:1] relative">-->
<!--    </div>-->
    <div class={`w-full flex justify-center bg-opacity-40 [z-index:10] relative bg-[url('${apiDomain}${titleImage}')]`}>
        <div class="xl:w-4/5 lg:flex-row flex flex-nowrap flex-col">
            <div class="w-full lg:w-2/3 bg-gray-900 p-5 px-10 m-3 rounded-2xl">
                <h1 class="[text-shadow:_6px_7px_15px_rgb(255_255_255_/_30%)] xl:text-4xl">
                    {title}
                </h1>
                <div class="text-xl italic my-2">
                    {subtitle}
                </div>
                <div class="bg-gray-950 rounded-2xl p-2">
                    <img src={`${apiDomain}${titleImage}`} alt={"titleCaption"}
                     class="w-full rounded-2xl object-cover h-1/2 p-2">
                    <div class="italic px-2">${titleCaption}</div>
                </div>
                <div class="text-lg">
                    {@html contentHtml}
                </div>
            </div>
            <div class="w-full lg:w-1/3 bg-gray-900 m-3 p-5 rounded-2xl h-[calc(100vh-66px-1.25rem)] sticky top-[calc(66px+0.75rem)]">
                {likes} likes
                <Button action="()">Like</Button>
            </div>
        </div>
    </div>
{/if}