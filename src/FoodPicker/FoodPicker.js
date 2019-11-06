import React, { Component } from "react";
import "./FoodPicker.css"

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Res: "",
      ResName: "",
      toggle: false
    };
  }

  CopyName(e) {
    this.setState({
      Name: e.target.value
    });
  }
  CopyRes(e) {
    this.setState({
      Res: e.target.value
    });
  }

  handleChange(e) {
    this.setState({
      ResName: e.target.value
    });
  }

  Expand() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const cls = this.state.toggle ? '' : 'Expand-hide'
    return (
      <div>
        <h1>Order special meal:</h1>
        <div>
          Your name:
          <input type="text" onKeyUp={this.CopyName.bind(this)} />
        </div>
        <div>
          Choose restaurant:
          <select value={this.state.ResName} onChange={this.handleChange.bind(this)}>
            <option value="Frangelico">Frangelico</option>
            <option value="Mina Tomei">Mina Tomei</option>
            <option value="Rak Basar">Rak Basar</option>
            <option value="Texas BBQ">Texas BBQ</option>
          </select>
        </div>
        <div>
          Favorite meal:
          <input type="text" onKeyUp={this.CopyRes.bind(this)} />
        </div>
        <div>
          Want a desert?
          <input type="checkbox" onChange={this.Expand.bind(this)}/>
        </div>

        <div>
          <h2>Your reservation:</h2>
          Hi {this.state.Name}! <br />
          We are glad you want to reserve a table at {this.state.ResName} .
          <br />
          We will make sure that your favorite meal, {this.state.Res} is
          available.
          <br />
          <span className={cls}>Additionally, our chef will make a special desert for you!</span>
          <br />
        </div>
      </div>
    );
  }
}

export default FoodPicker;
