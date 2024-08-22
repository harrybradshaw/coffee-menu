import { getBaristaBySlug } from "@/lib/api";

export default async function BaristaPage({
    params,
}: {
    params: { slug: string }
}) {
    const barista = await getBaristaBySlug(params.slug);
    return (
        <div>
            {barista.firstName}
        </div>
    );
}
