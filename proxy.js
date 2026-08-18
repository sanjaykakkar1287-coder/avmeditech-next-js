import { NextResponse } from "next/server";

export function proxy(request) {
    const session = request.cookies.get("admin_session");

    const { pathname } = request.nextUrl;

    const isAdminRoute = pathname.startsWith("/admin");
    const isLoginPage = pathname === "/admin/login";

    // Redirect unauthenticated users to login
    if (isAdminRoute && !isLoginPage && !session) {
        return NextResponse.redirect(
            new URL("/admin/login", request.url)
        );
    }

    // Redirect logged-in users away from login
    if (isLoginPage && session) {
        return NextResponse.redirect(
            new URL("/admin", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};