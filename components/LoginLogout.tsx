"use client";
import { createSession, deleteSession } from "@/lib/session";

export default function LoginLogout() {
    return (
        <>
            <button onClick={() => createSession()}>Login</button>
            <button onClick={() => deleteSession()}>Logout</button>
        </>
    );
}
