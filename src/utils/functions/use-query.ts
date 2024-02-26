/* eslint-disable react-hooks/rules-of-hooks */
'use clint'
import { useRouter, useSearchParams, useParams } from "next/navigation"

export const useQuery = (value: string) => {
    if (typeof window !== 'undefined') {
        const searchParams = useSearchParams()
        const result = searchParams.get(value)
        return result
    }
}