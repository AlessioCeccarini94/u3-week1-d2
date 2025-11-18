import { Container, Row, Col, Card, Button } from "react-bootstrap"
import books from "../Data/history.json"
function MainPage() {
  return (
    <Container className="my-5 bg-dark">
      <Row className=" row-cols-2 row-cols-md-3 row-cols-lg-4 align-items-center">
        {books.map((book) => (
          <Col className="my-3 align-items-center">
            <Card className="mh-100 d-flex flex-column bg-dark-subtle">
              <Card.Img variant="top" className="img-fluid" src={book.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="my-auto">{book.title}</Card.Title>
                <Card.Text className="my-auto">{book.price}</Card.Text>
                <Card.Text className="my-auto">{book.category}</Card.Text>
                <Button className="mt-auto bg-dark" variant="primary">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default MainPage
