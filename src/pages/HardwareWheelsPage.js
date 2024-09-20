import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareWheelsPage() {
    return (
        <Container>
            <h2> Wheels </h2>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/Traction-Wheel.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>1. Traction Wheels </h4>
                    These wheels are a much smaller version of the wheels on cars and also operate the same way. These wheels are good
                    at moving in one direction, particularly moving forwards. However, these wheels are unable to turn without rotating
                    the wheels themselves causing them to not be as used as the other two wheels listed. <p />
                    <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/Omni_Wheel.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>2. Omni Wheels </h4>
                    These wheels are similar to standard wheels but they are able to move not only forward and backward, but also
                    able to move left and right. This allows for greater precision and speed as the robot well be able to move left
                    or right without having to rotate the robot wheels itself. These wheels however lack the ability to move diagonally
                    in any direction which is why most teams use mecanum wheels. <p />
                    Omni Wheels have rollers mounted around the outside which passively rotate at 90 degrees to the powered
                    direction of the wheel. Omni Wheels can be used to make it easier to turn with skid steer robots or can
                    be used to make more advanced robot drive trains like kiwi drive. Omni Wheels can be double stacked to
                    create a continuous outside roller surface. <p />
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/Mecanum_Wheel.png")} fluid />
                    <Image src={require("./img/mecanum_diagram.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4>3. Mecanum Wheels </h4>
                    Mecanum wheels are often used in robotics competitions like FIRST Tech Challenge because they allow robots
                    to move in all directions, which can be helpful for navigating the competition's terrain. <p />

                    Mecanum wheels are made up of a central hub and a set of rollers mounted at an angle around the perimeter
                    of the wheel. Each roller is typically positioned at a 45-degree angle relative to the wheel’s axis. <p />

                    The rollers are arranged in a way that each roller’s axis is angled such that they form a cross pattern
                    when viewed from above. This angle is crucial for the wheels' omni-directional capabilities. By varying
                    the speeds and directions of each wheel independently, the robot can achieve complex movements such as
                    diagonal motion, precise positioning, and smooth rotations.<p />

                    The control algorithms for mecanum-wheeled robots can be complex, as they require precise coordination
                    of wheel speeds to achieve desired movements.<p />

                    The mecanum wheel offers advantages over the omni wheel when it comes to navigating bumps due to its 
                    car-like wheel arrangement, which provides better stability and weight distribution. This design helps 
                    maintain contact with the ground, making it more effective in uneven terrain.<p/>

                    However, omni wheels often have slimmer profiles, which can be beneficial in certain applications where 
                    space is a constraint. The narrower design of omni wheels can allow for tighter turns and more compact 
                    systems. Ultimately, the choice between the two depends on the specific requirements of the application, 
                    such as terrain conditions, space limitations, and maneuverability needs.<p/>
                </Col>
            </Row >



        </Container >)
}

export default HardwareWheelsPage;