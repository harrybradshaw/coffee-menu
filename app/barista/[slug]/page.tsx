import { getBaristaBySlug } from "@/lib/api";

export default async function BaristaPage({
    params,
}: {
    params: { slug: string }
}) {
    const barista = await getBaristaBySlug(params.slug);
    // Simulate async behaviour.
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <div>
            {barista.firstName}
        </div>
    );
}
