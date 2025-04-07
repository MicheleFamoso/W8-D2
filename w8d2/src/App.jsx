import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import NavCustom from "./components/NavCustom";
import FooterCustom from "./components/FooterCustom";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import bookh from "./assets/books/scifi.json";

class App extends Component {
  state = {
    selectedAsin: "",
  };

  setSelectedAsin = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <div className="min-vh-100 d-flex flex-column">
        <header className="sticky-top">
          <NavCustom />
        </header>
        <main className="flex-grow-1 bg-body-secondary">
          <Container>
            <Row>
              <Col xs="10" md="8">
                <BookList book={bookh} onSelect={this.setSelectedAsin} />
              </Col>
              <Col>
                <CommentArea asin={this.state.selectedAsin} />
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="d-flex justify-content-center">
          <FooterCustom />
        </footer>
      </div>
    );
  }
}

export default App;
