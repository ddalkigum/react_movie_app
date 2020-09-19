import React from "react";

class App extends React.Component {
  state = {
    ChampName: "Yasuo",
    Attack: 58,
  };

  add = () => {
    this.setState((current) => ({ Attack: current.Attack + 1 }));
  };
  minus = () => {
    this.setState({ Attack: this.state.Attack - 1 });
  };
  render() {
    return (
      <div>
        <h1>Damage: {this.state.Attack}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
