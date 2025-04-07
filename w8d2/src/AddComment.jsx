const Url = "https://striveschool-api.herokuapp.com/api/comments/";

import { Component } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  FormControl,
  Button,
} from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "2",
      elementId: this.props.asin,
    },
  };

  invia = (e) => {
    e.preventDefault();
    fetch(Url, {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2ZjNjFkNDM2ZTAwMTVkYTI3MjAiLCJpYXQiOjE3NDM2ODM1MjYsImV4cCI6MTc0NDg5MzEyNn0.rxE_OUjsSq3JbBKF0_8uZjrZD-Tl6XhoPN5yFmV3ziI",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Inviato!!!");
        } else {
          throw new Error("Non Inviato!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <Form onSubmit={this.invia}>
            <FormGroup>
              <FormLabel>Recensione</FormLabel>
              <FormControl
                type="text"
                placeholder="Recensisci"
                value={this.state.review.comment}
                required
                onChange={(e) => {
                  this.setState({
                    review: {
                      ...this.state.review,
                      comment: e.target.value,
                    },
                  });
                }}
              />
            </FormGroup>
<<<<<<< HEAD:w8d2/src/AddComment.jsx
<<<<<<< HEAD:w8d2/src/components/AddComment.jsx
<<<<<<< HEAD:w8d2/src/components/AddComment.jsx
=======
>>>>>>> parent of 6c84cbf (.):w8d2/src/components/AddComment.jsx
            <Form.Group className="mb-2">
              <Form.Label>Valutazione</Form.Label>
              <Form.Control
                as="select"
                value={this.state.review.rate}
                onChange={(e) =>
                  this.setState({
                    review: {
                      ...this.state.review,
                      rate: e.target.value,
                    },
                  })
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit">Invia</Button>
<<<<<<< HEAD:w8d2/src/AddComment.jsx
=======
>>>>>>> parent of e23ceed (Update AddComment.jsx):w8d2/src/AddComment.jsx
=======

            <Button>Invia</Button>
>>>>>>> parent of 6dc8cef (...):w8d2/src/AddComment.jsx
=======
>>>>>>> parent of 6c84cbf (.):w8d2/src/components/AddComment.jsx
          </Form>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default AddComment;
