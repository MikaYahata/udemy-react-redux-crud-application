import React, {Component} from 'react';

/*state 変更可能 クラスコンポーネントで利用できる機能 */
/*Appコンポーネントがカウンターコンポーネントを呼び出す*/
const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props){
    super(props)
    //console.log(this.state) // log = "undefined"
    this.state = {count: 0}
  }

  /**
   *  this.stateを設定するときは、this.setState()関数を必ず使う。
   * （renderとの連携が必要。this.stateを直接設定してしまうとrenderが動かない）
   */
  handlePlusButton = () => {
    //console.log("handlePlusButton");
    this.setState({ count: this.state.count + 1 });
    //console.log(this.state.count);
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // constructorが無かったら...
    // console.log(this.state) // log = "null"
    return  (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}



export default App;
