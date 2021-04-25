import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  keyframes,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { FRONT_URL } from '../url';
import Html2React from './Html2React';
import Image from 'next/image';

interface PostComponentProps {
  post: any;
}

const anim = keyframes`
	0% {
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
`;
const animImg = keyframes`
0%{
	transform: translateY(20%);
	opacity: 0
}
75%{
	opacity: 0.5;
	transform: translateY(0);
}
100%{
	opacity: 1;
}`;

const animationText = `${anim} 0.5s linear 0.2s both`;
const animationImg = `${animImg} 0.3s linear`;

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
  if (!post) {
    return null;
  }
  const image = post.featuredImage?.node;
  return (
    <Box mx="auto" maxW="760px" px={4}>
      <Heading
        animation={animationText}
        as="h1"
        fontFamily="roboto"
        color="primary.500"
      >
        {post.title}
      </Heading>
      <Box animation={animationText} mb={8} fontSize="sm">
        {dayjs(post.date || '').format('DD MMMM YYYY')}
      </Box>
      {image && (
        // <Img
        //   animation={animationImg}
        //   loading="lazy"
        //   src={image.sourceUrl!}
        //   srcSet={image.srcSet!}
        //   alt={image?.altText || undefined}
        //   sizes={image.sizes || undefined}
        //   htmlWidth="768px"
        //   htmlHeight="424px"
        //   minW="100%"
        // />
        <Image src={image.sourceUrl!} width={768} height={424} />
      )}
      <Box animation={animationText}>
        <Html2React html={post.content || ''} />
      </Box>
      <Divider />
      <Flex alignItems="center">
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
