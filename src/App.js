import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {title : '', greet : ''};
  }

  componentDidMount(){
    this.update = setInterval(this.check(), 60*1000);
  }

  componentWillUnmount() {
      clearInterval(this.update);
  }

  check() {
    const hrs = new Date().getHours();
    if (hrs < 12){
      this.setState({title : 'Morning',
      greet : 'Good Morning from React. You are having coffee with me.' });
    }
    else if (hrs >= 12 && hrs < 17){
      this.setState({title : 'Noon',
      greet : 'Good Afternoon from React. Wanna lunch with me?' });
    }
    else if (hrs >= 17 && hrs <= 24){
      this.setState({title : 'Evening',
      greet : 'Good Evening from React. Lets drink together.' });
    }
  }

  render(){
    const screen = this.state;
    return <React.Fragment>
    <h2 className={screen.title}>
      {screen.greet}
    </h2>
    </React.Fragment> ;
  }

}

export default App;