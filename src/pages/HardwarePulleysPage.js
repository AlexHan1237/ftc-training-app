import { Col, Row, Image, Container } from "react-bootstrap";

function HardwarePulleysPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/spur_gears.gif")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Cable and Pulley System </h2>
                    A cable and pulley system is a mechanical arrangement that uses cables, ropes, or belts and pulleys to transmit 
                    force and movement. This system is commonly used to lift or move loads more efficiently by changing the direction 
                    of the applied force and distributing the load. Pulleys are wheels with a groove around their circumference, 
                    through which a rope, cable, or belt runs. Since FTC robots need to reach out as far as 3-times its base size, 
                    some kind of cable and pulleys system is very common in the robot arm design <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/gear_terms.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Gear Terms </h2>
                    <strong>Axis</strong>: The axis of revolution of the gear, where the shaft passes through.<p />
                    <strong>Teeth</strong>: The teeth normally has involute profiles.<p />
                    <strong>Pitch Circle</strong>: The circle that defines the "size" of the gear. The pitch circles of two meshing gears need to be tangent
                    for them to mesh. <p />
                    <strong>Pitch Diameter</strong>: The diameter of the pitch circle. <p />
                    <strong>Diametral Pitch</strong>: The ratio of the number of teeth to the pitch diameter. Two gears must have the same diametral pitch
                    to mesh.<p />
                    <strong>Circular Pitch</strong>: The distance from a point on one tooth to the same point on the adjacent tooth, measured along the pitch
                    circle. <p />
                    <strong>Module</strong>: The module of a gear is simply the circular pitch divided by pi. This value is much easier to handle than the
                    circular pitch, because it is a rational number.<p />
                    <strong>Pressure Angle</strong>: The pressure angle of a gear is the angle between the line defining the radius of the pitch circle to
                    the point where the pitch circle intersects a tooth, and the tangent line to that tooth at that point. Standard pressure
                    angles are 14.5, 20, and 25 degrees. The pressure angle affects how the gears contact each other, and thus how the force
                    is distributed along the tooth. Two gears must have the same pressure angle to mesh.<p />
                    In order for gears to mesh, the diametral pitch and the pressure angle need to be the same.<p />
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/spur_gears.png")} fluid />
                    <Image src={require("./img/rack_pinion.webp")} fluid />
                    <Image src={require("./img/bevel_gears.jpg")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Common Gears </h2>
                    <strong>Spur Gears</strong>: Spur gears are used to transfer motion from one shaft to a parallel shaft. The teeth are cut straight up and
                    down, parallel to the axis of rotation. When two adjacent spur gears mesh, they spin in opposite directions. These gears
                    are most commonly used because they can be easily made.<p/>
                    <strong>Rack and Pinion</strong>: The rack and pinion converts the rotational motion of a gear (the pinion) to the linear motion of a
                    rack. The pinion is just like any other spur gear, and it meshes with the rack, which is a rail with teeth. The rack
                    slides continuously as the gear rotates.<p/>
                    <strong>Bevel Gears</strong>: Bevel gears are a type of gear used to transmit power from one axis to another non-parallel axis. Bevel
                    gears have slanted teeth, which actually makes the shape of their "pitch diameter" a cone.<p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_Ultraplanetary.webp")} fluid /> 
                    <Image src={require("./img/REV_Ultra90DegreeGearbox.webp")} fluid /> 
                </Col>
                <Col sm={8}>
                    <h2> Gearboxes </h2>
                    Gearboxes, aka transmissions, take the rotation of an input shaft, usually the axle of a motor, and through a series of gears alter the speed
                    and power coming from the input shaft to turn an output shaft at a desired speed or torque. Gearboxes are usually
                    classified in terms of their overall speed ratio, the ratio of the speed of the input shaft to the speed of the output
                    shaft.<p />
                    The figures on the left show some common gearboxes used in FTC robots. The first one is a planetary gearbox where the 
                    input and output axes are co-linear. The second is a 90-degree gearbox where the input and output axes form a 90 degrees angle.
                </Col>
            </Row >
 

        </Container >)
}

export default HardwarePulleysPage;