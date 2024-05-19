import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SiteMapContext from '../../SiteMapContext';

function SiteNav2() {
  const sitemap = useContext(SiteMapContext);
  if (!sitemap)
    return;

  return (
    <Navbar style={{ backgroundSize: "0", backgroundColor: "#2353b1" }}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {sitemap.chapters.map((chapterObj) => {
              return (
                <NavDropdown title={chapterObj.chapterTitle} id="navbarScrollingDropdown">
                  {chapterObj.sections.map((sectionObj) => {
                    return (<NavDropdown.Item href={sectionObj.Link}>{sectionObj.SectionTitle}</NavDropdown.Item>);
                  })}
                </NavDropdown>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav2;



