const fetchApi = async (query: any, { variables }: any = {}) => {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(
    "https://vv9clahqom.preview.infomaniak.website//graphql",
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
};

export const getAllPosts = async () => {
  const data = await fetchApi(`query Posts {
	posts(where: { orderby: { field: DATE, order: ASC } }) {
	  edges {
		node {
		  id
		  title
		  slug
		  excerpt
		  categories {
			nodes {
			  name
			  slug
			}
		  }
		  featuredImage {
			node {
			  sourceUrl(size: MEDIUM)
			  sizes(size: MEDIUM)
			  altText
			  srcSet(size: MEDIUM)
			}
		  }
		}
	  }
	}
  }`);
  return data?.posts;
};

export const getPostBySlug = async (slug: string) => {
  const data = await fetchApi(
    `query PostBySlug($slug: String!) {
		postBy(slug: $slug) {
		  id
		  content
		  title
		  date
		  featuredImage {
			node {
			  sourceUrl
			  srcSet
			}
		  }
		  contentType {
			node {
			  name
			}
		  }
		  seo {
			title
		  }
		}
	  }`,
    {
      variables: {
        slug,
      },
    }
  );
  return data?.postBy;
};
