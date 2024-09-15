import { Col, Row, Image, Container } from "react-bootstrap";

function TradeoffsOverviewPage() {
    return (
        <Container>
            When designing a robot for the FIRST Tech Challenge (FTC), it’s important to consider the specific game rules and
            objectives for the season, as well as the capabilities of your team. Here are some general ideas and strategies
            that can be adapted based on the game. <p />

            <h3>1. Drive Train Design</h3>
            <strong>Omni-Directional Drive</strong>: Use omni-wheels to allow for smooth movement in any direction. This can
            help with maneuverability during matches.<br />
            <strong>Mecanum Wheels</strong>: Similar to omni-wheels, but can provide better traction and control, especially
            in tight spaces.<p />

            <h3>2. Manipulation Mechanisms</h3>
            <strong>In-take System</strong>: Design an articulated arm for picking up and placing game pieces. Consider using
            a rotary joint for better reach.<br />
            <strong>Placement System</strong>: Use a conveyor system to transport game pieces from the storage holder to the 
            scoring area.<p />

            <h3>3. Scoring Devices</h3>
            <strong>Launcher</strong>: If the game involves shooting elements, design a launcher that can accurately propel 
            game pieces into scoring zones.<br />
            <strong>Elevated Platform</strong>: If the game has a height element, consider a lift mechanism to elevate your 
            robot or score higher.<p />

            <h3>4. Sensor Integration</h3>
            <strong>Distance Sensors</strong>: Use ultrasonic or infrared sensors to help with navigation and obstacle avoidance.<br />
            <strong>Color Sensors</strong>: Implement color sensors for identifying game pieces or specific zones on the field.<br />
            <strong>Gyroscope/IMU</strong>: Utilize gyroscopes for better stability and navigation control.<p />

            <h3>5. Autonomous Mode</h3>
            <strong>Pre-Programmed Path</strong>: Develop a reliable autonomous routine that can score points without human control.<br />
            <strong>Vision Processing</strong>: Use a camera and image processing to identify game pieces and navigate the field.<p />

            <h3>6. Weight and Size Optimization</h3>
            <strong>Compact Design</strong>: Keep your robot compact to navigate tight spaces easily. Use lightweight materials 
            to stay within weight limits.<br />
            <strong>Modular Components</strong>: Design modular parts that can be easily replaced or upgraded throughout 
            the season.<p />

            <h3>7. Testing and Iteration</h3>
            <strong>Prototype Early</strong>: Start building prototypes of your mechanisms early to test their functionality.<br />
            <strong>Iterative Design</strong>: Be prepared to iterate on your designs based on testing and competition experiences.<p />

            In the following sections, we will delve into the above design ideas in detail.<p />
        </Container>)
}

export default TradeoffsOverviewPage;