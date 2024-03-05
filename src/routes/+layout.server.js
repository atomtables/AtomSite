import {DOMAIN} from "$lib/secrets/secrets.js";

export async function load({cookies, fetch, depends}) {
    depends("app:authentication")

    let csrf = cookies.get("csrftoken");
    let sid = cookies.get("sessionid");

    const response = await fetch(`${DOMAIN}/account/info`);
    const u = await response.json();
    u.info.pfp = DOMAIN + u.info.pfp;
    return {
        user: u.info
    };
}
