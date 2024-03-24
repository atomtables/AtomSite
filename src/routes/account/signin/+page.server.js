import {fail} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";
import {setCookies} from "$lib/functions.js";
import {apiDomain} from "$lib/secrets/secrets.js";

export const actions = {
    default: async ({cookies, request, fetch}) => {
        const data = await request.formData();
        const username = data.get('username', false);
        const password = data.get('password', false);
        if (!username || !password) {
            return fail(422, {error: "Please provide a username and/or password."})
        }

        const response = await fetch(`${apiDomain}/account/signin`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const u = await response.json();
        if (u.code < 0) {
            switch (u.code) {
                case -3:
                    return fail(401, {error: "Please provide a username and/or password."});
                case -10:
                    return fail(403, {error: "You are already logged in. Please log out first."});
                case -12:
                    return fail(403, {error: "Your username and/or password is incorrect."});
                case -1:
                    return fail(500, {error: "The server faced an unrecoverable error. Please try again later."});
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