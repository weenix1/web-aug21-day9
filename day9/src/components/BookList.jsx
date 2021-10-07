import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

const BookList = (props) => {
  /*  state = {
    searchQuery: "",
  };
 */

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) =>
                /* this.setState({ searchQuery: e.target.value }) */
                setSearchQuery(e.target.value)
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {props.books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b, i) => (
            <Col xs={12} key={i}>
              <SingleBook book={b} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
