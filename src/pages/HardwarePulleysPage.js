import { Col, Row, Image, Container } from "react-bootstrap";

function HardwarePulleysPage() {
    return (
        <Container>
            <h2>Cable and Pulley Systems</h2>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/pulley.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> What Is A Cable and Pulley System? </h4>
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
                    <h4> Cascade Lift </h4>
                    One significant application of the cable and pulley system in FTC robotics is in the Cascade linear motion 
                    mechanism. As shown in the diagram, the input consists of a motorized pulley (shown in violet) and two 
                    cables—red and blue. The red cable is wrapped around the green idle pulley at the base runway. One end of 
                    the red cable is anchored to the violet pulley, while the other end is attached to the lower pin of the 
                    yellow slider. The blue cable, on the other hand, is wrapped around the green idle pulley of the yellow 
                    slider. One end of the blue cable is fixed to the lower pin of the base runway, and the other end connects 
                    to the lower pin of the blue slider. <p/>

                    The motor pulls the sliders upward, though the mechanism for holding them in position isn’t depicted here. 
                    The sliders descend due to gravity or a contraction spring. Notably, the blue slider moves at twice the 
                    speed of the yellow slider.<p/>
                </Col>
            </Row >



        </Container >)
}

export default HardwarePulleysPage;