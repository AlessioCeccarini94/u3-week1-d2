import SingleBook from "./SingleBook"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Component } from "react"

class BookList extends Component {
  state = {
    search: "",
  }
  render() {
    const filteredBooks = this.props.books.filter((book) => {
      return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      <>
        <Form inline>
          <Row className="align-items-center justify-content-center ">
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
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4">
            {filteredBooks.map((book) => (
              <SingleBook
                key={book.asin}
                img={book.img}
                title={book.title}
                price={book.price}
                asin={book.asin}
              />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
