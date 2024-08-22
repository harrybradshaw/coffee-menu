import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login() {
    await createSession();
    redirect("/");
}
