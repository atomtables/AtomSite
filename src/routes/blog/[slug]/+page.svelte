<script>
    import {marked} from 'marked';
    import {apiDomain} from '$lib/secrets/secrets.js';

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
                <img src="${href}" alt="${text}" class="w-full rounded-2xl object-cover h-60 p-2">
                <div class="px-2 italic">${text}</div>
            </div>
            `;
        },
    }

    marked.use({renderer});

    export let data;

    $: ({author, title, subtitle, content, titleImage, titleCaption, blogImages, comments} = data.page?.blog)

    $: {
        for (let i = 0; i < blogImages.count; i++) {
            // noinspection JSUnresolvedReference
            content = content.replace(`<<<IMAGE${i + 1}>>>`, `![${blogImages.captions[i]}](${apiDomain}${blogImages.images[i]})`);
        }
        contentHtml = marked.parse(content)
    }
</script>

{#if data.page}
    <div class="w-full flex justify-center bg-gray-900 bg-opacity-40">
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
            <div class="w-full lg:w-1/3 bg-gray-900 m-3">
                side2
            </div>
        </div>
    </div>
{/if}