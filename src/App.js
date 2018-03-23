import React from 'react';
import Refs from './components/refs';

const ARRAY = [0,1,2,3,4,5];

class App extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      array: [...ARRAY],
      c: 0
    };
  }
  change = () => {
    // ARRAY.push(ARRAY.length);
    // console.log(ARRAY);
    // this.setState({array: [...ARRAY]});

    let {c} = this.state;
    c+=5;
    this.setState({c});
  }
  render() {
    // const content = [];
    // for (let i of this.state.array){
    //   content.push(<p key={i}>{i}</p>);
    // }
    return (
      <div className="App">
        {/* {this.state.array.map((element, idx)=>{
          return <span key={idx}>{element} </span>;
        })} */}
        {/* {this.state.c}
        <br />
        <button onClick={this.change}>change</button> */}
        <Refs />
      </div>
    );
  }
}

export default App;
