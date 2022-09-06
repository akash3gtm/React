import React from 'react'
import { btns } from '../../constants/calc_buttons'

class CalculatorPad extends React.Component{
  constructor(props){
    super(props);
    this.handleClear = this.handleClear.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack(){
    let x = this.props.query.slice(0, -1);
    this.props.setQuery(x);
  }

  handleClear(e){
      this.props.setQuery('');
  }

  handleButton(e){
    if(e.currentTarget.value === '='){
        this.props.setQuery(`${eval(this.props.query)}`);
    }
    else{
        let entry = e.currentTarget.value;
        let x = this.props.query;
        //condition to check if one algebric symbol is already used or not
        if( (entry === '+' || entry === '-' || entry === '*' || entry === '/')
        &&(x.endsWith('+')||x.endsWith('-')||x.endsWith('*')||x.endsWith('/')) ){
            this.props.setQuery(this.props.query.slice(0, -1) + `${e.currentTarget.value}`);
        }
        else
            this.props.setQuery(this.props.query + `${e.currentTarget.value}`);
    }
  }

  render(){
    return(
      <div className='calcPad'>
        <button className='btn' value='(' onClick={this.handleButton}> <h2>(</h2> </button>
        <button className='btn' id='clr' onClick={this.handleClear} > <h2>CE</h2></button>
        <button className='btn' id='bkspc' onClick={this.handleBack} > <h2>C</h2> </button>
        <button className='btn' value=')'  onClick={this.handleButton}> <h2>)</h2> </button>
        {btns.map((value,index)=>{
            return <button className='btn' id={'btn'+index} value={value} key={index} onClick={this.handleButton}><h2>{value}</h2></button>
          }
          )}
      </div>
    )
  }
}

export default CalculatorPad;