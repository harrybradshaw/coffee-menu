import { cookies } from "next/headers";

export async function Hello() {
    const sessionCookie = cookies().get("session");

    return (
        <>
            {sessionCookie?.value || "Login to say hello"}
        </>
    );
}
