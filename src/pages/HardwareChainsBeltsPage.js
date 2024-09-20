import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareChainsBeltsPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/belt_and_chain.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Chains and Belts </h4>
                    Chains and belts are both mechanical drives that transmit power from one location to another. They can 
                    be used in many applications, including garage door openers, bicycles, and engines. Almost all FTC robots 
                    use one of them. In general, belts are easier to work with but is limited by the maximum stregth, while chains 
                    are good at heavy duty cases but weight more.  <p/>
                </Col>
            </Row >
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/belts.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Chains </h4>
                    The links of a chain interfere with the teeth of a sprocket to create driving tension. Chains can be 
                    stronger than belts, but their mass increases inertia in the drive train. They also have lower frictional 
                    losses than belts, which often rely on friction to transfer motion. Chains are a good choice for conveyor 
                    transmissions or developing torque, and can be used with a variety of sprocket ratios to achieve different 
                    speeds. <p/>
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/chains.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Belts </h4>
                    Belts derive their driving force from friction between the belt and pulley surfaces. Belts can handle 
                    high speeds smoothly and are a good choice for HVAC applications, where air movement systems often 
                    require high volume airflow. Because belts are friction drives, they will slip if there is an overload, 
                    which can help prevent damage to the system.<p/>
                </Col>
            </Row >
        </Container >)
}

export default HardwareChainsBeltsPage;