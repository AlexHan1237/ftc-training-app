import { Col, Row, Image, Container } from "react-bootstrap";

function IntegrationDebugPage() {
    return (
        <Container>
            <h2>Test and Debug</h2>
            <h4>Step 1. Running Your TeleOp Program</h4>
            If you successfully built and installed your updated Android app with your new op mode, then you are ready to run 
            the op mode. Verify that the Driver Station is still connected to the Robot Controller. Since you designated that 
            your example op mode is a tele-operated op mode, it will be listed as a TeleOp op mode.<p/>

            On the Driver Station, use the TeleOp dropdown list control to display the list of available op modes. Select your 
            TeleOp (“MyFIRSTJavaOpMode”) from the list.<p/>

            <Image src={require("./img/debug_SelectMyFIRSTOpMode.jpg")} fluid width="40%"/> <p/>

            Press the “INIT” button to initialize the op mode.<p/>
            
            <Image src={require("./img/debug_MyFIRSTPushInit.jpg")} fluid width="40%"/> <p/>

            The op mode will execute the statements in the runOpMode method up to the waitForStart statement. It will then wait 
            until you press the start button (which is represented by the triangular shaped symbol) to continue.<p/>

            <Image src={require("./img/debug_PressStart.jpg")} fluid width="40%"/> <p/>

            Once you press the start button, the op mode will continue to iterate and send the “Status: Running” message to the 
            Driver Station. To stop the op mode, press the square-shaped stop button.<p/>

            <h4>Step 2. Testing and Debugging Your TeleOp </h4>
            Due to differences in wiring, you'll need to adjust the provided TeleOp program to match your local setup. Take the 
            time to review and understand each line of code, and make any necessary modifications. This will be a valuable 
            learning experience. Happy debugging! <p/>


            

 

        </Container >)
}

export default IntegrationDebugPage;