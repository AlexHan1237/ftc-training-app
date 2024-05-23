import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image alt="logo" src="/img/mechatronics1.png" padding={tokens.space.medium} />
    </Flex>
  );
}

export default Header;