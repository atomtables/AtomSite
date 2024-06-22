<script>

    let innerWidth;
    let innerHeight;

    export let action = "";
    export let url = "";
    export let formSubmit = false;
    export let className = "";

    export let icon;

</script>

{#if !url}
    <button on:click={action} type={formSubmit ? 'submit' : ''}
            class="inline-block text-base text-center transition-all duration-250 bg-scheme-green-100 rounded-full shadow-[2px_2px_5px_black] border-2 border-scheme-green-200 text-nowrap overflow-ellipsis cursor-pointer hover:bg-scheme-green-200 active:bg-scheme-green-300 h-inherit {className}">
        <span class="flex content-center align-middle">
            {#if icon}
                <span class="place-self-center h-full inline-block pr-1 pl-2 py-2 rounded-l-full rounded-r-full border-gray-800">
                    <svelte:component this={icon} size="1.5rem" class=""></svelte:component>
                </span>
            {/if}
            <span class="border-gray-800 py-2 pr-2 {icon ? '' : 'pl-2'} place-self-center font-bold">
                <slot/>
            </span>
        </span>
    </button>
{:else}
    <a href={url}
       class="inline-block text-base text-center transition-all duration-250 bg-scheme-green-100 rounded-full shadow-[2px_2px_5px_black] border-2 border-scheme-green-200 text-nowrap overflow-ellipsis cursor-pointer hover:bg-scheme-green-200 active:bg-scheme-green-300 h-inherit {className}">
        <span class="flex content-center align-middle">
            {#if icon}
                <span class="place-self-center h-full inline-block pr-1 pl-2 py-2 rounded-l-full rounded-r-full border-gray-800">
                    <svelte:component this={icon} size="1.5rem" class=""></svelte:component>
                </span>
            {/if}
            <span class="border-gray-800 py-2 pr-2 {icon ? '' : 'pl-2'} place-self-center font-bold">
                <slot/>
            </span>
        </span>
    </a>
{/if}