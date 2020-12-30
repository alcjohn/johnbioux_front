import React from "react";
import { PostsDocument } from "../generated/graphql";
import { addApolloState, initializeApollo } from "../lib/apollo";
import Layout from "../components/layout/Layout";
import { Box } from "@chakra-ui/react";
import ListPosts from "../components/ListPosts";

const Posts: React.FC = ({}) => {
  return (
    <Layout>
      <Box maxW="64rem" mx="auto" p={4}>
        <Box fontSize="2xl" as="h1" mb={5}>
          Derniers articles
        </Box>
        <ListPosts />
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PostsDocument,
  });
  return addApolloState(apolloClient, {
    props: {},
  });
}
export default Posts;
