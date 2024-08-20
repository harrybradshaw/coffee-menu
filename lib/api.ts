import { TypeDrinksSkeleton } from "@/lib/contentfulTypes";
import type { EntryCollection, EntrySkeletonType } from "contentful";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const extractFieldsFromItems = <TSkeleton extends EntrySkeletonType>(
    entries: EntryCollection<TSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">,
) => entries.items.map(i => i.fields)[0];
export type Fields<T extends EntrySkeletonType> = ReturnType<
  typeof extractFieldsFromItems<T>
>;

export const drinksTag = "drinks";

export async function fetchRest<TReturn extends EntrySkeletonType>(
    searchParams: URLSearchParams,
): Promise<EntryCollection<TReturn, "WITHOUT_UNRESOLVABLE_LINKS">> {
    return fetch(
        `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?${searchParams.toString()}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            next: { tags: [drinksTag] },
        },
    ).then(response => response.json());
}

const extractFirstImageUrl = (
    fetchResponse: EntryCollection<TypeDrinksSkeleton>,
): string | undefined => {
    const assets = fetchResponse.includes?.Asset;
    if (!assets || assets.length < 1) {
        return undefined;
    }
    const assetFile = assets[0].fields.file;
    return "https:" + assetFile?.url;
};

export type DrinkWithUrl = Fields<TypeDrinksSkeleton> & {
    url: string | undefined
};

function extractDrinkRest(
    fetchResponse: EntryCollection<
        TypeDrinksSkeleton,
        "WITHOUT_UNRESOLVABLE_LINKS"
    >,
): DrinkWithUrl {
    const entry = extractDrinksRest(fetchResponse)[0];
    return {
        ...entry,
        url: extractFirstImageUrl(fetchResponse),
    };
}

function extractDrinksRest(
    fetchResponse: EntryCollection<
        TypeDrinksSkeleton,
        "WITHOUT_UNRESOLVABLE_LINKS"
    >,
): Array<Fields<TypeDrinksSkeleton>> {
    return fetchResponse.items.map(i => i.fields);
}

export async function getDrinkBySlug(slug: string): Promise<DrinkWithUrl> {
    const searchParams = {
        "fields.slug": slug,
        "content_type": "drinks",
    };
    const entry = await fetchRest<TypeDrinksSkeleton>(
        new URLSearchParams(searchParams),
    );
    return extractDrinkRest(entry);
}

export async function getAllDrinks(): Promise<
    Array<Fields<TypeDrinksSkeleton>>
> {
    const searchParams = new URLSearchParams("content_type=drinks");
    const entries = await fetchRest<TypeDrinksSkeleton>(searchParams);
    return extractDrinksRest(entries);
}
