import React from 'react';
import './App.css';
import CalculatorPad from './components/calculator/CalculatorPad';
import CalculatorResult from './components/calculator/CalculatorResult';

class App extends React.Component{
  constructor() {
    super();
    this.state = {query:''};
    this.setQuery = this.setQuery.bind(this);
  }

  setQuery(str){
    this.setState({query:str});
  }

  render() {
    return(
      <div className="App">
        <h2>Calculator</h2>
        <div className="calcContainer">
          < CalculatorResult query = {this.state.query}/>
          < CalculatorPad query = {this.state.query} setQuery = {this.setQuery}/>
        </div>
      </div>
    );
  }
}


// function App() {
//   const [query,setQuery]=useState('')

//   return (
//     <div className="App">
//      <div className="calcContainer">
//       <CalculatorResult query={query}/>
//       <CalculatorPad setQuery={setQuery} />
//      </div>
//     </div>
//   );
// }

export default App;
