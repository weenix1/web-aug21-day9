import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  /* state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
    },
  }; */

  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.id,
  });

  let sendComment = async (e) => {
    e.preventDefault();

    let data = JSON.stringify(comment);
    console.log("JSON DATA HERE", data);
    console.log(props.id);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2MzIzMTI1ODIsImV4cCI6MTYzMzUyMjE4Mn0.tSp1EnE2_Y3RGsIwKu7LMvWNTMZBAt-XyxQPWXlnb60",
          },
        }
      );
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter your comment here"
            value={comment.comment}
            onChange={(e) =>
              /*  this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                }) */
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              /* this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              }) */
              setComment({
                ...comment,
                rate: e.target.value,
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

        <Button variant="primary" type="submit">
          Add comment
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
