import {apiDomain} from "$lib/secrets/secrets.js";

export const load = async ({fetch}) => {
    const response = await fetch(`${apiDomain}/blog/post/c310dde6-2e3c-455f-b9ae-943cb6e40dc6`);
    const {code, info} = await response.json();
    if (code !== 1) {
        throw new Error(500, `Failed to load blog post: ${code}`)
    }
    return {page: {blog: info}};
}