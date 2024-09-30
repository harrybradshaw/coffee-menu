import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { drinksTag } from "@/lib/api";

export async function POST(request: Request) {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get("x-reval-key");

    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidateTag(drinksTag);
    revalidatePath("/coffee/[coffeeName]", "layout");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
