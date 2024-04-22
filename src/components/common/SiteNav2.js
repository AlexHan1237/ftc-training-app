
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SiteNav2({sitemapData}) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Hardware" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/hardware">All</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/wheels">Wheels</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/motors">Motors</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/gears">Gears, Chains & Belts</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/pulleys">Pulleys</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/transmissions">Transmissions</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/frames">Structure & Frame</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/sensors">Sensors</NavDropdown.Item>
              <NavDropdown.Item href="/hardware/bearings">Bearings, Shafts & Fasteners</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Software" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/software">All</NavDropdown.Item>
              <NavDropdown.Item href="/software/github">Github</NavDropdown.Item>
              <NavDropdown.Item href="/software/Java">Java</NavDropdown.Item>
              <NavDropdown.Item href="/software/android_studio">Android Studio</NavDropdown.Item>
              <NavDropdown.Item href="/software/sdk">FTC SDK</NavDropdown.Item>
              <NavDropdown.Item href="/software/cad">CAD System</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/integration">System Integration</Nav.Link>
            <NavDropdown title="System Integration" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/integration">All</NavDropdown.Item>
              <NavDropdown.Item href="/integration/chassis">Robot Chassis</NavDropdown.Item>
              <NavDropdown.Item href="/integration/controlhub">ControlHub Setup</NavDropdown.Item>
              <NavDropdown.Item href="/integration/teleop">Teleop Implementation</NavDropdown.Item>
              <NavDropdown.Item href="/integration/driverhub">DriverHub Setup</NavDropdown.Item>
              <NavDropdown.Item href="/integration/debug">Testing & Debugging</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Design Trade-offs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/tradeoffs">All</NavDropdown.Item>
              <NavDropdown.Item href="/tradeoffs/chassis">Chassis Design</NavDropdown.Item>
              <NavDropdown.Item href="/tradeoffs/intake">In-take System</NavDropdown.Item>
              <NavDropdown.Item href="/tradeoffs/placement">Pixel Placement System</NavDropdown.Item>
              <NavDropdown.Item href="/tradeoffs/kinematics">Kinematics & Dynamics</NavDropdown.Item>
              <NavDropdown.Item href="/tradeoffs/hanger">Hanger System</NavDropdown.Item>
              <NavDropdown.Item href="/tradeoffs/launcher">Paper Plane Lanuncher</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/strategy">Competition Strategy</Nav.Link>
            <NavDropdown title="Design Trade-offs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/strategy">All</NavDropdown.Item>
              <NavDropdown.Item href="/strategy/automonous">Automonous Mode</NavDropdown.Item>
              <NavDropdown.Item href="/strategy/interactive">Interactive Mode</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav2;