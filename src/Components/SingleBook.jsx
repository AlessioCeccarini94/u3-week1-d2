import { Col, Card, Button } from "react-bootstrap"
import "../index.css"
import { Component } from "react"
import CommentArea from "./CommentArea"

// import books from "../Data/history.json"

class SingleBook extends Component {
  state = {
    selected: false,
    commentArea: false,
  }
  render() {
    return (
      <Col className="mb-3 mt-3">
        <Card
          className="h-100 "
          style={{
            border: this.state.selected ? "3px solid red" : "none",
            cursor: "pointer",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Title>{this.props.price}</Card.Title>
            <Button className=" bg-dark" variant="primary">
              Buy Now
            </Button>
            {this.state.selected && <CommentArea asin={this.props.asin} />}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
