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
      pl={6}
      pr={2}
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
      <Flex alignItems="center">
        <Flex as="nav" mr={4}>
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
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};
export default Header;
