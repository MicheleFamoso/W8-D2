import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    // Classe condizionale che aggiunge 'border-danger' se il libro è selezionato
    const cardClass = this.state.selected ? "border-danger border-5" : "";

    return (
      <Card
        className={`h-100 shadow-lg ${cardClass}`} // Aggiungi la classe condizionale qui
      >
        <Card.Img
          variant="top"
          src={this.props.img}
          onClick={() => {
            // Toggle dello stato selezionato al click
            this.setState({
              selected: !this.state.selected,
            });
          }}
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
