"use client";
import { createSession, deleteSession } from "@/lib/session";

interface LoginLogoutProps {
    isLoggedIn: boolean
}

export default function LoginLogout({ isLoggedIn }: LoginLogoutProps) {
    return (
        <>
            {
                isLoggedIn
                    ? <button onClick={() => deleteSession()}>Logout</button>
                    : <button onClick={() => createSession()}>Login</button>
            }
        </>
    );
}
