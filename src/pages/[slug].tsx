import Head from 'next/head';
import React from 'react';
import Html2React from '../components/Html2React';
import Layout from '../components/layout/Layout';
import PostComponent from '../components/PostComponent';
import { Box } from '@chakra-ui/react';
import { getAllSlugs, getContentBySlug } from '../lib/api';
import { NextSeo } from 'next-seo';
interface IProps {
  content: any;
}

const Post: React.FC<IProps> = ({ content }) => {
  const typePost = content?.contentType?.node?.name;
  return (
    <Layout>
      <NextSeo
        title={content?.seo?.title}
        description={content?.seo?.metaDesc}
        openGraph={{
          url: content?.seo?.opengraphUrl,
          description: content?.seo?.opengraphDescription,
          images: [{ url: content?.featuredImage?.node?.sourceUrl }],
          type: content?.seo?.opengraphType,
          site_name: content?.seo?.opengraphSiteName,
        }}
      />
      <Head>
        {content?.seo?.schema?.raw && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: content.seo.schema.raw }}
          />
        )}
      </Head>
      {typePost === 'post' && <PostComponent post={content} />}
      {typePost === 'page' && (
        <Box maxW="64rem" mx="auto" p={4}>
          <Html2React html={content?.content || ''} />
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
