import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Switch, IconButton } from "@chakra-ui/react";
import React from "react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={
        isDark ? "Change pour le mode sombre" : "Change pour le mode lumineux"
      }
      onClick={toggleColorMode}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
    />
  );
  return (
    <Switch
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
