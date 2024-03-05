import {DOMAIN} from "$lib/secrets/secrets.js";
import {fail} from "@sveltejs/kit";
import {setCookies} from "$lib/functions.js";

export const GET = async ({ cookies, fetch }) => {
    let response = await fetch(`${DOMAIN}/account/signout`)

    const u = await response.json();
    switch (u.code) {
        case 1:
            setCookies(response.headers.getSetCookie(), cookies)
            return new Response(1);
        case -1:
            return new Response(-1);
        case -2:
            return new Response(-2);
        default:
            return new Response(-255);
    }


}