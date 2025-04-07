import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const Url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    recensioni: [],
  };
  getRece = () => {
    fetch(Url + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2ZjNjFkNDM2ZTAwMTVkYTI3MjAiLCJpYXQiOjE3NDM2ODM1MjYsImV4cCI6MTc0NDg5MzEyNn0.rxE_OUjsSq3JbBKF0_8uZjrZD-Tl6XhoPN5yFmV3ziI",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ recensioni: data });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  componentDidMount = () => {
    this.getRece();
  };

  render() {
    return (
      <>
        <AddComment />
        <CommentList rec={this.state.recensioni} />
      </>
    );
  }
}
export default CommentArea;
