import { useState } from 'react';
import './index.css';

const Login = () => {
  //hoops
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const clickHandler = () => {
    alert('login in successfully' + name + ',' + pwd);
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const onChangeOwHandler = (e) => {
    setPwd(e.target.value);
  }
  return (
    <div className="login">
      <div>username:<input onChange={onChangeNameHandler}/></div>
      <div>password:<input type="password" onChange={onChangeOwHandler}/></div>
      <div><button onClick={clickHandler}>sign in</button></div>
    </div>
  );
}

export default Login;
