import { AspectRatio, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { usePostsQuery } from "../generated/graphql";
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

const ListPosts: React.FC = ({}) => {
  const { data } = usePostsQuery();
  return (
    <SimpleGrid spacing={10} columns={[1, 2, 3]}>
      {data?.posts?.nodes?.map((item) => {
        if (!item) {
          return;
        }
        const { title, featuredImage, seo, categories, id, slug } = item;
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
            <Link href={slug || "/"}>
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
                <NextChakraLink href={slug || "/"}>{title}</NextChakraLink>
              </Box>
            </Box>
            <Box flex={1} px={4} py={2}>
              <Text noOfLines={3} color="gray.500">
                {seo?.metaDesc}
              </Text>
            </Box>
            <Box px={4} py={2}>
              {categories?.nodes?.map((item) => {
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
