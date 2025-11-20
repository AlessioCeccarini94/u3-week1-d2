import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
class CommentArea extends Component {
  state = {
    comments: [],
  }

  getComments = () => {
    const URL =
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMTI3NjIzZTc0MDAwMTVmN2ZkYzkiLCJpYXQiOjE3NjM2NDQwMjIsImV4cCI6MTc2NDg1MzYyMn0.X1G8ThgJJIBaS2lJwkbUtQCEyx2KKJ-chGO7mA6BnzY"
    fetch(URL, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((arrayOfComments) => {
        this.setState({ comments: arrayOfComments })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    console.log(this.props.asin)

    this.getComments()
  }
  render() {
    return (
      <>
        <CommentList comments={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </>
    )
  }
}

export default CommentArea
