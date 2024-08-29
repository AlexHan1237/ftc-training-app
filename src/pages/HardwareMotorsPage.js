import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareMotorsPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/motors.webp")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> Motors </h2>
                    Electric motors are devices that use electricity to move objects mechanically. It can be divided into
                    two types: DC (Direct Current) motors and AC (Alternating Current) motors. DC motors are commonly used
                    in robotic applications instead of AC motors because AC motors require alternating current to operate
                    and controlling AC motors is much more challenging. For FTC competition, only a small number of DC servo
                    motors are allowed. <p />
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/dc_motor.webp")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> How DC Motors Work? </h2>
                    DC motors include two key components: a stator and an armature. The stator is the stationary part of
                    a motor, while the armature rotates. In a DC motor, the stator provides a rotating magnetic field that
                    drives the armature to rotate.<p />

                    A simple DC motor uses a stationary set of magnets in the stator, and a coil of wire with a current
                    running through it to generate an electromagnetic field aligned with the centre of the coil. One or
                    more windings of insulated wire are wrapped around the core of the motor to concentrate the magnetic
                    field.<p />

                    When the coils are turned on and off in sequence, a rotating magnetic field is created that interacts
                    with the differing fields of the stationary magnets in the stator to create torque, which causes it to
                    rotate. These key operating principles of DC motors allow them to convert the electrical energy from
                    direct current into mechanical energy through the rotating movement, which can then be used for the
                    propulsion of objects.<p />
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV_HD_Hex.webp")} fluid />
                    <Image src={require("./img/REV_Core_Hex.webp")} fluid />
                </Col>
                <Col sm={8}>
                    <h2> DC Servo Motors </h2>
                    A servo motor is a type of motor that is used for precise control of angular or linear position, velocity
                    and acceleration. It typically consists of a DC motor, gears, a sensor for position feedback, and a control
                    circuit. <p />
                    Controlling a DC servo motor involves using a specialized controller which processes signals from a
                    microcontroller or computer system to manage the motor's speed or position. The speed is managed through the
                    variation of input signals, typically modulating the width of control pulses to influence the motor's operational
                    speed precisely.<p />
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                </Col>
                <Col sm={8}>
                    <h2> FTC Eligible Motors </h2>
                    The only FTC legal motors are the following ones:<p/>
                <ul class="simple">
                    <li><p>TETRIX 12V DC Motor (<a class="reference external" href="https://www.pitsco.com/TETRIX-DC-Gear-Motor">regular</a>, <a class="reference external" href="https://www.pitsco.com/TETRIX-MAX-TorqueNADO-Motor-with-Encoder/">Torquenado</a>)</p></li>
                    <li><p><a class="reference external" href="https://www.andymark.com/categories/mechanical-gearboxes-gearmotors">AndyMark NeveRest series 12V DC Motors</a></p></li>
                    <li><p>Modern Robotics/MATRIX 12V DC Motors (this also includes <a class="reference external" href="https://www.gobilda.com/motors/">goBILDA motors</a>, which are MATRIX motors with a different gearbox)</p></li>
                    <li><p><a class="reference external" href="https://www.revrobotics.com/rev-41-1301/">REV Robotics HD Hex 12V DC Motor</a></p></li>
                    <li><p><a class="reference external" href="https://www.revrobotics.com/rev-41-1300/">REV Robotics Core Hex 12V DC Motor</a></p></li>
                </ul>
                <p>Most motors above have very similar structures. They consist of the following components.</p>
                <ul class="simple">
                    <li><p><strong>Bare motor</strong>. In all cases above, this is a 12V motor of RS-555 type, with free speed 
                    around 6,000 RPM and stall current around 10A. The motor specs posted by different vendors might be slightly 
                    different, but the difference is mainly due to different testing methods. </p></li>
                    <li><p><strong>Gearbox</strong>. The gearbox is attached to the front of the motor and reduces the speed 
                    while increasing the torque. For example, a 20:1 gearbox reduces the speed by a factor of 20, resulting in 
                    a no-load speed of around 300RPM. The gearbox can also be replaced; this is FTC legal but requires some skill.</p></li>
                    <li><p><strong>Encoder</strong>. Attached to the back of the motor and protected by a plastic cap, 
                    the encoder contains a sensor registering motor shaft rotation. It can be connected to REV hubs and used for 
                    precise control of motor speed or rotating to a specific position.</p></li>
                </ul>
            </Col>
        </Row >
 

        </Container >)
}

export default HardwareMotorsPage;