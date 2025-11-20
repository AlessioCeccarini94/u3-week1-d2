import { Dropdown } from "react-bootstrap"

const SingleComment = function (props) {
  return (
    <Dropdown.Item key={props.comment._id}>
      {props.comment.comment}
    </Dropdown.Item>
  )
}

export default SingleComment
