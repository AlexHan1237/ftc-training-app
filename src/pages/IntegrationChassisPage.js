import { Col, Row, Image, Container } from "react-bootstrap";

function IntegrationChassisPage() {
    return (
        <Container>
            <h2>Robot Chassis</h2>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV-MecanumDrivetrain.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>1. What to build? </h4>
                    We'll be constructing a starter bot featuring a Mecanum drive train. Please purchase the hardware from
                    Rev Robotics at <a href="https://www.revrobotics.com/rev-45-2470/">this link</a>. All essential
                    information about the bot, including the Bill of Materials (BOM) and CAD model, is also available here. <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/CAD_Starter_Robot.PNG")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>2. CAD Design </h4>
                    You can view the bot in the OnShape web app at <a href="https://cad.onshape.com/documents/fe4ddc04acb2fe07e7615d35/w/99b93940e1575fb04acb47d4/e/f34759ef6ea954e463811068">
                        REV-45-2470 Onshape</a>. To see how different components fit together, you can toggle the visibility of parts.
                    The part-subassembly-assembly hierarchy in the OnShape model provides excellent guidance for assembling the components. <p />
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/motor-gear-kit.png")} fluid />
                    <Image src={require("./img/motor-transmission-90.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>3. Motor-Transmission Assembly </h4>
                    A HD Hex motor, a 4:1 planetary gearbox, a 5:1 planetary gearbox, and a 90-degree gearbox are combined
                    to achieve a 20:1 gear ratio and a 90-degree output angle. Please note that electrical wiring is not
                    included in the OnShape model. Be sure to connect the wiring before assembling the motor assembly onto
                    the C-Channel frames. <p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/mecanum-kit.png")} fluid />
                    <Image src={require("./img/mecanum-assembly.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>4. Mecanum Wheels Assembly </h4>
                    A Mecanum wheel, a hex shaft, a wheel-hex adapter, and a shaft stopper are assembled together to create
                    the wheel.<p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/starter_bot.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>5. Starter Bot Chassis Assembly </h4>
                    The four motor assemblies, four Mecanum wheel assemblies, two C-Channel frames, and two I-beam frames
                    are assembled using brackets and fasteners.<p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/starter_bot_full.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>6. Attaching Control Hub and Battery Pack </h4>
                    Select positions to mount the Control Hub and Battery Pack onto the chassis. In this setup, the Control 
                    Hub is attached to the middle I-beam, while the Battery Pack is secured to the rear I-beam. Cable wiring 
                    details will be covered in the next section.<p />
                </Col>
            </Row >

        </Container >)
}

export default IntegrationChassisPage;