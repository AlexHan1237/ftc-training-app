import { useState } from 'react';
import { Grid, View,  } from "@aws-amplify/ui-react";

import ReactPlayer from 'react-player';

import {Toast, ToastContainer} from 'react-bootstrap';



function LandingPage() {

  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);



  return (
    
    <Grid templateColumns={{ base: "1fr", medium: "1fr" }}>
      <View height="100vh">
      
        <ReactPlayer playing = {true} loop = {false} muted = {true} url = "https://www.youtube.com/embed/0QKHZENgOhA" width="100%"
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