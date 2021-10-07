import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import MyNavBar from "./components/MyNavBar";
import CommentArea from "./components/CommentArea";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/Registration";
import { useState } from "react";
const BookDetailsPage = () => {
  return (
    <>
      {""}

      <SingleBook books={fantasy[0]} />
      <CommentArea />
      {""}
    </>
  );
};
const App = () => {
  const [registration, setRegistration] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    comfirmpassword: "",
  });

  return (
    <Router>
      <div className="App">
        <MyNavBar />
        <WarningSign text="Watch out again!" />
        <MyBadge text="NEW!!" color="info" />
        <Route
          path="/register"
          exact
          render={(routerProps) => (
            <Registration
              {...routerProps}
              registration={registration}
              setRegistration={setRegistration}
            />
          )}
        />

        <header className="App-header">
          <Route path="/books/:" component={BookDetailsPage} />
          <Route
            path="/home"
            exact
            render={() => <BookList books={fantasy} />}
          />
        </header>
      </div>
    </Router>
  );
};

export default App;
