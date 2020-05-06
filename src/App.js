import React from 'react';
import Language from './Language';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count:0};
    
  }
  
  handleClick(){
    this.setState({count : this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.count}
          
        </h1>
        <button onClick={()=>{this.handleClick()}}>+</button>
        
        < Language />
        < Language />
        < Language />

      </div>
    );
  }
}

export default App;




/* I-1~12 : 切り替えボタン


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
      // JSXは1つの要素しか入れられない！
      <div>
        <h1>こんにちは！{this.state.name}さん！</h1>
        <button onClick={()=>{this.handleClick('はるた')}}>はるた</button>
        <button onClick={()=>{this.handleClick('あきお')}}>あきお</button>
      </div>
    );
  }
}
*/

