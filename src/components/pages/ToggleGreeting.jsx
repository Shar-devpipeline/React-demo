import { Component } from "react";

class ToggleGreeting extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
    };
  }

  handleGreeting = () => {
    this.setState((prevState) => ({
      greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
    }));
  };

  render() {
    return (
      <div>
        <h3>{this.state.greeting}</h3>
        <div>
          <button onClick={this.handleGreeting}>Toggle Me</button>
        </div>
      </div>
    );
  }
}

export default ToggleGreeting;
