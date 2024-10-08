import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareFramesPage() {
    return (
        <Container>
            <h2> Structure and Frame </h2>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_Starter_Kit.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Structural Components </h4>
                    The robot design is a complext project with multiple parts and systems to be integrated coherently.
                    But, it starts with the STRUCTURE design, the framework to which all other robot parts are attached.
                    The REV FTC Starter Kit, which is a 15mm building system that provides over 1400 parts, is a great way
                    to start building the mechanisms of an FTC robot that is ready to drive. It has three main structural
                    components: Extrusion, Channel, and bracket.<p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/extrusion.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Extrusions </h4>
                    REV Extrusion is a rectangular structure rail with slots for M3 hardware on all four sides. <p />
                    <ul class="simple">
                        <li>Slots allow for brackets to be placed anywhere </li>
                        <li>Adjust design with ease</li>
                        <li>Smaller profile and less weight than Channel</li>
                        <li>Good for arms, lifts, manipulators, linear motion, and mechanisms</li>
                        <li>Accepts standard M3 hex head screws</li>
                    </ul>
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/channel.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Channels </h4>
                    REV Channels are larger structural member featuring the Extended Motion Pattern for actuators,
                    brackets, and other elements to be placed at set intervals.<p />

                    <ul>
                        <li>Extended Motion Pattern</li>
                        <li>Fixed pattern of mounting holes</li>
                        <li>Locations for mounting structure, gears, sprockets, bearing, shafts, motors, and servos available every 16mm</li>
                        <li>Heavier and more rigid than Extrusion</li>
                        <li>Good for building drivetrains</li>
                        <li>Accepts standard M3 hex head screws</li>
                    </ul>

                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/brackets.png")} fluid />
                    <Image src={require("./img/M3_Hardware.png")} fluid />

                </Col>
                <Col sm={8}>
                    <h4> Brackets and Fasteners </h4>
                    REV brackets are designed to connect the structural extrusions and channels in many different ways. <p />
                    REV 3mm fasteners are used in all structures. Special fastener shapes are included for linear motion support. <p />
                </Col>
            </Row >


        </Container >)
}

export default HardwareFramesPage;