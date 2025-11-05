<script>
import IObserver from "svelte-intersection-observer";
import { slide } from "svelte/transition"
import {onMount} from "svelte";

// thanks to https://spencermortensen.com/


let socialsSource = [
    {
        "image": "/images/github.webp",
        "alt": "GitHub",
        "url": "//github.com/atomtables",
        "text": "Check out all of my projects at",
        "link": "github.com/atomtables",
        "color": "bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700"
    },
    {
        "image": "/images/youtube.webp",
        "alt": "YouTube",
        "url": "//youtube.com/@atomtables",
        "text": "Check out some of my project explanations at",
        "link": "youtube.com/@atomtables",
        "color": "bg-red-900 hover:bg-red-800 active:bg-red-700"
    },
    {
        "image": "/images/linkedin.png",
        "alt": "LinkedIn",
        "url": "//www.linkedin.com/in/adithiya-venkatakrishnan-724a15303/",
        "text": "Check out my profile on LinkedIn!",
        "link": "Adithiya Venkatakrishnan",
        "color": "bg-blue-900 hover:bg-blue-800 active:bg-blue-700"
    },
    {
        "image": "/images/icloud.png",
        "alt": "iCloud",
        "url": "mailto:firstname-lastname website",
        "text": "Email me if you really want at",
        "link": "firstname-lastname website",
        "color": "bg-cyan-800 hover:bg-cyan-700 active:bg-cyan-600",
        special: true
    }
]

onMount(() => {
    document.querySelector("#text-conversion").firstChild.nodeValue = document.querySelector("#text-conversion").firstChild.nodeValue
        .replace('-', '.')
        .replace(' ', '@')
        .replaceAll(' ', '.')
        .replaceAll(new RegExp('firstname', 'g'), 'adithiya')
        .replaceAll(new RegExp('lastname', 'g'), 'venkatakrishnan')
        .replace('website', 'atomtables.dev');
    document.querySelector("#text-conversion-a").href = document.querySelector("#text-conversion-a").href
        .replace('-', '.')
        .replace(' ', '@')
        .replaceAll(' ', '.')
        .replaceAll(new RegExp('firstname', 'g'), 'adithiya')
        .replaceAll(new RegExp('lastname', 'g'), 'venkatakrishnan')
        .replace('website', 'atomtables.dev');
})
</script>

<div class="bg-[#001220] md:rounded-3xl bg-opacity-60 p-5 flex flex-col justify-center w-full">
    <div class="">
        My Socials
    </div>
    <hr class="p-0 m-0 my-1 bg-gray-300">
    <div class="mt-2 flex-col h-full w-full space-y-1 flex">
        {#each socialsSource as {image, alt, url, text, link, color, special}, index}
            <a class="rounded-2xl p-2 {color} flex flex-row h-1/2 items-center"
               href={url}
               id={special && "text-conversion-a"}
               target="_blank" rel="noopener noreferrer"
               in:slide={{duration: 500, axis: 'x', delay: 250 + index * 250}}
            >
                <img src={image} alt={alt}
                     class="h-20 w-20 mr-2 rounded-full">
                <div class="flex flex-col truncate">
                    <div class="">{text}</div>
                    <div class="font-bold text-2xl" id={special && "text-conversion"}>{link}</div>
                </div>
            </a>
        {/each}
    </div>
</div>
