import React from 'react';
import ReactDOM from 'react-dom';


function App(){
  return React.createElement("div", {}, "Hello maan");
}


ReactDOM.render(App(), document.getElementById('root'));