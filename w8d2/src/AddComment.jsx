import { Component } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: [],
  };
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <Form>
            <FormGroup>
              <FormLabel>Recensione</FormLabel>
              <FormControl type="text" placeholder="Recensisci" />
            </FormGroup>
          </Form>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default AddComment;
