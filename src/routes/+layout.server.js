import {apiDomain} from "$lib/secrets/secrets.js";

export async function load({cookies, fetch, depends}) {
    depends("app:authentication")

    const response = await fetch(`${apiDomain}/account/info`);

    if (response.status === 204)
        return {layout: {user: {is_authenticated: false}}}
    else {
        const u = await response.json();
        u.info.pfp = apiDomain + u.info.pfp;
        return {
            layout: {
                user: u.info
            }
        };
    }
}
