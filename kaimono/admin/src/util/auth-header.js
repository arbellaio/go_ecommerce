export function authHeader(tokenKey) {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem(tokenKey));
    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}
