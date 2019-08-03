import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Gender from './components/gender/gender';
import IsJedi from './components/isJedi/isJedi';
import Avatar from './components/avatar/avatar';
import Result from './components/result/result';

function App() {

  const [dataName, changeDataName] = useState();
  const [dataGender, changeDataGender] = useState();
  const [dataSide, changeDataSide] = useState();
  const [dataAvatar, changeDataAvatar] = useState();

  const SignUp = () => {
    return <Gender title='Cadatrar' changeDataName={changeDataName} changeDataGender={changeDataGender} />
  }
  const ChoiseSide = () => {
    return <IsJedi title={`${dataName || 'Desconhecido'} Escolha o lado da força!!!`} changeDataSide={changeDataSide} />
  }
  const ChoiseAvatar = () => {
    return <Avatar title='Miniatura Personalizada' changeDataAvatar={changeDataAvatar} />
  }
  const FinishSignUp = () => {
    return <Result title={`Bem-vindo, ${dataName || 'Desconhecido'}!`}  name={dataName} gender={dataGender} side={dataSide} avatar={dataAvatar} />
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
