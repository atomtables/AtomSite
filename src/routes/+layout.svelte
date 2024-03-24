<script>
    import {goto, invalidate} from "$app/navigation";
    import "$lib/app.css"
    import Button from "$lib/components/Button.svelte";
    import {apiDomain} from "$lib/secrets/secrets.js";

    import {slide} from "svelte/transition";
    import {sineInOut} from "svelte/easing";
    import HideOnSmallButton from "$lib/components/HideOnSmallButton.svelte";

    let innerWidth = 2000;
    let innerHeight = 2000;

    export let data;

    /** *i fucking hate javascript*
     * @param {{is_authenticated:bool}} is_authenticated
     * @param {{username:string}} username
     * @param {{email:string}} email
     * @param {{first_name:string}} first_name
     * @param {{last_name:string}} last_name
     * @param {{bio:string}} bio
     * @param {{pfp:string}} pfp
     */
    $: ({user} = data.layout)

    let collapsed = true;
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<div class="min-h-full">
    <header class="bg-scheme-green-100 flex justify-between border-b-aquamarine border-b-2 w-full z-50 fixed">

        <div class="align-middle">
            {#if (collapsed || innerWidth > 768) && innerWidth > 420}
                <button class="align-self-middle font-medium text-3xl p-2 align-middle h-full text-left" id="titleButton"
                        transition:slide={{axis: 'x'}}>
                    <a href="/">&lt;atomtables&gt;</a>
                </button>
                <noscript>Please Enable Javascript.</noscript>
            {/if}
        </div>
        <div class="justify-self-end my-0 h-full">
            <HideOnSmallButton url="/friend/list">Friends</HideOnSmallButton>
            <HideOnSmallButton url="{apiDomain}/admin">Admin</HideOnSmallButton>
            {#if user.is_authenticated }
                <!-- the user is considered to be logged in?-->
                <div class="transition-all duration-250 font-medium text-md align-middle justify-center inline-flex h-full p-2 text-left button bg-scheme-green-200 hover:bg-scheme-green-300 active:bg-scheme-green-400 text-md text-white rounded-l-xl text-nowrap overflow-ellipsis"
                     id="userInfo" on:click={() => collapsed = !collapsed} role="button" tabindex="0" on:keydown={(e) => {
                         if (e.key === 'Enter') collapsed = !collapsed;
                         else if (e.key === 'Escape') {
                             collapsed = true;
                             document.querySelector('#userInfo').blur();
                         }
                     }}>
                    <img class="inline-block h-[48px] w-[48px] object-cover rounded-xl bg-scheme-green-600 mr-2"
                         src="{user.pfp}" alt="avatar">
                    <div class="inline-block text-md leading-none">
                        <div class="text-xl">{user.first_name}</div>
                        {user.last_name}
                    </div>
                    {#if !collapsed}
                        <div transition:slide={{axis: 'x', easing: sineInOut}} class="pr-2"></div>
                        <div class="flex align-middle justify-between border-l-2 pl-1"
                             transition:slide={{axis: 'x', easing: sineInOut}}>
                            <Button action="()">Account</Button>
                            <Button action={() => {
                                fetch("/account/signout").then(response => response.text().then(body => {
                                    if (body === "1") {
                                        invalidate("app:authentication")
                                        goto("/")
                                    } else {
                                        alert(`Unable to sign out, please try again later. (Error code ${body}}`)
                                    }
                                }).catch(alert)).catch(alert)
                            }} hide={true}>
                                Sign Out
                            </Button>
                        </div>
                    {/if}
                </div>
            {:else}
                <div class="transition-all duration-250 font-medium text-md align-middle justify-center inline-flex h-full p-2 button text-left bg-scheme-green-200 hover:bg-scheme-green-300 active:bg-scheme-green-400 text-md text-white rounded-l-xl text-nowrap overflow-ellipsis"
                     id="userInfo">
                    <img class="inline-block h-[48px] w-[48px] object-cover rounded-xl bg-scheme-green-600 mr-2"
                         src="http://localhost:8000/media/profile_pictures/user_pfp.png" alt="avatar">
                    <div class="inline-block text-md leading-none">
                        <div class="text-xl"><a href="/account/signin" class="underline">Sign In</a></div>
                        Or <a href="/account/register" class="underline">Register</a>
                    </div>
                </div>
            {/if}
        </div>
    </header>
    <div class="min-h-[calc(100vh-66px)]">
        <div class="pt-[66px]"/>
        <slot/>
    </div>
</div>