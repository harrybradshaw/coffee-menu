import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["barista"];

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const pathParts = path.split("/");
    const isProtectedRoute = protectedRoutes.includes(path) || pathParts.some(pp => protectedRoutes.includes(pp));
    const sessionCookie = cookies().get("session");

    if (isProtectedRoute && sessionCookie?.value !== "test") {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
}

// all requests will get through the middleware
export const config = {
    matcher: "/:path*",
};
