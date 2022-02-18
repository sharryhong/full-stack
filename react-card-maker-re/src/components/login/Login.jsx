import React from "react";
import Button from "components/base/Button";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.target.innerText);
  };

  return (
    <section>
      <h2>Login</h2>
      <ul>
        <li>
          <Button name="Google" onClick={onLogin} />
        </li>
        <li>
          <Button name="Github" onClick={onLogin} />
        </li>
      </ul>
    </section>
  );
};

export default Login;
