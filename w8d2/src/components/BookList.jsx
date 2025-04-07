import { Col, Container, Row, Form, Button } from "react-bootstrap";

import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };
  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin });
  };


  render() {
    return (
      <>
        <Container>
          <Row>
            <Form className="d-flex mt-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
              />
            </Form>
          </Row>
          <Row>
            {this.props.book
              .filter((libro) => {
                if (libro.title.includes(this.state.search)) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((sbook) => {
                return (
                  <Col xs={12} md={4} lg={3} key={sbook.asin} className=" g-3">
                    <SingleBook
                      img={sbook.img}
                      title={sbook.title}
                      asin={sbook.asin}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
