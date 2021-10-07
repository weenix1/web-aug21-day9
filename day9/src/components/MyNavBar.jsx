import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, withRouter } from "react-router-dom";
const MyNavBar = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    className="main-navbar"
    sticky="top"
    variant="dark"
  >
    <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/home" className="active">
          <span className="nav-link navbar-links">Home</span>
        </Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Link to="/register" className="no-underline">
          <span className="nav-link navbar-links">Registration</span>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(MyNavBar);
