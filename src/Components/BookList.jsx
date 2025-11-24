import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Component } from "react"

class BookList extends Component {
  state = {
    search: "",
    selected: false,
    commentArea: false,
    asin: "",
  }
  changeState = (state) => {
    this.setState({
      commentArea: !this.state.commentArea,
      selected: !this.state.selected,
      asin: state,
    })
  }
  render() {
    const filteredBooks = this.props.books.filter((book) => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      <>
        <Form inline>
          <Row className="align-items-center justify-content-center my-3">
            <Col>
              <Form.Control
                type="search"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Container>
          <Row className="w-100">
            <Col className="col-9 d-flex flex-wrap justify-content-around">
              {filteredBooks.map((book) => (
                <SingleBook
                  changeState={this.changeState}
                  key={book.asin}
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  asin={book.asin}
                  selected={this.state.asin === book.asin}
                />
              ))}
            </Col>
            <Col className="col-3 bg-light">
              <CommentArea
                asin={this.state.asin}
                className="position-sticky top-0 "
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
