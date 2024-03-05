<script>
    import TextInput from "$lib/components/TextInput.svelte";
    import Button from "$lib/components/Button.svelte";
    import {slide} from "svelte/transition";
    import {enhance} from "$app/forms";
    import {invalidate} from "$app/navigation";

    export let form;

    let email = ""
    let password = ""
</script>

<div class="flex align-middle justify-center h-full">
    <div class="place-self-center md:border-2 xl:w-1/3 lg:1/2 w-full md:w-2/3 rounded-none md:h-3/4 h-full md:rounded-xl p-5 bg-gray-900"
         transition:slide>
        <h1 class="text-4xl bold text-center pb-5">Sign In</h1>
        <form method="POST" use:enhance>
            <TextInput name="username" label="Username" type="text" bind:value={email} placeholder="Username" required/>
            <TextInput name="password" label="Password" type="password" bind:value={password} placeholder="Password"
                       required/>
            {#if form?.error}
                <div class="text-red-200" role="alert">
                    <strong class="font-bold">Error!</strong>
                    <span class="block sm:inline">{form.error}</span>
                </div>
            {/if}
            <div class="text-middle flex align-middle justify-center">
                <Button className="bg-scheme-green-100 hover:bg-scheme-green-200 active:bg-scheme-green-300 mx-0"
                        formSubmit={true} action={async () => {await invalidate("app:authentication")}}>
                    Sign In
                </Button>
            </div>
        </form>
    </div>
</div>