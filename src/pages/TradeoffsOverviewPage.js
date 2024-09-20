import { Col, Row, Image, Container } from "react-bootstrap";

function TradeoffsOverviewPage() {
    return (
        <Container>
            <h2>System Design Ideas Overview</h2>
            When designing a robot for the FIRST Tech Challenge (FTC), it’s important to consider the specific game rules and
            objectives for the season, as well as the capabilities of your team. Here are some general ideas and strategies
            that can be adapted based on the game. <p />

            <h4>1. Drive Train Design</h4>
            Omni-Directional Drive: Use omni-wheels to allow for smooth movement in any direction. This can
            help with maneuverability during matches.<br />
            Mecanum Wheels: Similar to omni-wheels, but can provide better traction and control, especially
            in tight spaces.<p />

            <h4>2. Manipulation Mechanisms</h4>
            Intake System: Design an articulated arm for picking up and placing game pieces. Consider using
            a rotary joint for better reach.<br />
            Placement System: Use a conveyor system to transport game pieces from the storage holder to the 
            scoring area.<p />

            <h4>3. Scoring Devices</h4>
            Launcher: If the game involves shooting elements, design a launcher that can accurately propel 
            game pieces into scoring zones.<br />
            Elevated Platform: If the game has a height element, consider a lift mechanism to elevate your 
            robot or score higher.<p />

            <h4>4. Sensor Integration</h4>
            Distance Sensors: Use ultrasonic or infrared sensors to help with navigation and obstacle avoidance.<br />
            Color Sensors: Implement color sensors for identifying game pieces or specific zones on the field.<br />
            Gyroscope/IMU: Utilize gyroscopes for better stability and navigation control.<p />

            <h4>5. Autonomous Mode</h4>
            Pre-Programmed Path: Develop a reliable autonomous routine that can score points without human control.<br />
            Vision Processing: Use a camera and image processing to identify game pieces and navigate the field.<p />

            <h4>6. Weight and Size Optimization</h4>
            Compact Design: Keep your robot compact to navigate tight spaces easily. Use lightweight materials 
            to stay within weight limits.<br />
            Modular Components: Design modular parts that can be easily replaced or upgraded throughout 
            the season.<p />

            <h4>7. Testing and Iteration</h4>
            Prototype Early: Start building prototypes of your mechanisms early to test their functionality.<br />
            Iterative Design: Be prepared to iterate on your designs based on testing and competition experiences.<p />

            In the following sections, we will delve into the above design ideas in detail.<p />
        </Container>)
}

export default TradeoffsOverviewPage;