import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { url } from "./Constants";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    try {
      const response = await axios.get("http://10.2.0.4:80/testAPI", {
        timeout: 5000, // Specify the timeout value in milliseconds (e.g., 5000 for 5 seconds)
      });
      this.setState({ apiResponse: response.data });
    } catch (error) {
      console.error("There was a problem with the Axios request:", error);
      // Handle the error gracefully, e.g., set state to indicate an error occurred
    }
    console.log(url);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
