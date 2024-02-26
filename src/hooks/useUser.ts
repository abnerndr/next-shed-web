import { getCookie } from "cookies-next";
import { useMemo } from "react";

const useUser = () => useMemo(() => {
    const user = getCookie('shcd.user')
    const parseUser = JSON.parse(user?.toString() as string)

    return {
        id: parseUser.id,
        name: parseUser.full_name,
        email: parseUser.email
    }
}, [])

const useEmailUser = () => useMemo(() => {
    const email = getCookie('shcd.email')
    if (email !== 'undefined') {
        return JSON.parse(email?.toString() as string)
    }
    return null
}, [])

export { useUser, useEmailUser }