import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import PropTypes from "prop-types";

const ButtonWrapper = Styled.div`
  margin-top: 10px;
`
const FormWrapper = Styled(Form)`
  padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // component에 props로 넘겨주는 함수는 꼭 useCallback 사용. 최적화 
  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, [id])
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [password])

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password])

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit">로그인</Button>
        <Link href="/signup"><a>회원가입</a></Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
}

export default LoginForm;