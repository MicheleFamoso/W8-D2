import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({ selected: !this.state.selected });
    this.props.onBookSelect(this.props.asin); // comunica l'asin al padre
  };

  render() {
    const cardClass = this.state.selected ? "border-danger border-5" : "";

    return (
      <Card className={`h-100 shadow-lg ${cardClass}`}>
        <Card.Img
          variant="top"
          src={this.props.img}
          onClick={this.handleClick}
        />
        <Card.Body className="d-flex flex-column justify-content-between bg-dark">
          <Card.Title className="text-center text-light">
            {this.props.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
