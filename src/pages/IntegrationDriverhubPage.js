import { Col, Row, Image, Container } from "react-bootstrap";

function IntegrationDriverhubPage() {
    return (
        <Container>
            <h2>Driver Hub</h2>
            <h4>1. Setting up Driver Hub</h4>
            When the Driver Hub is first powered up, or a factory reset is performed, an initial set up process is needed. 
            Start by selecting next on the main screen to continue. Step-by-step instructions to set up the Driver Hub 
            can be found <a href="https://docs.revrobotics.com/duo-control/driver-hub-gs">HERE</a>. Note that:
            <ul>
                <li>Before continuing to set up the Driver Hub allow the battery to charge over USB-C or keep the Driver 
                    Hub plugged into a power source during set up.</li>
                <li>Select the Update All button to start the download and installation of software updates for the Driver Hub.</li>
                <li>The Control Hub should be ON during the Driver Hub setup process.</li>
            </ul>
            <Image src={require("./img/driver_hub_ui.png")} fluid width="40%"/> <p/>
 
            <h4>2. Connecting Gamepads</h4>
            The Driver Station Application allows for the connection of two gamepads. When working with the Driver Hub these 
            gamepads can be plugged into any of the three USB 2.0 ports. Once the gamepads are plugged in, you will need 
            to initialize them. Detailed instruction for connecting and initializing the Gamepads can be found <a href="https://docs.revrobotics.com/duo-control/driver-hub-gs#connecting-gamepads">
            HERE</a>. <p/>
            <Image src={require("./img/gamepads.png")} fluid width="40%"/> <p/>

        </Container >)
}

export default IntegrationDriverhubPage;