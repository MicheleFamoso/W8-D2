import { Col, Container, Row, Form, Button } from "react-bootstrap";

import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
    render(
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
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {props.book.map((sbook) => {
            return (
              <Col xs={12} md={4} lg={3} key={sbook.asin} className=" g-3">
                <SingleBook img={sbook.img} title={sbook.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );)
}
export default BookList;
