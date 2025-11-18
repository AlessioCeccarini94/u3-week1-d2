import { Button, Card, Container, Col, Row } from "react-bootstrap"
import books from "./Data/history.json"
import { Component } from "react"

class MainPage extends Component {
  state = {
    activeBook: books[0],
    render() {
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Img />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )
    },
  }
}
export default MainPage
