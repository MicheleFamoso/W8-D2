import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.rec.length === 0 && (
          <ListGroup.Item className="bg-dark text-light">
            Nessuna recensione
          </ListGroup.Item>
        )}
        {this.props.rec.map((comment) => (
          <ListGroup.Item
            key={comment._id}
            className="bg-dark text-light d-flex justify-content-between"
          >
            <p>{comment.comment}</p>
            <p>{comment.rate}/5</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
