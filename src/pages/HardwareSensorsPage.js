import { Col, Row, Image, Container } from "react-bootstrap";

function HardwareSensorsPage() {
    return (
        <Container>
            <h2> Sensors </h2>
            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/REV-sensors.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> What Sensors Do? </h4>
                    Sensors provide information that allows you to program the robot to use this information to perform specific 
                    actions. This allows the robot to perform at its best and in a repeatable manner. Scenarios where a sensor 
                    is needed:<p />
                    <ul>
                        <li>Autonomously move to a specific location and stop there.</li>

                        <li>Move forward at a green signal and stop moving at a red signal.</li>

                        <li>Robot arm needs to be prevented from rotating too far or it may damage other parts of the robot.</li>

                        <li>Stop 1 meter away from an opaque wall.</li>

                        <li>Tell how many game objects it is currently holding inside its hopper.</li>
                    </ul>
                    In the REV Robotics Control System sensors are classified as basic, intermediate, or advanced. This division 
                    among sensors is based on programming complexity. Basic sensors can typically be coded using a if/else 
                    statement. Intermediate sensors, like the Color Sensor or Encoders, require a higher level understanding 
                    of programming. Advanced sensors require an advanced knowledge of programming. Visions sensors and using 
                    the Inertial Measurement Unit (IMU) are considered advanced. <p/>
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/Touch_Sensor.png")} fluid />
                    <Image src={require("./img/magnetic_Sensor.png")} fluid />
                    <Image src={require("./img/potentiometer.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Basic Sensors </h4>
                    In the REV Robotics Control System, both Analog and Digital sensors are considered basic sensors.<p/>

                    Digital sensors provide binary information: information that can take one of two possible values or states. 
                    These states are represented in programming languages as: TRUE/FALSE or 1/0. Electrically, these states 
                    are usually represented as two voltages: a High voltage and a Low voltage. For REV Hubs, High is 3.0V and 
                    Low is 0V. <p/>

                    A touch sensor is a common digital sensor. It has two states: pressed and not-pressed. Magnetic Limit Switch
                    is another digital sensor that detects magnetic fields. When there is sufficient field strength of either 
                    magnetic pole detected the sensor is triggers and a limit of movement can be established. <p/>

                    Analog sensors provide a range of information with an almost infinite set of values, instead of just two. 
                    These values are usually represented in programming languages as decimal numbers. Electrically, these values 
                    are represented as voltage. REV Hubs can measure voltages on the analog ports between 0V and 5.0V. <p/>

                    Depending on the sensor, the reported voltage can represent anything that can't be represented by two 
                    digital states. A potentiometer is a common analog sensor that reports the angle of an attached shaft 
                    as voltages.<p/>
                </Col>
            </Row >


            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/Color_Sensor.png")} fluid />
                    <Image src={require("./img/2M_Distance_Sensor.png")} fluid />
                    <Image src={require("./img/REV-Motor_builtin_encoder.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Intermediate sensors </h4>
                    Intermediate sensors give feedback through two-way communication with a robot controller. These types of 
                    sensors allow for more complex data to communicate to the robot, such as color values of an object. <p/>
                    <ul>
                        <li><strong>Color Sensor</strong>: A sensor capable of sensing colors and proximity of objects.</li><p/>
                        <li><strong>2m Distance Sensor</strong>: A sensor typically used to detect the distance from the sensor 
                        to other opaque objects.</li><p/>
                        <li><strong>Encoder</strong>: Encoder a type of digital sensor that converts rotary motion into digital 
                        signal. These type of sensors require “decoding” to get this information into a usable form. The 
                        Control Hub and Expansion Hub have built in decoding through the “Encoder Ports” under the 
                        motor ports.</li>
                    </ul>
                </Col>
            </Row >

            <Row className="px-4 my-5">
                <Col xs={2} sm={2}>
                    <Image src={require("./img/logitechC310_webcam.png")} fluid />
                    <Image src={require("./img/IMU.png")} fluid />
                </Col>
                <Col sm={8}>
                    <h4> Advanced Sensors </h4>
                    Advanced sensors rely on complex coding and information from other sensors in order to work effectively. 
                    Both the IMU and vision sensors require higher level code in order to decipher information being received 
                    from the sensor. <p/>
                    <ul>
                        <li><strong>Vision</strong>: Gives feedback as images to the robot controller. These types of sensors 
                        require the use of image processing software, like VuForia, to use to their full potential.</li>
                        <li><strong>IMU</strong>: The IMU incorporates three sensors: a 3-axis accelerometer, a 3-axis 
                        gyroscope, and a 3-axis geomagnetic sensor. This sensor can be used to determine orientation and location 
                        of the robot. </li>
                    </ul>
                </Col>
            </Row >


        </Container >)
}

export default HardwareSensorsPage;