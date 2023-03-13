import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

type Props = {};

const ColorModeSwitch = (props: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">黑暗模式</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
