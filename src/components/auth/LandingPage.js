import { useState } from 'react';
import { Authenticator, Flex, Grid, useTheme, View,  } from "@aws-amplify/ui-react";

import ReactPlayer from 'react-player';
import Header from "./SignInLogo";
import Footer from "./SignInCopyright";
import SignInHeader from "./SignInHeader";
import SignInFooter from "./SignInFooter";

import {Toast, ToastContainer} from 'react-bootstrap';

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

  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);



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
      
        <ReactPlayer playing = {true} loop = {true} muted = {true} url = "https://www.youtube.com/embed/0QKHZENgOhA" width="100%"
            height="100%"/>
        
      </View>
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>            
            <strong className="me-auto">FTC TrainingHub</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body><p>Welcome to FTC Training Hub!</p>
          <p>Please login to start learning everything about FTC robotics!</p>
          </Toast.Body>
        </Toast>
        </ToastContainer>
    </Grid>
  );
}

export default LandingPage;