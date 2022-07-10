import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import CreateUser from "./components/create-user.component";
import Write from "./components/Write";

import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: [],
      busy: false,
      postData: [],
    };
  }

  componentDidMount() {
    console.log(this.state.data);
    axios
      .get("http://localhost:5001/users/")
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.error(err));

    console.log(this.state.postData);
    axios
      .get("http://localhost:5001/posts/")
      .then((res) => this.setState({ postData: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Router>
        <br />
        <Route path="/" exact component={Login} />
        <Route path="/create" component={CreateUser} />
        <Route
          path="/userlist"
          render={(props) => <UserList products={this.state.data} {...props} />}
        />
        <Route
          path={"/homepage/:id"}
          render={(props) => (
            <HomePage
              products={this.state.data}
              posts={this.state.postData}
              {...props}
            />
          )}
        />
        <Route
          path={"/write/"}
          render={(props) => <Write products={this.state.data} {...props} />}
        />
      </Router>
    );
  }
}
