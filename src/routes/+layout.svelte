<script>
    import {invalidate} from "$app/navigation";

    export let data;
    $: ({user} = data)

    import "$lib/app.css"
    import Button from "$lib/components/Button.svelte";

    import {slide} from "svelte/transition";
    import {sineIn} from "svelte/easing";


    /** *i fucking hate javascript*
     * @param {{is_authenticated:bool}} is_authenticated
     * @param {{username:string}} username
     * @param {{email:string}} email
     * @param {{first_name:string}} first_name
     * @param {{last_name:string}} last_name
     * @param {{bio:string}} bio
     * @param {{pfp:string}} pfp
     */

    let collapsed = true;
</script>

<div class="h-[calc(100vh-66px)]">
    <header class="bg-scheme-green-100 flex justify-between border-b-aquamarine border-b-2 w-full z-50">
        <div class="align-middle">
            <button class="font-medium text-3xl p-2 align-middle h-full text-left" id="titleButton"
                    onclick="document.location.href = '/';">
                &lt;atomtables&gt;
            </button>
        </div>
        <div class="my-0 h-full">
            <Button url="/friend/list">Friends</Button>
            <Button url="/admin">Admin</Button>
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
                        <div transition:slide={{axis: 'x', easing: sineIn}} class="pr-2"></div>
                        <div class="flex align-middle justify-between border-l-2 pl-1"
                             transition:slide={{axis: 'x', easing: sineIn}}>
                            <Button url="/account/profile" className="shadow-none">Account</Button>
                            <Button action={() => {
                                fetch("/account/signout").then(response => response.text().then(body => {
                                    if (body === "1") {
                                        alert("Success: signed out")
                                        invalidate("app:authentication")
                                    } else {
                                        alert("Failed")
                                    }
                                }).catch(error => alert(error))).catch(error => alert(error))
                            }} className="shadow-none">
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
    <div class="h-full">
        <slot/>
    </div>
</div>