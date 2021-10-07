import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteComment from "./DeleteComment";

const CommentArea = (props) => {
  /* state = {
    comments: [],
  }; */

  const [comments, setComments] = useState([]);

  // componentDidMount is a lifecycle method happening AFTER the initial render
  // componentDidMount happens JUST ONCE for the whole lifecycle of the component
  // because of this it's the PERFECT PLACE for EXPENSIVE OPERATIONS (i.e. fetches)

  let fetchComments = async () => {
    try {
      console.log("here", props.id);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2MzM2MTE3NzUsImV4cCI6MTYzNDgyMTM3NX0.XZ654Z7WqrFmbY8CyQxNZio1rQCauWdW22oTTiUr9oY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);
        /* this.setState({
          comments: data,
        }); */

        setComments(data);
      } else {
        // we'll fall here if the URL is mispelled or if the server has a problem
        console.log("an error happened in the fetch!");
      }
    } catch (error) {
      // this is for a more generic error, something like an internet issue
      console.log(error);
    }
  };

  /*  componentDidMount = () => {
    // here I can write my code, being sure that it will be executed:
    // 1) just once!
    // 2) immediately after the initial invocation of render()
    console.log("this is componentDidMount!");
    // here we're going to do the fetch...
    this.fetchComments(this.props.id);
  }; */

  /* const componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.c !== this.props.c) {
      this.fetchComments();
    }
    console.log("this is componentDidUpdate!");
  }; */

  useEffect(() => {
    console.log("You updated the counter!");
    fetchComments(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  useEffect(() => {
    console.log("this is pretty much a componentDidMount!");
    fetchComments(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ListGroup>
        {comments ? (
          comments.map((c) => (
            <div>
              <ListGroup.Item key={c._id}>{c.comment}</ListGroup.Item>
              <DeleteComment id={c._id} />
            </div>
          ))
        ) : (
          <h1>Loading Comments</h1>
        )}
      </ListGroup>
    </>
  );
};

export default CommentArea;
