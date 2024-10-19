import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Nav variant="tabs" defaultActiveKey={"/"}>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/skills">
          Skills
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/contact">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
