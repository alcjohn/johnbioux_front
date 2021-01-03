import { AspectRatio, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { NextChakraLink } from "./ChakraLink";
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
      {posts?.edges?.map((item: any) => {
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
          >
            <Link href={`/${slug}`}>
              <a>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={featuredImage?.node?.sourceUrl || undefined}
                    srcSet={featuredImage?.node?.srcSet || undefined}
                    alt=""
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
                return <TagItem name={item.name} />;
              })}
            </Box>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};
export default ListPosts;
