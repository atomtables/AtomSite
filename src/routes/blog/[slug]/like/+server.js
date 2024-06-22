import {apiDomain} from "$lib/secrets/secrets.js";
import {error, fail} from "@sveltejs/kit";
import {setCookies} from "$lib/functions.js";

export const GET = async ({ cookies, fetch, url }) => {
    const post_id = url.searchParams.get('post')

    let response = await fetch(`${apiDomain}/blog/post/${post_id}/like`)

    const u = await response.json();
    switch (u.code) {
        case 1:
            return new Response(u.info.likes);
        case -1:
            return new error(500, -1);
        case -2:
            return new error(500, -2);
        default:
            return new error(500, -255);
    }


}