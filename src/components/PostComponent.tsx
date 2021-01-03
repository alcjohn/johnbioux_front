import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import Html2React from "./Html2React";

interface PostComponentProps {
  post: any;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  if (!post) {
    return null;
  }
  const image = post.featuredImage?.node;
  return (
    <Box mx="auto" maxW="760px" px={4}>
      <Heading as="h1" fontFamily="roboto" color="primary.500">
        {post.title}
      </Heading>
      <Box mb={8} fontSize="sm">
        {dayjs(post.date || "").format("DD MMMM YYYY")}
      </Box>
      {image && (
        <Img
          loading="lazy"
          src={image.sourceUrl!}
          srcSet={image.srcSet!}
          alt={image?.altText || undefined}
          sizes={image.sizes || undefined}
          width="728px"
          height="422px"
        />
      )}
      <Html2React html={post.content || ""} />
      <Divider />
      <Flex justifyContent="flex-end" alignItems="center">
        <Text>Partager sur : </Text>
        <Wrap spacing={2} p={2}>
          <WrapItem>
            <FacebookShareButton url="https://johnbioux.fr">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </WrapItem>
          <WrapItem>
            <TwitterShareButton url="https://johnbioux.fr">
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </WrapItem>
          <WrapItem>
            <LinkedinShareButton url="https://johnbioux.fr">
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </WrapItem>
        </Wrap>
      </Flex>
    </Box>
  );
};
export default PostComponent;
