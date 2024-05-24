import { Authenticator, Flex, Grid, Image, useTheme, View, Text, Heading, Button, useAuthenticator } from "@aws-amplify/ui-react";

import ReactPlayer from 'react-player';
import Header from "./SignInLogo";
import Footer from "./SignInCopyright";
import SignInHeader from "./SignInHeader";
import SignInFooter from "./SignInFooter";

const components = {
  Header,
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter
  },
  Footer
};

// const components = {
//   Header() {
//     const { tokens } = useTheme();

//     return (
//       <View textAlign="center" padding={tokens.space.large}>
//         <Image
//           alt="Amplify logo"
//           src="/img/mechatronics1.png"
//         />
//       </View>
//     );
//   },

//   Footer() {
//     const { tokens } = useTheme();

//     return (
//       <View textAlign="center" padding={tokens.space.large}>
//         <Text color={tokens.colors.neutral[80]}>
//           &copy; All Rights Reserved
//         </Text>
//       </View>
//     );
//   },

//   SignIn: {
//     Header() {
//       const { tokens } = useTheme();

//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Sign in to your account
//         </Heading>
//       );
//     },
//     Footer() {
//       const { toForgotPassword } = useAuthenticator();

//       return (
//         <View textAlign="center">
//           <Button
//             fontWeight="normal"
//             onClick={toForgotPassword}
//             size="small"
//             variation="link"
//           >
//             Reset Password
//           </Button>
//         </View>
//       );
//     },
//   },

//   SignUp: {
//     Header() {
//       const { tokens } = useTheme();

//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Create a new account
//         </Heading>
//       );
//     },
//     Footer() {
//       const { toSignIn } = useAuthenticator();

//       return (
//         <View textAlign="center">
//           <Button
//             fontWeight="normal"
//             onClick={toSignIn}
//             size="small"
//             variation="link"
//           >
//             Back to Sign In
//           </Button>
//         </View>
//       );
//     },
//   },
//   ConfirmSignUp: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   SetupTotp: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   ConfirmSignIn: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   ForgotPassword: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
//   ConfirmResetPassword: {
//     Header() {
//       const { tokens } = useTheme();
//       return (
//         <Heading
//           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
//           level={3}
//         >
//           Enter Information:
//         </Heading>
//       );
//     },
//     Footer() {
//       return <Text>Footer Information</Text>;
//     },
//   },
// };

function LandingPage() {
  const { tokens } = useTheme();

  return (
    <Grid templateColumns={{ base: "1fr 0", medium: "1fr 4fr" }}>
      <Flex
        backgroundColor={tokens.colors.background.secondary}
        justifyContent="center"
      >
        <Authenticator components={components}>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </Flex>
      <View height="100vh">
        {/* <Image
            src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTYzNzE5MzE2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
            width="100%"
            height="100%"
            objectFit="cover"
          /> */}
        {/* <iframe width="866" height="487" src="https://www.youtube.com/embed/0QKHZENgOhA" title="FTC Team #16021 Techno Maniacs CENTERSTAGE Robot Reveal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <ReactPlayer playing = {true} loop = {true} muted = {true} url = "https://www.youtube.com/embed/0QKHZENgOhA" width="100%"
            height="100%"/>
      </View>
    </Grid>
  );
}

export default LandingPage;