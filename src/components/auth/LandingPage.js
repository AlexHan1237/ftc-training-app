import { useEffect, useState } from 'react';
//import { Grid, View, Button } from "@aws-amplify/ui-react";

import ReactPlayer from 'react-player';

import { Container, Button, Toast, ToastContainer } from 'react-bootstrap';



function LandingPage({ handleShowSplashChange }) {

  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => { setShowToast(!showToast); handleShowSplashChange(); }

  useEffect(() => {
    setTimeout(() => {
      handleShowSplashChange();
    }, 100000);
  }, []);

  return (
    <div style={{ height: "100vh", width: '100%' }}>
    {/* <Container style={{ display: 'flex', height: '100%', minHeight: '400px' }}> */}
    
        <ReactPlayer playing={true} loop={false} muted={true} url="https://www.youtube.com/embed/0QKHZENgOhA" width="100%"
          height="100%" />

      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <strong className="me-auto">Welcome to FTC Training Hub!</strong>
            <small>1 mins ago</small>
          </Toast.Header>
          <Toast.Body><p>This site presents a collection of FTC robotics resources for beginners. I hope it makes your 
            learning journey a little easier! 🙂</p>
            <p>Alexander Han</p>
            <Button onClick={toggleShowToast}>Skip Intro Video</Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default LandingPage;