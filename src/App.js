import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Gender from './components/gender/gender';
import IsJedi from './components/isJedi/isJedi';
import Avatar from './components/avatar/avatar';
import Result from './components/result/result';

function App() {

  const SignUp = () => {
    return <Gender title='Cadatrar' />
  }
  const ChoiseSide = () => {
    return <IsJedi title='Lado da Força' />
  }
  const ChoiseAvatar = () => {
    return <Avatar title='Miniatura Personalizada' />
  }
  const FinishSignUp = () => {
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
