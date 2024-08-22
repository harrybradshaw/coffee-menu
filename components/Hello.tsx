import { canAccessBaristas } from "@/lib/userService";

export async function Hello() {
    const canUserAccessBaristas = canAccessBaristas();
    return (
        <>
            {canUserAccessBaristas ? "hello" : "Login to say hello"}
        </>
    );
}
