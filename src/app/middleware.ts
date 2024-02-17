import { checkIsPublicRoute } from "@/utils/functions/check-route";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    const isPublic = checkIsPublicRoute(req.nextUrl.pathname)

    if (isPublic) {
        NextResponse.redirect(new URL('/auth', req.url))
    }

}

export const config = {
    'matcher': '/:path*'
}