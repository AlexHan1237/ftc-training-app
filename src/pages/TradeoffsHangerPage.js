import { Col, Row, Image, Container } from "react-bootstrap";

function TradeoffsHangerPage() {
    return (
        <Container>
            <h2>FTC 2024-2025 INTO THE DEEP</h2>
            In 2024-2025 season, FTC has a new game format. In the "Into the Deep" competition, two alliances, each made up 
            of two FIRST Tech Challenge teams, compete in matches that involve various challenges. Teams use robots to 
            score points by completing specific tasks, including moving objects called "Samples" and "Specimens," parking 
            in designated zones, and ascending rungs on a structure known as the "Submersible." <p/>

            <iframe width="866" height="487" src="https://www.youtube.com/embed/zyUkIumb9Rw" title="FTC 2024-2025 Game Reveal : into the deep" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p/>

            <h4>Key Scoring Tasks</h4>
            <ul>
                <li>Parking in the Observation Zone - <stong>3 Points</stong></li>
                <li>Placing Samples in baskets or the Net Zone - <stong>High Basket: 8, Low Basket: 4, Net Zone: 2</stong></li>
                <li>Snapping Specimens on the Chamber - <stong>High Chamber: 10, Low Chamber: 6</stong></li>
                <li>Ascending Rungs of the Submersible - <stong>Level 1: 3, Level 2: 15, Level 3: 30</stong></li>
            </ul><p/>

            After analyzing the scoring scheme, it’s clear that the game strategy prioritizes placing the Samples in the 
            High Basket first. If arranged properly, the basket can hold up to 20 Samples. The second priority is to drop 
            Samples in the Net Zone, followed by securing the Specimens in the High Chamber. Ultimately, the design of 
            the robot should focus on climbing the high Rung, as there appears to be limited time to engage with the Low 
            Chamber or ascend to the Low Rung. <p/>

            <h4>Brainstorm of a New Robot</h4>
            The "Into the Deep" game offers an exciting platform for teams to compete through strategy, teamwork, and 
            advanced robotics. With a complex point system, strict rules, and various challenges, the 2024-2025 competition 
            demands great technical innovation and competitive spirit among participants. <p/>

            After a brainstorming session for a new robot for FTC 2024-2025, here are the key ideas we will prototype:<br/>
            <ul>
                <li>
                    <strong>Drive Train: Mecanum Wheels</strong>
                </li>
                <li>
                    <strong>Intake:</strong> Parallel Gripper with a specialized finger profile and soft-touch tips. 
                    <ul> 
                        <li>A preset action sequence may be used to move adjacent Samples aside, creating space to grasp the target.</li> 
                        <li>A third finger could be added to press the Specimens into the Chamber to prevent splitting caused by the 
                            pulling force of the two main fingers.</li> 
                    </ul> 
                </li> 
                <li>
                    <strong>Placement:</strong> Telescopic Lift 
                    <ul> 
                        <li>Extending poles will be created by modifying a lightweight Unipod.</li> 
                        <li>The poles will be driven using a rigid chain mechanism.</li> 
                        <li>A retractable coil cord will be used to connect the gripper motor and sensors to the Battery Pack and 
                            Control Hub.</li> 
                    </ul> 
                </li> 
                <li>
                    <strong>Level 2 Ascending:</strong> Two-arm climbing 
                    <ul> 
                        <li>A short arm will be used to grab the low rung and tilt the robot upwards.</li> 
                        <li>The main telescopic lift will then grab the high rung to elevate the robot.</li> 
                        <li>A preset action sequence will coordinate the short arm and telescopic lift to fully lift the robot above 
                            the low rung.</li> 
                    </ul> 
                </li>
            </ul>
 

        </Container >)
}

export default TradeoffsHangerPage;