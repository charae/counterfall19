import React, { Component } from 'react';
import Counter from './components/counter/Counter';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { value: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }
  
  render() {
    return (
      <div>
        <h1 className='colored'>Counter Example</h1>
        <Counter name= 'yellow' age='56'/>
        <Counter name='purple'/>
        <Counter name= 'blue'/>
        <Counter name='black'/>

      </div>
    )
  }
}

// React.createElement(h1, counter)React.createElement(h1, counter)
// React.createElement(div, counter)

export default App;