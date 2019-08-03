import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Gender from './components/gender/gender';
import IsJedi from './components/isJedi/isJedi';
import Avatar from './components/avatar/avatar';
import Result from './components/result/result';

function App() {

  const [dataName, changeDataName] = useState();
  const [dataGender, changeDataGender] = useState();
  const SignUp = () => {
    return <Gender title='Cadatrar' changeDataName={changeDataName} changeDataGender={changeDataGender} />
  }
  const ChoiseSide = () => {
    const [side, changeSide] = useState();
    return <IsJedi title='Lado da Força' side={side} changeSide={changeSide} />
  }
  const ChoiseAvatar = () => {
    const [avatar, changeAvatar] = useState();
    return <Avatar title='Miniatura Personalizada' avatar={avatar} changeAvatar={changeAvatar} />
  }
  const FinishSignUp = () => {
    console.log("name ", dataName, dataGender)
    return <Result title='Finish' />
  }
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={SignUp} />
        <Route path="/isjedi/" component={ChoiseSide} />
        <Route path="/users/" component={ChoiseAvatar} />
        <Route path="/end/" component={FinishSignUp} />
      </Router>
    </div>
  );
}

export default App;
