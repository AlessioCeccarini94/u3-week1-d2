import { Dropdown } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = (props) => {
  return (
    <Dropdown className="text-center mb-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Vedi i Commenti
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default CommentList
