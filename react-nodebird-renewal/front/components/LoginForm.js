import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from "prop-types";
import useInput from '../hooks/useInput';

const ButtonWrap = styled.div`
  margin-top: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <ButtonWrap>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </ButtonWrap>
    </Form>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func
}

export default LoginForm;