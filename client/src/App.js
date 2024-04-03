import { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import "./App.css";

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
    <Register />
  </Fragment>
);

export default App;
