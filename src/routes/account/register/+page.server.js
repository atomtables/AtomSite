import {fail} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";
import {setCookies} from "$lib/functions.js";
import {apiDomain} from "$lib/secrets/secrets.js";

export const actions = {
    default: async ({cookies, request, fetch}) => {
        const data = await request.formData();
        const username = data.get('username', false);
        const password = data.get('password', false);
        const confirmation = data.get('confirmation', false);
        const firstName = data.get('firstName', false);
        const lastName = data.get('lastName', false);
        const email = data.get('email', false);

        if (!username || !password || !confirmation || !firstName || !lastName || !email) {
            return fail(422, {error: "Please provide all required data."})
        }

        if (password !== confirmation) {
            return fail(422, {error: "Please ensure your password and combination match."})
        }

        // perform password validation
        // check for a lowercase letter
        if (!/[a-z]/.test(password)) {
            return fail(422, {error: "Please ensure your password contains at least one lowercase letter."})
        }
        // check for an uppercase letter
        if (!/[A-Z]/.test(password)) {
            return fail(422, {error: "Please ensure your password contains at least one uppercase letter."})
        }
        // check for a number
        if (!/\d/.test(password)) {
            return fail(422, {error: "Please ensure your password contains at least one number."})
        }
        // check for a special character
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            return fail(422, {error: "Please ensure your password contains at least one special character."})
        }
        // check for a length of at least 8 characters
        if (password.length < 8) {
            return fail(422, {error: "Please ensure your password is at least 8 characters long."})
        }

        const response = await fetch(`${apiDomain}/account/register`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                email: email
            })
        });
        const u = await response.json();
        if (u.code < 0) {
            switch (u.code) {
                case -3:
                    return fail(422, {error: "Please provide all required data."})
                case -10:
                    return fail(403, {error: "You are already logged in. Please log out first."});
                case -11:
                    return fail(403, {error: "Your username and/or email is already registered. Please log in instead."});
                case -13:
                    return fail(500, {error: "The server faced a catastrophic error creating your user. Please try again later."});
                case -1:
                    return fail(500, {error: "The server faced a unrecoverable error. Please try again later."})
                default:
                    return fail(500, {error: "An unknown error occurred. Try again in a few moments."});
            }
        } else if (u.code === 1) {
            setCookies(response.headers.getSetCookie(), cookies)
            redirect(302, "/")
        }
        return fail(500, {error: "An unknown error occurred. Try again in a few moments."});
    }
}