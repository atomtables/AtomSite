import {apiDomain} from "$lib/secrets/secrets.js";

export async function load({fetch}){
    const response = await fetch(`${apiDomain}/blog/list`)

    let u = await response.json()

    return {layout: {blog: u.info}}
}