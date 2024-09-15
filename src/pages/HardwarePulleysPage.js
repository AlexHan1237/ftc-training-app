import { Col, Row, Image, Container } from "react-bootstrap";

function HardwarePulleysPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/pulley.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Cable and Pulley System </h4>
                    A cable and pulley system is a mechanical arrangement that uses cables, ropes, or belts and pulleys to transmit
                    force and movement. This system is commonly used to lift or move loads more efficiently by changing the direction
                    of the applied force and distributing the load. Pulleys are wheels with a groove around their circumference,
                    through which a rope, cable, or belt runs. Since FTC robots need to reach out as far as 3-times its base size,
                    some kind of cable and pulleys system is very common in the robot arm design <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/telescopic_rigging.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Telescopic Linear Motion </h4>
                    <strong>Input</strong>: motor pulley (in violet).<p />
                    There are two cables, red and blue. The red cable is wrapped around the green idle pulley of the base runway. 
                    One end of the red cable is fixed to the violet pulley. The other end of the red cable is fixed to lower pin 
                    of the yellow slider. The blue cable is wrapped around the green idle pulley of the yellow slider. One end 
                    of the blue cable is fixed to lower pin of the base runway. The other end of the blue cable is fixed to 
                    lower pin of the blue slider.<p />
                    The motor pulls the sliders up. The device to keep the sliders at up positions is not shown. The sliders 
                    move down thanks to the gravity or contraction spring. The blue slider moves twice as fast as the yellow 
                    slider. <p />
                </Col>
            </Row >



        </Container >)
}

export default HardwarePulleysPage;