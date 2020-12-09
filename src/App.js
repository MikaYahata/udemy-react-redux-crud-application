import React from 'react';

// class App extends Component
// {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input tyep="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//   }
// }

// function App()
// {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input tyep="text" onChange={() => {console.log("I am clicked.")}} />
//     </React.Fragment>
//   )
// }

/*Props 属性（メンバ）定義機能*/
const App = () => {
  const profiles = [
    {name: "Taro", age:10},
    {name: "Hanako", age:5},
    {name: "NoName"}
  ];

  return  (
    <div>
      {
        profiles.map((profile, index) => {
          return  <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return  <div>Hi, Iam {props.name}, and {props.age} years old! </div>
}

/*defaultProps デフォルト値定義機能*/
User.defaultProps = {
  age: 1
}

export default App;
