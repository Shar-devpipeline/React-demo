import { Component } from "react";

class ShowHideToggle extends Component {
  constructor() {
    super();
    this.state = {
      visible: "true",
    };
  }

  handleShowHide = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <h3 className="text">{this.state.visible && "Hide Me"}</h3>
        <div className="visible-btn">
          <button onClick={this.handleShowHide}>
            {this.state.visible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  }
}

export default ShowHideToggle;
