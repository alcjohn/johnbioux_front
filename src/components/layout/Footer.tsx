import {
  Flex,
  List,
  ListItem,
  Link,
  ListItemProps,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { NextChakraLink } from "../ChakraLink";

interface FooterProps {}

interface LinkItemProps {
  href: string;
}
const LinkItem: React.FC<LinkItemProps & ListItemProps> = ({
  href,
  children,
  ...props
}) => (
  <ListItem {...props}>
    <Link
      href={href}
      isExternal
      textTransform="uppercase"
      fontSize={{ base: "sm", md: "md", lg: "lg" }}
    >
      {children}
    </Link>
  </ListItem>
);

const Footer: React.FC<FooterProps> = ({}) => {
  const year = dayjs().format("YYYY");
  return (
    <Flex
      as="footer"
      p={6}
      flexDirection={{
        base: "column",
        md: "row",
      }}
    >
      <List
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent={{
          base: "center",
          md: "flex-start",
        }}
      >
        <LinkItem mr={4} href="mailto:john.bioux@gmail.com">
          Mail
        </LinkItem>
        <LinkItem mr={4} href="https://www.linkedin.com/in/john-bioux/">
          linkedin
        </LinkItem>
        <LinkItem href="https://github.com/alcjohn/">github</LinkItem>
      </List>
      <Flex justifyContent="center" alignItems="center">
        <Text as="small" fontSize="xs">
          Copyright &copy; {year}, John Bioux - Tous droits réservés
        </Text>
      </Flex>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent={{
          base: "center",
          md: "flex-end",
        }}
      >
        <NextChakraLink fontSize="xs" href="/mention-legales">
          Mention légales
        </NextChakraLink>
      </Flex>
    </Flex>
  );
};
export default Footer;
