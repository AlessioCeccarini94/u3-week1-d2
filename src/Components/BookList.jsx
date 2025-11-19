import SingleBook from "./SingleBook"
import { Container, Row } from "react-bootstrap"
const BookList = function (props) {
  return (
    <Container>
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4">
        {props.books.map((book) => (
          <SingleBook key={book.asin} title={book.title} img={book.img} />
        ))}
      </Row>
    </Container>
  )
}

export default BookList
