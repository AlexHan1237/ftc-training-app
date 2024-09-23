import { Image, Container } from "react-bootstrap";

function TradeoffsChassisPage() {
    return (
        <Container>
            <h2>Chassis Design</h2>
            <h4>Drive Train Design</h4>
            <strong>Mecanum Wheels</strong>: Use Mecanum Wheels to allow for smooth movement in any direction. This can
            help with maneuverability in tight spaces during matches. Even though the FTC game rules changing every year, 
            the Mecanum Wheels drive train seems to be a good choice. One can refer to the Hands-on Excise chapter for a 
            reference implementation.<p />

            <h4>Chassis</h4>
            While the drive train will likely remain unchanged, the robot chassis may need adjustments based on the <strong>space
            </strong> and <strong>center of gravity</strong> requirements for the intake system, game piece conveyor 
            system, and placement system. Specifically, the positions of the I-beams can be adjusted, and additional 
            I-beams or extrusions can be added to provide better support for the upper structures. In some cases, 
            the 90-degree gearboxes may also be removed. Here is an example: <p/>

            <Image src={require("./img/TO_chassis_alt.jpg")} fluid width="40%"/> <p/>



        </Container >)
}

export default TradeoffsChassisPage;