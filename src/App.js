import React from 'react';
import Language from './Language';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count:0};
    
  }
  
  

  render() {
    return (
      <div>       
        < Language 
        name='HTML'
        image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' />
        < Language
        name='JavaScript'
        image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg' />
        < Language
        name='React'
        image ='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg' />

      </div>
    );
  }
}

export default App;


/* カウントアップボタン
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
      
      </div>
    );
  }

*/

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

