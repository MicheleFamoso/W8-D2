import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const Url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    recensioni: [],
  };

  getRece = () => {
    if (!this.props.asin) return;
    fetch(Url + this.props.asin, {
      headers: {
        Authorization: "Bearer <TOKEN>", // Usa il tuo token valido qui
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("errore nel recupero");
      })
      .then((data) => {
        this.setState({ recensioni: data });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.getRece();
    }
  }

  render() {
    return (
      <div className="mt-5 position-fixed w-25">
        <AddComment asin={this.props.asin} />
        <CommentList rec={this.state.recensioni} />
      </div>
    );
  }
}

export default CommentArea;
