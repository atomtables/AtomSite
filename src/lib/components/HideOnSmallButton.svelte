<script>
    export let action = "";
    export let url = "";
    export let formSubmit = false;
    export let className = "";
</script>

{#if !url}
    {#if action}
        <button on:click={action}
                class="shadow-none hidden md:inline-block place-self-center text-center transition-all duration-250 bg-gray-950 px-3 py-2 mx-1 rounded-xl md:shadow-[2px_2px_5px_black] text-nowrap overflow-ellipsis cursor-pointer hover:bg-blue-950 active:bg-blue-900 {className}">
            <slot/>
        </button>
    {:else if formSubmit && action}
        <button type="submit" on:click={action}
                class="shadow-none hidden md:inline-block place-self-center text-center transition-all duration-250 bg-gray-950 px-3 py-2 mx-1 rounded-xl md:shadow-[2px_2px_5px_black] text-nowrap overflow-ellipsis cursor-pointer hover:bg-blue-950 active:bg-blue-900 {className}">
            <slot/>
        </button>
    {:else if formSubmit}
        <button type="submit"
                class="shadow-none hidden md:inline-block place-self-center text-center transition-all duration-250 bg-gray-950 px-3 py-2 mx-1 rounded-xl md:shadow-[2px_2px_5px_black] text-nowrap overflow-ellipsis cursor-pointer hover:bg-blue-950 active:bg-blue-900 {className}">
            <slot/>
        </button>
    {/if}
{:else}
    <a href={url}
       class="shadow-none hidden md:inline-block place-self-center text-center transition-all duration-250 bg-gray-950 px-3 py-2 mx-1 rounded-xl md:shadow-[2px_2px_5px_black] text-nowrap overflow-ellipsis cursor-pointer hover:bg-blue-950 active:bg-blue-900 {className}">
        <slot/>
    </a>
{/if}