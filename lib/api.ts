const POST_GRAPHQL_FIELDS = `
    name,
    image {
        url
    }
`;

async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.drinksCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.drinksCollection?.items;
}

export async function getDrinkBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      drinksCollection(where: { name: "${slug}" } {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractPost(entry);
}

export async function getAllDrinks(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      drinksCollection{
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
        preview ? "true" : "false"
      }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
