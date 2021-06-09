import React, { useState, useCallback } from "react";
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import { Form, Input } from 'antd';

const Signup = () => {
  const [id, setId] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, [])
  const [nickname, setNickname] = useState('');
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value)
  }, [])
  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])
  const onSubmit = useCallback(() => {

  }, [])

  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" value={password} required onChange={onChangePassword} />
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup
