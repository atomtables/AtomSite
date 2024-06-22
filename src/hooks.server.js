import {apiKey, apiDomain} from "$lib/secrets/secrets.js";
import {getCookies} from "$lib/functions.js";

export async function handleFetch({event, request, fetch}) {
    if (request.url.startsWith(apiDomain)) {
		request.headers.set('cookie', event.request.headers.get('cookie'));
		request.headers.set('Authorization', `Bearer ${apiKey}`);
	}

    return fetch(request);
}