import {apiKey, DOMAIN} from "$lib/secrets/secrets.js";

export async function handleFetch({event, request, fetch}) {
    if (request.url.startsWith(DOMAIN)) {
		request.headers.set('csrftoken', event.request.headers.get('csrftoken'));
        request.headers.set('sessionid', event.request.headers.get('sessionid'));
		request.headers.set('Authorization', `Bearer ${apiKey}`);
	}

    return fetch(request);
}