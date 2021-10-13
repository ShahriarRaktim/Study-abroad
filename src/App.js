import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import Embassy from "./components/Embassy/Embassy";
import Scholarship from "./components/Scholarship/Scholarship";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import Home from "./components/Home/Home";
import Logout from "./components/Register/Register";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/information">
              <Information></Information>
            </Route>
            <PrivateRoute path="/embassy">
              <Embassy></Embassy>
            </PrivateRoute>
            <PrivateRoute path="/scholarship">
              <Scholarship></Scholarship>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
