import React from "react";
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';


class SiteNav extends React.Component {
    state = {
        searchText: ""
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            this.props.history.push({
                pathname: "/results",
                state: { searchText: text }
            });
        } else {
            alert("Please enter some search text!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
    };

    handleLogout = () => {
        this.props.logOut();
    };

    handleFormSubmit = e => e.preventDefault();
    render() {
        const { collapsed, handleCollapsedChange } = this.props;
        return (
            <header>
                <Navbar bg="bg-white" expand="lg" variant="light">
                    <Button onClick={handleCollapsedChange} variant="outline-primary" className="ms-3" >
                        <i className="bi bi-list"></i>
                    </Button>
                    <Container className="ms-3">
                        <Navbar.Brand href="/">
                            <img alt="" src="/img/mechatronics.png" className="d-inline-block" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-md-auto link-warning">
                                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                            </Nav>
                            <Form className="d-flex" onSubmit={this.handleFormSubmit}>
                                <Form.Control
                                    onChange={this.handleSearchInput}
                                    value={this.state.searchText}
                                    onKeyUp={this.handleSearchKeyUp}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    style={{ color: 'red' }}
                                />
                                <Button onClick={this.handleSearchSubmit} variant="outline-primary">
                                    <i className="bi bi-search"></i>
                                </Button>
                            </Form>


                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default SiteNav;