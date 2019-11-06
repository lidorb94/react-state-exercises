import React, { Component } from "react";
import "./Board.css";

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blue1: true,
      blue2: true,
      blue3: true
    };
  }

  ChangeBorderColor1() {
    this.setState({
      blue1: false,
      blue2: true,
      blue3: true
    });
  }

  ChangeBorderColor2() {
    this.setState({
      blue1: true,
      blue2: false,
      blue3: true
    });
  }

  ChangeBorderColor3() {
    this.setState({
      blue1: true,
      blue2: true,
      blue3: false
    });
  }

  render() {
    let btn_class1 = this.state.blue1
      ? "Board-option-blue"
      : "Board-option-red";
    let btn_class2 = this.state.blue2
      ? "Board-option-blue"
      : "Board-option-red";
    let btn_class3 = this.state.blue3
      ? "Board-option-blue"
      : "Board-option-red";

    return (
      <div className="Board">
        <h1>Choose board:</h1>
        <div className="boards">
          <div
            className={btn_class1}
            onClick={this.ChangeBorderColor1.bind(this)}
          >
            1
          </div>
          <div
            className={btn_class2}
            onClick={this.ChangeBorderColor2.bind(this)}
          >
            2
          </div>
          <div
            className={btn_class3}
            onClick={this.ChangeBorderColor3.bind(this)}
          >
            3
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
