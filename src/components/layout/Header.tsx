import { Flex, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { NextChakraLink } from "../ChakraLink";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex
      h={12}
      as="header"
      justifyContent="space-between"
      alignItems="center"
      mx={6}
    >
      <NextChakraLink
        href="/"
        textTransform="uppercase"
        fontSize={{
          base: "md",
          md: "xl",
        }}
      >
        John Bioux
      </NextChakraLink>
      <DarkModeSwitch />
      <Flex as="nav">
        <List justifyContent="center">
          <ListItem>
            <NextChakraLink
              href="/blog"
              textTransform="uppercase"
              fontSize={{
                base: "md",
                md: "xl",
              }}
            >
              Blog
            </NextChakraLink>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};
export default Header;
