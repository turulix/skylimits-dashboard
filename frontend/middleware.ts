import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    return
    // let accessToken = request.cookies.get("access_token")
    // let isAuthorized = accessToken != null && accessToken.value != ""
    //
    // // TODO: Check if access token is valid
    //
    // if (request.nextUrl.pathname.startsWith("/_next")) {
    //     return
    // }
    //
    // if (isAuthorized) {
    //     if (request.nextUrl.pathname.startsWith("/auth")) {
    //         return redirect(request, "/")
    //     }
    //     return
    // } else {
    //     if (request.nextUrl.pathname.startsWith("/auth")) {
    //         return
    //     }
    //     return redirect(request, "/auth/login")
    // }
}

function redirect(request: NextRequest, path: string): NextResponse {
    const url = request.nextUrl.clone()
    url.pathname = path
    return NextResponse.redirect(url)
}
