import { Col, Row, Image, Container } from "react-bootstrap";

function TradeoffsIntakePage() {
    return (
        <Container>
            <h2>Intake System</h2>
            Intakes can take many forms. You can brainstorm some concepts and put them through the engineering design 
            process to help your team to decide on an intake that met your game play requirements.<p/>

            <h4>System Requirements</h4>
            1. Touch it, own it - Be able to quickly intake and control the game piece;<br/>
            2. Adaptable - Be able to pick up all the piece in different orientations;<br/>
            3. Pick up one - reduces the chances of jamming the passway;<br/>
            4. Release it - be able to outtake the game piece with ease;<p/>

            <h4>Common Intake Mechanisms</h4>
            In general, the Intake system can use one of the following two mechanisms:<p/>
            1. <strong>Sweepers Mechanism</strong>: A motor drives a roller equipped with flexible extensions to capture 
            and transport game pieces into the storage area. The sweepers can be configured either as a sideways roller 
            or as a top roller.<p/>
            <Image src={require("./img/TO_sideway_intake.jpg")} fluid width="40%"/> 
            <Image src={require("./img/TO_toproller_intake.webp")} fluid width="40%"/> <p/>

            2. <strong>Gripper Mechanism</strong>: The gripper mechanism can vary significantly depending on the application 
            and the types of objects it needs to handle. In FTC robotics, common types include Parallel Grippers, which 
            feature two fingers moving in parallel, and Angular Grippers, where the fingers open and close at an angle. It's 
            important to note that since the gripper system can manage game pieces, unlike the Sweeper Mechanism, the storage 
            system may become optional. <p/>
            <Image src={require("./img/TO_parallel_gripper.jpg")} fluid width="40%"/> 
            <Image src={require("./img/TO_angular_gripper.jpg")} fluid width="40%"/> <p/>



        </Container >)
}

export default TradeoffsIntakePage;