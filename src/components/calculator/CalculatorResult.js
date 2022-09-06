import React from 'react'

class CalculatorResult extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    return(
    <h1 className='calcResult'>
        {this.props.query === '' ? `0` : this.props.query}
    </h1>
    )
  }
}

export default CalculatorResult