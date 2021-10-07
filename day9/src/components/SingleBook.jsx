import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";
import { Col, Row } from "react-bootstrap";

const SingleBook = (props) => {
  /* state = {
    selected: false,
  };
 */
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Row>
        <Col md={6}>
          <Card
            style={{
              border: selected ? "3px solid red" : "none",
            }}
          >
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  style={{ width: "200px", objectFit: "cover" }}
                  src={props.book.img}
                  onClick={() =>
                    /* this.setState({ selected: !this.state.selected }) */
                    setSelected(!selected)
                  }
                />
              </Col>
              <Col className="justify-content-center">
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    BookTitle:
                    {props.book.title}
                  </Card.Title>
                  <h4> Category:{props.book.category}</h4>
                  <div className="d-flex justify-content-between mb-0">
                    <Button variant="warning">Buy</Button>{" "}
                    <h5 className="mb-0">€{props.book.price}</h5>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={6}>
          <div>
            {console.log(selected)}
            {selected ? (
              <div>
                <CommentArea id={props.book.asin} />
                <AddComment id={props.book.asin} />
              </div>
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SingleBook;
