import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import { images } from "../../assets/Imports/images";

const NavBarLogin = () => {
  function handleClick(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    // Add your custom logic here
  }
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/" onChange={handleClick}>
            <img src={images.logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"onChange={handleClick}
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <img src={images.login} className="login-img" alt="sfvs" />

              <p style={{ color: "white" }}>دخول</p>
            </Nav.Link>
            <Nav.Link onChange={handleClick}
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={images.cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
