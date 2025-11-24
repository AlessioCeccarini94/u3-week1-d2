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
            <Col className="d-flex justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                className=" me-sm-2 w-50"
              />
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Container className="ms-auto w-100">
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
            <Col className="col-3 bg-light bg-dark">
              <CommentArea asin={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
