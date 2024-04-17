
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function SiteNav2() {
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
            <Nav.Link href="/software">Software</Nav.Link>
            <Nav.Link href="/integration">System Integration</Nav.Link>
            <Nav.Link href="/tradeoffs">Design Trade-offs</Nav.Link>
            <Nav.Link href="/strategy">Competition Strategy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav2;