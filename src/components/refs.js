import React from 'react';

export default
class Refs extends React.Component {
  change = () => {
    const mainValue = this.refs.a.value;
    for (let i in this.refs)
      this.refs[i].value = mainValue;
  }
  render(){
    return([
      <input
        placeholder='main'
        ref="a"
        key="1"
        type="text"
        onChange={this.change}
      />,
      <input ref="b" key="2" type="text" />,
      <input ref="c" key="3" type="text" />,
      <input ref="d" key="4" type="text" />,
      <input ref="e" key="5" type="text" />,
      <input ref="f" key="6" type="text" />
    ]);
  }
}