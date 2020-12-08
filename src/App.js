import React from 'react';

// function App()
// {
//   const greeting = "Hi, Tom!"
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return dom;
// }
function App()
{
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input tyep="text" onChange={() => {console.log("I am clicked.")}} />
    </React.Fragment>
  )
}

export default App;
