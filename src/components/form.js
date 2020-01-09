import React, { Component } from "react";

class Form extends Component {
  state = {
    name: null
  };
  get = e => {
    this.setState({
      name: e.target.value
    });
  };
  set = e => {
    e.preventDefault();
    this.props.generateApi(this.state.name);
  };
  render() {
    return (
      <div style={container}>
        <h1 style={{ color: "hsl(0, 10%, 50%)" }}>Recipe Finder</h1>
        <div style={form}>
          <form >
            <input
              style={input}
              placeholder="Enter the Name of the Dish"
              id="name"
              onChange={this.get}
            />
            <button style={button} onClick={this.set}  >Get Ingredient</button>
          </form>
        </div>
      </div>
    );
  }
}
const container = {
  marginTop: "10px",
  textAlign: "center",
  marginBottom: "20px"
};
const form = {
  marginTop: "20px"
};
const input = {
  padding: "5px",
  outline: "none",
  border: "none",
  textAlign: "center",
  width: "200px",
  borderRadius: "10px"
};
const button = {
  marginLeft: "20px",
  outline: "none",
  padding: "5px",
  border: "none"
};

export default Form;
