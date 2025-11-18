import { Container, Nav, Navbar } from "react-bootstrap"

const HeaderPage = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Epilibrary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default HeaderPage
