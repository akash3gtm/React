import React from 'react';
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {greet:'I am the first statement!'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(greetI, greetII){
    if(this.state.greet === greetI)
      this.setState({greet:greetII});
    else
      this.setState({greet:greetI});
  }

  render()
  {
    const greetI = 'I am the first statement!';
    const greetII = 'I am the second statement!';
     return (
      <div className="App">
        <p>{this.state.greet}</p>
        <button onClick = {()=>this.handleClick(greetI, greetII)} >
          Click here!
        </button>
      </div>
    )
  }
}

export default App;