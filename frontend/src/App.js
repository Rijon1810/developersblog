import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Layout/Header/Header";
import Login from "./Components/Login/Login"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./Components/Login/Signup";
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
