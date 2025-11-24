import { Col, Card, Button } from "react-bootstrap"
import "../index.css"
import { Component } from "react"

class SingleBook extends Component {
  render() {
    return (
      <Col xs={5} className="mb-3 mt-3">
        <Card
          className="h-100 "
          style={{
            border: this.props.selected ? "3px solid red" : "none",
            cursor: "pointer",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={() => this.props.changeState(this.props.asin)}
          />
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
