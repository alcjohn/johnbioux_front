import Head from "next/head";
import React from "react";
import Html2React from "../../components/Html2React";
import Layout from "../../components/layout/Layout";
import PostComponent from "../../components/PostComponent";
import { Box } from "@chakra-ui/react";
import { getAllPosts, getPostBySlug } from "../../lib/api";
interface IProps {
  post: any;
}

const Post: React.FC<IProps> = ({ post }) => {
  const typePost = post?.contentType?.node?.name;

  return (
    <Layout>
      <Head>
        <title>{post?.seo?.title}</title>
      </Head>
      {typePost === "post" && <PostComponent post={post} />}
      {typePost === "page" && (
        <Box maxW="64rem" mx="auto" p={4}>
          <Html2React html={post?.content || ""} />
        </Box>
      )}
    </Layout>
  );
};
export async function getStaticProps({ params }: any) {
  const post = await getPostBySlug(params.slug as string);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.edges.map(({ node }: any) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
}
export default Post;
