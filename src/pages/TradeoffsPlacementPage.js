import { Col, Row, Image, Container } from "react-bootstrap";

function TradeoffsPlacementPage() {
    return (
        <Container>
            <h2>Placement Systems</h2>
            A game piece placement system is crucial in an FTC robotics competition because it allows a robot to acquire,
            elevate, and precisely place game pieces at different heights on the field, which is often a key component of
            the competition's scoring mechanism, enabling teams to achieve high points and gain a competitive edge;
            essentially, without a lift system, a robot would be significantly limited in its ability to manipulate and
            strategically position game pieces throughout the match. A well-designed lift system allows for complex maneuvers
            like stacking game pieces, reaching high-value scoring zones, and adapting to changing game piece placements
            on the field. <p />

            Designing and building a reliable lift system is a significant engineering challenge, requiring students to
            understand mechanical principles like linkages, gear ratios, and motor control to optimize their robot's
            performance. Different lift designs can be tailored to specific game challenges, allowing teams to modify
            their robots to effectively handle the unique game piece manipulation requirements each season. <p />

            <h4>Double Reverse Four Bar Lift</h4>
            The double reverse four bar (also referred to as DR4B or RD4B) lift is one of the more complicated lift
            designs used in robotics competitions. The lift is comprised of two iterations of a four bar lift. One
            iteration is mounted in the same manner as for a standard four bar lift. The second iteration is mounted
            at the end of the ﬁrst iteration at the location where the intake or object manipulation mechanisms would
            normally be positioned. The second four bar lift faces the opposite direction as the ﬁrst iteration. This
            allows the overall lift to rise almost completely vertically as opposed to a single four bar lift that rises
            forward and up simultaneously. This can be an advantage or disadvantage depending on the desired task.<p />

            <Image src={require("./img/TO_double_4bar_lift.gif")} fluid width="40%" /> <p />

            <h4>Scissor Lift</h4>
            The scissor lift is named because of its overlapping metal bars that open and close similarly to scissors.
            Scissors lifts are comprised of two sets of overlapping bars, one on each side, that are able to freely
            rotate in respect to one another. The lift can be as simple as two crossed bars on either side of the lift,
            but it can also contain many repeated iterations, stacked vertically, of the ﬁrst one and be able to extend
            to many feet off of the ground. The upward motion is created by motors located at the base of the lift that
            move one edge (either the front or the back) while the other edge remains stationary but is allowed to rotate.
            Moving the two edges closer together will extend the lift upwards and moving them apart will lower it.<p />

            <Image src={require("./img/TO_scissor_lift.gif")} fluid width="40%" /> <p />

            <h4>Cascade Lift</h4>
            A cascade or elevator lift is very popular in FTC competition. This lift provides an immense amount of height,
            while taking not a lot of space. The following diagram shows how the mechanism works: <p />

            <Image src={require("./img/TO_lift.webp")} fluid width="40%" /> <p />

            Cascade lifts can be constructed in various forms and materials. They use c-channels or 80/20 extrusion, sprockets,
            and cable or chain to connect each bar together. These bars run parallel to the structural frame of the lift,
            which is connected to the chassis of the robot. <p />

            <iframe width="342" height="607" src="https://www.youtube.com/embed/ydkJCE956ko" title="Cable telescopic sliders 1a" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="342" height="607" src="https://www.youtube.com/embed/UC3Z0wOfkWg" title="VEX Cascade Lift" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p />

            <h4>Telescopic Lift</h4>
            A telescopic lift in robotics is a mechanism designed to extend and retract vertically, much like a telescoping
            pole or ladder. The lift consists of multiple nested sections or tubes that slide into and out of each other.
            When extended, each section slides outward from the one below it, creating a taller structure. To ensure smooth
            and stable operation, telescopic lifts often use guiding rails or bearings that keep the sections aligned and
            prevent wobbling or misalignment during movement. <p />

            The extension and retraction of the sections are typically drived by cables, screws, or rigid chains. These
            actuators control the movement of the sections to adjust the height.<p />

            <iframe width="933" height="487" src="https://www.youtube.com/embed/lKaMo2AasV8" title="Cable telescopic mast 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <iframe width="944" height="487" src="https://www.youtube.com/embed/nmyvMkfxtbo" title="Screw 3-stage telescopic actuator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <iframe width="342" height="607" src="https://www.youtube.com/embed/c8Nv4Bas8Ow" title="3D Printed Rigid Chain Mechanism by gzumwalt  #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p />

        </Container >)
}

export default TradeoffsPlacementPage;