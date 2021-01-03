import Head from "next/head";
import React from "react";
import Html2React from "../components/Html2React";
import Layout from "../components/layout/Layout";
import PostComponent from "../components/PostComponent";
import { Box } from "@chakra-ui/react";
import { getAllSlugs, getContentBySlug } from "../lib/api";
interface IProps {
  content: any;
}

const Post: React.FC<IProps> = ({ content }) => {
  const typePost = content?.contentType?.node?.name;
  console.log(content.seo);
  return (
    <Layout>
      <Head>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.metaDesc} />
        <script type="application/ld+json">{content.seo.schema.raw}</script>
      </Head>
      {typePost === "post" && <PostComponent post={content} />}
      {typePost === "page" && (
        <Box maxW="64rem" mx="auto" p={4}>
          <Html2React html={content?.content || ""} />
        </Box>
      )}
    </Layout>
  );
};
export async function getStaticProps({ params }: any) {
  const content = await getContentBySlug(params.slug as string);
  return {
    props: {
      content,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.edges.map(({ node }: any) => `/${node.slug}`) || [],
    fallback: false,
  };
}
export default Post;
