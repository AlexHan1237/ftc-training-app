import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

function SignInLogo() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
        src="img/logo.jpg"
        padding={tokens.space.medium}
      />
    </Flex>
  );
}

export default SignInLogo;