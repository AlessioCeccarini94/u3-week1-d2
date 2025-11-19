import { Col, Card, Button } from "react-bootstrap"
import "../index.css"
import { Component } from "react"

// import books from "../Data/history.json"

class SingleBook extends Component {
  render() {
    this.state = {
      selected: false,
    }
    return (
      <Col className="mb-3 mt-3">
        <Card
          className="h-100 border border-2 {this.state.selected === true ? 'border-danger' : ' '}"
          onClick={() => this.setState({ selected: true })}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Title>{this.props.price}</Card.Title>
            <Button className=" bg-dark" variant="primary">
              Buy Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default SingleBook
