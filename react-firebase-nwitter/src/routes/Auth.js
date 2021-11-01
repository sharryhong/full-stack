import React, { useState } from "react";
import { authService } from 'fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if(name === 'email') { 
      setEmail(value);
    } else if(name === 'password') { 
      setPassword(value);
    }
  }
  const onSubmit = async(event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account 
        data = await createUserWithEmailAndPassword(authService, email, password)
      } else {
        // login 
        data = await signInWithEmailAndPassword(authService, email, password)
      }
      console.log('data', data);
      
    } catch(err) {
      setError(err.message);
    }
  }
  // const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="email" required value={email} onChange={onChange} />
        <input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
        <input type="submit" value={newAccount ? "Create Account" : "Login"} />
        <p>{ error }</p>
      </form>
      <div>
        <button onClick={() => setNewAccount(true)}>회원가입</button>
        <button onClick={() => setNewAccount(false)}>로그인</button>
      </div>
      <div>
        <button type="button">Continue with Google</button>
        <button type="button">Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;