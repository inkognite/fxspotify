export let ACCESS_TOKEN: string = "";
export let ACCESS_TOKEN_EXPIRE: number = 0;
export let ACCESS_TOKEN_NOW: number = 0;
export let FETCHING_TOKEN: boolean = false;

export const setAccessToken = (token: any) => {
   ACCESS_TOKEN = token.value;
   ACCESS_TOKEN_EXPIRE = Date.now() + token.expires_in;
   ACCESS_TOKEN_NOW = Date.now();
}

export const toggleFetchingToken = () => {
   FETCHING_TOKEN = !FETCHING_TOKEN;
}