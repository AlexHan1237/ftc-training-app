import { Col, Row, Image, Button, Container } from "react-bootstrap";

function HomePage() {
    return (
    <Container>
        <Row className="px-4 my-5">
            <Col xs={2} sm={2}>
                <Image src="img/FTC_logo.png" fluid />
            </Col>
            <Col sm={8}>
                <h1 className="font-weight-light">FIRST Tech Challenge (FTC) </h1>
                <p className="mt-4">
The FIRST Tech Challenge (FTC) is a robotics competition for students in grades 7–12 to design, build, code, and operate robots to compete in alliance-style challenges. The program aims to inspire young people to become STEM innovators and leaders. 
</p>
<p className="mt-4">
In FTC, teams of up to 15 students work together with adult coaches and mentors to develop STEM skills and engineering principles. Students use a reusable platform powered by Android technology to build their robots, which can be coded using Java-based programming. Each team has two Android devices: a robot controller mounted on the robot that tells it what to do, and another device for controlling the robot.
</p>
<p className="mt-4">
During competitions, teams earn points by completing tasks based on a set of game rules. The order and alliances of matches are random, and the number of matches varies based on the number of teams competing.
                </p>
                <Button variant="outline-primary">Get Started &gt;&gt;</Button>
            </Col>
        </Row>
    </Container>)
}

export default HomePage;