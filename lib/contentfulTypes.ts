import type {
    ChainModifiers,
    Entry,
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
} from "contentful";

export interface TypeBaristaFields {
    firstName?: EntryFieldTypes.Symbol
    lastName?: EntryFieldTypes.Symbol
    favouriteDrink?: EntryFieldTypes.EntryLink<EntrySkeletonType>
}

export type TypeBaristaSkeleton = EntrySkeletonType<
    TypeBaristaFields,
    "barista"
>;
export type TypeBarista<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBaristaSkeleton, Modifiers, Locales>;

export interface TypeDrinksFields {
    name: EntryFieldTypes.Text
    image: EntryFieldTypes.AssetLink
    taste?: EntryFieldTypes.RichText
    slug: EntryFieldTypes.Text
}

export type TypeDrinksSkeleton = EntrySkeletonType<TypeDrinksFields, "drinks">;
export type TypeDrinks<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode,
> = Entry<TypeDrinksSkeleton, Modifiers, Locales>;
