import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  render() {
    return <div>顶级组件</div>;
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
