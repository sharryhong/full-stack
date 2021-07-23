import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from 'next/link';

const LoginForm = () => {
  const [id, setId] =  useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
      </div>
      <div>
        <Button type="primary" htmlFor="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a>회원가입</a></Link>
      </div>
    </Form>
  )
};

export default LoginForm;
