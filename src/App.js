import React from 'react';
import './App.css';

function App() {
  const hrs = new Date().getHours();
  let greet = '';
  let title = '';
  if (hrs < 12){
    title = 'Morning';
    greet = 'Good Morning from React. You are having coffee with me.';
  }
  else if (hrs >= 12 && hrs <= 17){
    title = 'Noon';
    greet = 'Good Afternoon from React. Wanna lunch with me?';
  }
  else if (hrs >= 17 && hrs <= 24){
    title = 'Evening';
    greet = 'Good Evening from React. Lets drink together.';
  }
  return <React.Fragment>
  <h2 className={title}>
    {greet}
  </h2>
  </React.Fragment> ;
}

export default App;
