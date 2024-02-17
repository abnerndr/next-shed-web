import { getCookie } from "cookies-next";

export const checkUserisAuthenticated = () => {
    const token = getCookie('shcd.token')
    return !!token
}