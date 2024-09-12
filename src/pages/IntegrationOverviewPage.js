import { Col, Row, Image, Container } from "react-bootstrap";

function IntegrationOverviewPage() {
    return (
    <Container>
        <h2> Hands-on Exceise Overview </h2>
        In the previous two chapters, we covered the fundamental hardware and software components used in FTC 
        robotics. In this chapter, we'll assemble a simple robot that's ready for FTC competition. We'll start by 
        putting together the robot chassis, attaching the motors, and fitting the wheels. Next, we'll connect the 
        robot controller, an on-off switch, and a battery pack to the chassis. We'll then write a short program 
        called TeleOp using Android Studio on a Windows PC, which will control the motors based on the operator's 
        inputs or autonomous commands. This TeleOp program will be downloaded to the controller. Next, we'll set up 
        an operator console and link it to the controller. Finally, we'll debug and test our robot 
        to ensure everything works as expected.
        

    </Container>)
}

export default IntegrationOverviewPage;