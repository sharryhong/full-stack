import React, { useState } from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSearch = value => console.log(value);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="nodebird">
          <Link href="/">
            <a>Nodebird</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search onSearch={onSearch} />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> }
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/sharryhong" target="_blank" rel="noreferrer noopener">Made by SharryHong</a>
        </Col>
      </Row>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout