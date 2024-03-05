export function setCookies(cookies, setter) {
    cookies.forEach(cookieStr => {
        const cookieParts = cookieStr.split(';').map(part => part.trim());
        const cookie = {};
        let first = true
        let cookieName = ""
        let cookieValue = ""
        cookieParts.forEach(part => {
            const [key, value] = part.split('=');
            cookie[key] = value || true; // If there's no value, set it to true
            if (first) {
                cookieName = key
                cookieValue = value
            }
            first = false
        });

        const {expires, MaxAge, Path, SameSite, HttpOnly, Secure} = cookie;
        const cookieOptions = {};

        if (expires) {
            cookieOptions.expires = new Date(expires);
        }

        if (MaxAge) {
            cookieOptions.maxAge = parseInt(MaxAge);
        }

        if (Path) {
            cookieOptions.path = Path;
        }

        if (SameSite) {
            cookieOptions.sameSite = SameSite;
        }

        if (HttpOnly) {
            cookieOptions.httpOnly = true;
        }

        if (Secure) {
            cookieOptions.secure = true;
        }

        setter.set(cookieName, cookieValue, cookieOptions);
    });
}