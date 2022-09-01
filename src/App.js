import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    this.state = {title : '', greet : ''};
    //initialise the states
  }

  componentDidMount(){
    this.update = setInterval(update(this.state), 60*1000);
  }

  render(){
    const {screen} = this.state;
    return <React.Fragment>
    <h2 className={title}>
      {greet}
    </h2>
    </React.Fragment> ;
  }

}

function update(state) {
  const hrs = new Date().getHours();
  if (hrs < 12){
    state.title = 'Morning';
    state.greet = 'Good Morning from React. You are having coffee with me.';
  }
  else if (hrs >= 12 && hrs <= 17){
    state.title = 'Noon';
    state.greet = 'Good Afternoon from React. Wanna lunch with me?';
  }
  else if (hrs >= 17 && hrs <= 24){
    state.title = 'Evening';
    state.greet = 'Good Evening from React. Lets drink together.';
  }
}


export default App;