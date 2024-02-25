import { getCookie } from "cookies-next";
import { useMemo } from "react";

const useUser = () => useMemo(() => { }, [])

const useEmailUser = () => useMemo(() => {
    const email = getCookie('shcd.email')
    return email
}, [])

export { useUser, useEmailUser }