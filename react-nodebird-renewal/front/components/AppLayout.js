import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchEl = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const onSearch = (value) => console.log(value);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Nodebird</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <SearchEl placeholder="검색어 입력" onSearch={onSearch} />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/sharryhong"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by SharryHong
          </a>
        </Col>
      </Row>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout;