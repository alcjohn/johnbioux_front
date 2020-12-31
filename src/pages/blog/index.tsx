import React from "react";
import Layout from "../../components/layout/Layout";
import { Box } from "@chakra-ui/react";
import ListPosts from "../../components/ListPosts";
import { getAllPosts } from "../../lib/api";

const Posts: React.FC = ({ posts }: any) => {
  return (
    <Layout>
      <Box maxW="64rem" mx="auto" p={4}>
        <Box fontSize="2xl" as="h1" mb={5}>
          Derniers articles
        </Box>
        <ListPosts posts={posts} />
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
export default Posts;
