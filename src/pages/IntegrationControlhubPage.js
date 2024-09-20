import { Col, Row, Image, Container } from "react-bootstrap";

function IntegrationControlhubPage() {
    return (
        <Container>
            <h2> Control Hub </h2>
            The REV Control Hub is an affordable robotics controller providing a platform for the interfaces required
            for building robots. The Control Hub works with the Expansion Hub and Driver Hub to create a complete
            robotics control system for the Challenge (FTC) competition.  <p />

            <h4>1. Required Materials</h4>
            <ul>
                <li>Control Hub (<a href="https://www.revrobotics.com/rev-31-1595/">REV-31-1595</a>)</li>
                <li>12v Slim Battery (<a href="https://www.revrobotics.com/rev-31-1302/">REV-31-1302</a>)</li>
                <li>Driver Hub (<a href="https://www.revrobotics.com/rev-31-1596/">REV-31-1596</a>)</li>
                <li>Gamepad (<a href="https://www.revrobotics.com/rev-31-2983/">REV-31-2983</a>)</li>
                <li>Expansion Hub (<a href="https://www.revrobotics.com/rev-31-1153/">REV-31-1153, optional for this hands-on excise</a>)</li>
                <li>JST PH 3-pin Communication Cable (included with Expansion Hub)</li>
                <li>USB A to USB C (included with Control Hub)</li>
                <li>XT30 Extension Cable (included with Expansion Hub)</li>
                <li>Windows PC running the REV Hardware Client</li>
                <p />
            </ul>

            <h4>2. Connect PC to the Robot Controller Console</h4>
            In order to manage the Control Hub (REV-31-1595) or programming using the onboard programming languages, a
            computer or other Wi-Fi enabled device will need to connect to the Control Hub's Robot Controller Console. The
            Robot Control Console is a local network created by the Control Hub to program and manage the device. Step-by-step
            intructions can be found at <a href="https://docs.revrobotics.com/duo-control/control-hub-gs/connect-to-the-control-hub-robot-control-console">
                HERE</a>. Note that the FTC SDK version installed on the Android Studio MUST match the Control Hub firmware version.
            I had to spent hours to debug a non-running TeleOp, and it turned out that my firmware needed an upgrade!<p />

            <h4>3. Connecting Driver Station to Control Hub</h4>
            The Control Hub (REV-31-1595) needs to be paired with remote control device - Driver Hub (REV-31-1596) - to form
            a local wifi network. The Driver Hub is connected with Gamepads(REV-31-2983) and human drivers use the gamepads to
            drive the bot. Step-by-step
            intructions can be found at <a href="https://docs.revrobotics.com/duo-control/control-hub-gs/driver-station-pairing-to-control-hub">
                HERE</a>.<p />

            <h4>4. Wiring Diagram</h4>
            Before programming your Control Hub, devices must be connected to the Control Hub. Below is a wiring diagram to
            connect the Mecanum Wheels, the Battery Pack, and the Control Hub.  <p />

            <Image src={require("./img/starter_bot_wiring_diagram.png")} fluid width="40%" /><p />

        </Container >)
}

export default IntegrationControlhubPage;