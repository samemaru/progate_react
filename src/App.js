import React from 'react';
import Language from './Language';
import Lesson from './Lesson';

class Lesson extends React.Component{
  render(){
    return(
        <div>
          <main />

        </div>
    )
  }
}

export default App;

/*
class App extends React.Component {
  render() {
    // 指定されたコードを貼り付けてください
    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
    ];
  
    return (
      <div>
        <h1>言語一覧</h1>
        <div className='language'>

          {/* mapメソッドを用いて、Languageコンポーネントを表示 }
          {languageList.map((languageItem) => {
            return (
              // Languageコンポーネントを呼び出し、その中でpropsを渡す
              <Language 
              name = {languageItem.name}
              image = {languageItem.image} />
              
            )
          })}
          
        </div>
      </div>
    );
  }
}


*/





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