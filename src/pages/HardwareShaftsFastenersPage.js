import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareShaftsFastenersPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                </Col>
                <Col sm={8}>
                    <h4> Shafts </h4>
                    In mechanical engineering, a shaft is a rotating machine element, usually circular or polygonal in cross
                    section, which is used to transmit power from one part to another, or from a machine which produces power
                    to a machine which absorbs power. In FTC robots, due to the limited choice of DC motors, Hex-profiled shaft
                    is the primary choice. <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_Hex_Shafts.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Hex Shaft and Accessories </h4>
                    <strong>Hex Shaft</strong>: The cross section of this shaft is hexegonal.<p />
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/shaft_Collar.png")} fluid />
                </Col>
                <Col sm={8}>
                    <strong>Collar Fastener</strong>: The collar fastener is to limit the axial movement of the shaft. <p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_Hex_Shaft_Spacer.png")} fluid />
                </Col>
                <Col sm={8}>
                    <strong>Spacer</strong>: The inner cross section is hexegonal to match the shaft, and the outer profile is
                    circular to fit with a hole.<p/>
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_Hex_Flanged_Bearing.png")} fluid />
                </Col>
                <Col sm={8}>
                    <strong>Flanged Bearing</strong>: The inner cross-section is hexagonal to align with the shaft, while the
                    outer profile is circular to fit into a hole. Compared to a spacer, a flanged bearing offers significantly
                    better performance but comes at a higher cost.<p />
                </Col>
            </Row >


        </Container >)
}

export default HardwareShaftsFastenersPage;