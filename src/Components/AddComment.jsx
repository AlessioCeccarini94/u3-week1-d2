import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  }
  SendComment = (e) => {
    e.preventDefault()
    console.log(this.state.comment)

    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMTI3NjIzZTc0MDAwMTVmN2ZkYzkiLCJpYXQiOjE3NjM2NDQwMjIsImV4cCI6MTc2NDg1MzYyMn0.X1G8ThgJJIBaS2lJwkbUtQCEyx2KKJ-chGO7mA6BnzY"
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      })
      .then(() => {
        this.setState({
          comment: {
            comment: "",
            rate: "",
            elementId: this.props.asin,
          },
        })
      })
      .catch((err) => {
        console.log(err + "errore nell'invio del commento")
      })
  }
  render() {
    return (
      <>
        <Form onSubmit={this.SendComment}>
          <Form.Group className="mb-3">
            <Form.Control
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: { ...this.state.comment, comment: e.target.value },
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: { ...this.state.comment, rate: e.target.value },
                })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Invia un commento</Button>
        </Form>
      </>
    )
  }
}

export default AddComment
