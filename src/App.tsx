import "../styles/app.scss";
import 'antd/dist/antd.css';

import React, {Component} from 'react';

export const App = (props) => {
  return (
    <>
      {props.children}
    </>
  )
}
export default App;
