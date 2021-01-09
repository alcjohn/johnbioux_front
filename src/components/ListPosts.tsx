import {
  AspectRatio,
  Box,
  Flex,
  Img,
  keyframes,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { NextChakraLink } from "./ChakraLink";

const fade = keyframes`
  0%{
    transform: translateY(100px);
    opacity: 0
  }
  75%{
    opacity: 0.5;
    transform: translateY(0);
  }
  100%{
    opacity: 1;
  }
`;
const bezier = "cubic-bezier(.43,.13,.23,.96)";
interface ITagProps {
  name: string;
}
const TagItem: React.FC<ITagProps> = ({ name }) => (
  <NextChakraLink
    href="/"
    bg="primary.500"
    px={3}
    py={1}
    fontWeight="bold"
    color="white"
    borderRadius="2xl"
    display="inline-block"
    m={1}
  >
    {name}
  </NextChakraLink>
);

const ListPosts: React.FC<{ posts: any }> = ({ posts }) => {
  return (
    <SimpleGrid spacing={10} columns={[1, 2, 3]}>
      {posts?.edges?.map((item: any, index: number) => {
        if (!item?.node) {
          return;
        }
        const {
          title,
          featuredImage,
          excerpt,
          categories,
          id,
          slug,
        } = item?.node;
        return (
          <Flex
            key={id}
            overflow="hidden"
            bg="white"
            color="bgPrimary"
            borderRadius="md"
            shadow="lg"
            flexDir="column"
            animation={`${fade} 0.5s ${bezier} ${0.1 * index}s`}
          >
            <Link href={`/${slug}`}>
              <a>
                <AspectRatio ratio={16 / 9}>
                  <Img
                    src={featuredImage?.node?.sourceUrl || undefined}
                    srcSet={featuredImage?.node?.srcSet || undefined}
                    alt={featuredImage?.node?.altText || undefined}
                    sizes={featuredImage?.node?.sizes || undefined}
                  />
                </AspectRatio>
              </a>
            </Link>
            <Box px={4} py={2}>
              <Box as="h2" fontSize="xl" fontWeight="bold">
                <NextChakraLink href={`/${slug}`}>{title}</NextChakraLink>
              </Box>
            </Box>
            <Box flex={1} px={4} py={2}>
              <Text
                noOfLines={3}
                color="gray.500"
                dangerouslySetInnerHTML={{ __html: excerpt || "" }}
              />
            </Box>
            <Box px={4} py={2}>
              {categories?.nodes?.map((item: any) => {
                if (!item?.name) {
                  return;
                }
                return <TagItem key={item.id} name={item.name} />;
              })}
            </Box>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};
export default ListPosts;
