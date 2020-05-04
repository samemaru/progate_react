import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    // constructor(props) {super(props); は、定型文だと思っていい。
    this.state = {name:'はるた'};
    this.state = {count: 0};
  }

  handleClick(name){
    this.setState({name: name});
  }



  render() {
    return (
      <div>
        <h1>こんにちは！あああ{this.state.name}さん！</h1>
        <button onClick={()=>{this.handleClick('はるた')}}>はるた</button>
        <button onClick={()=>{this.handleClick('あきお')}}>あきお</button>
      </div>

      <div>
      <h1>
        {this.state.count}
      </h1>
      {/* <button>タグ内でonClickイベントを追加してください */}
      <button onClick ={() => {this.handleClick()}}>+</button>

</div>

    );
  }
}

// 1-12 countup
handleClick(){
  this.setState({count: this.state.count +1});
  }

  
  // handleClickメソッドを定義してください
 
  
  render() {
    return (

    );
  }
}

export default App;
