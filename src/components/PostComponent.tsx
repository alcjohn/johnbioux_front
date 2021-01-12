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
import { motion } from "framer-motion";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { FRONT_URL } from "../url";
import Html2React from "./Html2React";

const BoxAnimated = motion.custom(Img);
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
        <BoxAnimated
          layoutId={`image${post.id}`}
          loading="lazy"
          src={image.sourceUrl!}
          srcSet={image.srcSet!}
          alt={image?.altText || undefined}
          sizes={image.sizes || undefined}
          htmlWidth="768px"
          htmlHeight="424px"
        />
      )}
      <Html2React html={post.content || ""} />
      <Divider />
      <Flex justifyContent="flex-end" alignItems="center">
        <Text>Partager sur : </Text>
        <Wrap spacing={2} p={2}>
          <WrapItem>
            <FacebookShareButton url={`${FRONT_URL}/${post.slug}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </WrapItem>
          <WrapItem>
            <TwitterShareButton url={`${FRONT_URL}/${post.slug}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </WrapItem>
          <WrapItem>
            <LinkedinShareButton url={`${FRONT_URL}/${post.slug}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </WrapItem>
        </Wrap>
      </Flex>
    </Box>
  );
};
export default PostComponent;
