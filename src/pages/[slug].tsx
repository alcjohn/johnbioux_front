import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { PostBySlugDocument, usePostBySlugQuery } from "../generated/graphql";
import { addApolloState, initializeApollo } from "../lib/apollo";
import Html2React from "../components/Html2React";
import Layout from "../components/layout/Layout";
import PostComponent from "../components/PostComponent";
import { Container } from "next/app";
import { Box } from "@chakra-ui/react";
interface IProps {}

const Post: React.FC<IProps> = ({}) => {
  const { query } = useRouter();
  const { data, error } = usePostBySlugQuery({
    variables: {
      slug: query.slug as string,
    },
  });
  const typePost = data?.postBy?.contentType?.node?.name;
  if (error) {
    JSON.stringify(error, null, 2);
  }
  if (!data) {
    return <div>loading</div>;
  }
  return (
    <Layout>
      <Head>
        <title>{data.postBy?.seo?.title}</title>
      </Head>
      {typePost === "post" && <PostComponent post={data.postBy} />}
      {typePost === "page" && (
        <Box maxW="64rem" mx="auto" p={4}>
          <Html2React html={data.postBy?.content || ""} />
        </Box>
      )}
    </Layout>
  );
};
export async function getServerSideProps({ params }: any) {
  const apolloClient = initializeApollo();
  console.log(params);

  await apolloClient.query({
    query: PostBySlugDocument,
    variables: {
      slug: params.slug as string,
    },
  });
  return addApolloState(apolloClient, {
    props: {},
  });
}
export default Post;
