const fetchApi = async (query: any, { variables }: any = {}) => {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch("https://admin.johnbioux.fr/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
};

export const getAllSlugs = async () => {
  const data = await fetchApi(`query Slugs {
	  contentNodes {
		  edges {
			  node {
				  slug
			  }
		  }
	  }
  }`);
  return data?.contentNodes;
};

export const getContentBySlug = async (slug: string) => {
  const data = await fetchApi(
    `query Contents($slug: ID!) {
		contentNode(id: $slug, idType: URI){
			... on Post {
				id
				content
				title
				date
				slug
				featuredImage {
				  node {
					sourceUrl(size: MEDIUM_LARGE)
					srcSet(size: MEDIUM_LARGE)
					sizes(size: MEDIUM_LARGE)
					altText
					id
				  }
				}
				contentType {
				  node {
					name
				  }
				}
				seo {
				  title
				  metaDesc
				  opengraphTitle
				  opengraphDescription
				  opengraphType
				  opengraphUrl
				  schema {
					  raw
				  }
				  opengraphImage {
					sourceUrl
				  }
				}
			}
			... on Page {
				id
				content
				title
				date
				slug
				featuredImage {
				  node {
					altText
					id
					sourceUrl(size: MEDIUM_LARGE)
					srcSet(size: MEDIUM_LARGE)
					sizes(size: MEDIUM_LARGE)
				  }
				}
				contentType {
				  node {
					name
				  }
				}
				seo {
					title
					metaDesc
					opengraphTitle
					opengraphDescription
					opengraphType
					opengraphUrl
					schema {
						raw
					}
					opengraphImage {
					  sourceUrl
					}
				}
			}

		}
	}`,
    {
      variables: {
        slug,
      },
    }
  );

  return data?.contentNode;
};

export const getAllPosts = async () => {
  const data = await fetchApi(
    `query Posts {
	posts(where: { orderby: { field: DATE, order: ASC } }) {
	  edges {
		node {
		  id
		  title
		  slug
		  excerpt
		  categories {
			nodes {
				id
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
  }`
  );
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
			  sizes
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
