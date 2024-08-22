"use server";
import { cookies } from "next/headers";
import "server-only";

export async function createSession() {
    cookies().set("session", "test", {
        httpOnly: true,
        path: "/",
    });
}

export async function deleteSession() {
    cookies().delete("session");
}
