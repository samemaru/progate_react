import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    // constructor(props) {super(props); は、定型文だと思っていい。
    this.state = {name:'はるた'};
    
  }

  handleClick(name){
    this.setState({name: name});
  }



  render() {
    return (
      <div>
        <h1>こんにちは！{this.state.name}さん！</h1>
        <button onClick={()=>{this.handleClick('はるた')}}>はるた</button>
        <button onClick={()=>{this.handleClick('あきお')}}>あきお</button>
      </div>
    );
  }
}

export default App;
