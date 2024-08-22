import { cookies } from "next/headers";

export function canAccessBaristas(): boolean {
    return isLoggedIn();
}

export function isLoggedIn(): boolean {
    const sessionCookie = cookies().get("session");
    return !!sessionCookie?.value;
}
