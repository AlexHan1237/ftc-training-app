import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareBearingsPage() {
    return (
        <Container>
            <h2> Bearings </h2>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/ball_bearing.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>1. What Are Bearings? </h4>
                    A mechanical bearings facilitate rotational or linear movement between two parts while reducing friction and
                    wear. Bearings support radial and axial loads, which are the forces exerted perpendicular to and along the axis of
                    rotation, respectively. They are crucial in many machines and devices, from household appliances and vehicles
                    to industrial machinery and aerospace equipment.<p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/roller_bearing.jpg")} fluid />
                    <Image src={require("./img/thrust_bearing.jpg")} fluid />
                    <Image src={require("./img/sleeve_bearing.jpg")} fluid />
                    <Image src={require("./img/linear_bearing.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>2. Bearing Types </h4>
                    <strong>Ball Bearings</strong>: These use spherical balls to maintain separation between the bearing races,
                    reducing friction and allowing smooth rotation. They are commonly used in applications where precision and
                    speed are essential.<p />

                    <strong>Roller Bearings</strong>: These use cylindrical rollers instead of balls. They can handle heavier
                    loads and are often used in applications where there is significant radial load.<p />

                    <strong>Thrust Bearings</strong>: Designed to handle axial loads, these bearings support forces along the
                    axis of rotation. They are used in applications like automotive engines and industrial machinery.<p />

                    <strong>Sleeve Bearings</strong>: These are the simplest type, consisting of a smooth surface without rolling
                    elements. They are used in applications where high speeds and loads are not critical. This is a very common
                    bearing type in FTC robots<p />

                    <strong>Linear Bearings</strong>: These bearings has a rolling element that helps to support a load and
                    provide precise, low-friction linear motion. Since FTC robots must do linear motions to pick up and place
                    game pieces, linear bearings are quite common.<p />
                </Col>
            </Row >

        </Container >)
}

export default HardwareBearingsPage;