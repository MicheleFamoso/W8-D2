import { Component } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";

const Url = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
<<<<<<< HEAD:w8d2/src/components/AddComment.jsx
    review: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        review: {
          ...this.state.review,
          elementId: this.props.asin,
        },
      });
    }
  }

  invia = (e) => {
    e.preventDefault();
    fetch(Url, {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2ZjNjFkNDM2ZTAwMTVkYTI3MjAiLCJpYXQiOjE3NDM2ODM1MjYsImV4cCI6MTc0NDg5MzEyNn0.rxE_OUjsSq3JbBKF0_8uZjrZD-Tl6XhoPN5yFmV3ziI",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Inviato!");
          this.setState({
            review: {
              comment: "",
              rate: "1",
              elementId: this.props.asin,
            },
          });
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
        <ListGroupItem className="mt-4 mb-3">
          <Form onSubmit={this.invia}>
=======
    comment: [],
  };
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <Form>
>>>>>>> parent of e23ceed (Update AddComment.jsx):w8d2/src/AddComment.jsx
            <FormGroup>
              <FormLabel>Recensione</FormLabel>
              <FormControl type="text" placeholder="Recensisci" />
            </FormGroup>
<<<<<<< HEAD:w8d2/src/components/AddComment.jsx
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
=======
>>>>>>> parent of e23ceed (Update AddComment.jsx):w8d2/src/AddComment.jsx
          </Form>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default AddComment;
