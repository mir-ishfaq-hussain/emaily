import react, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={Landing}></Route>
          <Route path="/surveys" exact component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveyNew}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);

// connect function connects a react component to redux store
// first argument is mapStateToProps, second is mapDispatchToProps
// if we don't need any state, we can pass null as the first argument
// actions is an object where each field is an action creator
// connect will bind each action creator to dispatch and pass them as props to the component
