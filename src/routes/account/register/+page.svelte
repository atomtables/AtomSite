<script>
    import TextInput from "$lib/components/TextInput.svelte";
    import Button from "$lib/components/Button.svelte";
    import {slide} from "svelte/transition";
    import {enhance} from "$app/forms";
    import {invalidate} from "$app/navigation";

    export let form;
</script>

<div class="flex align-middle justify-center h-full" id="content-onepage">
    <div class="bg-opacity-60 place-self-center grid flex-col rounded-none md:h-3/4 h-full md:rounded-xl p-5 bg-gray-900"
         transition:slide>
        <div>
            <h1 class="text-4xl bold text-center p-2 font-bold">Register</h1>
            <p class="text-center font-bold">Create an AtomSite account</p>
        </div>
        <form method="POST" class="justify-self-center" use:enhance>
            <div class="place-self-center">
                <div class="flex space-x-2">
                    <TextInput name="firstName" label="First Name" type="text"
                               placeholder="Forename"
                               required />
                    <TextInput name="lastName" label="Last Name" type="text"
                               placeholder="Surname"
                               required />
                </div>
                <TextInput name="email" label="Email" type="email"
                           placeholder="Please do not enter your username." required/>
                <TextInput name="username" label="Username" type="text"
                           placeholder="Please do not enter your email." required/>
                <div class="flex space-x-2">
                    <TextInput name="password" label="Password" type="password"
                               placeholder="Use a lowercase, uppercase,"
                               required />
                    <TextInput name="confirmation" label="Confirmation" type="password"
                               placeholder="number, and special character"
                               required />
                </div>
            </div>
            {#if form?.error}
                <div class="text-red-200" role="alert">
                    <strong class="font-bold">Error!</strong>
                    <span class="block sm:inline">{form.error}</span>
                </div>
            {/if}
            <div class="text-middle flex align-middle justify-between">
                <div>
                    Already have an account? <a href="/account/signin" class="underline font-bold">Sign in!</a>
                    <br>
                    Forgot your password? <a href="/forgot" class="underline font-bold">Reset it!</a>
                </div>
                <Button className="bg-scheme-green-200 hover:bg-scheme-green-300 active:bg-scheme-green-400 mx-0"
                        formSubmit={true}>
                    Register
                </Button>
            </div>
        </form>
        <div class="text-center">
            Be aware of using computers in public places. <b>Practice safe browsing habits.</b>
            <br>

        </div>
    </div>
</div>