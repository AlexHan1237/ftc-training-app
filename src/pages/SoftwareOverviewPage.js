import { Col, Row, Image, Container } from "react-bootstrap";

function SoftwareOverviewPage() {
    return (
        <Container>
            <h2> Software Overview </h2>
            In robotics, software plays a crucial role in designing, controlling, and programming robots. Here are
            some key types of software used in the field:<p />
            <ul>
                <li><strong>Robot Controller Programming:</strong> Various actuators in a FTC robot are contorlled by an on-board computer system called
                    REV ControlHub. The ControlHub runs an Android OS. The control logic is progrmmed in Java using Android Studio IDE.
                    Special FTC qualified hardware components, such as DC motors, servo motors, and sensors, are interfaced with REV
                    ControlHub by a FTC SDK. Short programs called TeleOps are developed to drive the hardware components by calling the
                    SDK functions. We will show detailed steps to install and set the TeleOps development environment.<p/>
                </li>
                <li><strong>Robot Design Using CAD:</strong> CAD software allows for highly precise and accurate designs of robotic components and systems.
                    In FTC robot design, since CAD models of many pre-built components are linked with OnShape web application, we will
                    share a tutorial of basic OnShape modeling techniques in this chapter.
                </li>
            </ul>
        </Container>)
}

export default SoftwareOverviewPage;