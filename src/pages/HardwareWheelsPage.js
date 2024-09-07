import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareWheelsPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/spur_gears.gif")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Standard Wheels </h2>
                    These wheels are a much smaller version of the wheels on cars and also operate the same way. These wheels are good
                    at moving in one direction, particularly moving forwards. However, these wheels are unable to turn without rotating
                    the wheels themselves causing them to not be as used as the other two wheels listed. <p />
                     <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/gear_terms.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Omni Wheels </h2>
                    These wheels are similar to standard wheels but they are able to move not only forward and backward, but also
                    able to move left and right. This allows for greater precision and speed as the robot well be able to move left
                    or right without having to rotate the robot wheels itself. These wheels however lack the ability to move diagonally
                    in any direction which is why most teams use mecanum wheels. <p />
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/spur_gears.png")} fluid />
                    <Image src={require("./img/rack_pinion.webp")} fluid />
                    <Image src={require("./img/bevel_gears.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Mecanum Wheels </h2>
                    These wheels are what most teams use for their robots since these wheels are able to move in all directions.
                    This allows teams to be very precise with their movements and also very efficient with their movements. 
                    These wheels are the most expensive of the wheels listed but grant the most rewards and are overall the best
                    wheels for robotics. <p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_Ultraplanetary.webp")} fluid /> 
                    <Image src={require("./img/REV_Ultra90DegreeGearbox.webp")} fluid /> 
                </Col>
                <Col sm={8}>.
                </Col>
            </Row >
 

        </Container >)
}

export default HardwareWheelsPage;