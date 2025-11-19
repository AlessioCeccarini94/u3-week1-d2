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
      <Col>
        <Card className="h-100 this.state.selected === true ? 'border border-danger' : ''}">
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Title>{this.props.price}</Card.Title>
            <Button className="my-auto bg-dark" variant="primary">
              Buy Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default SingleBook
