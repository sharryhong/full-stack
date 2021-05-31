import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from "antd";
import Styled from 'styled-components';

const SearchEl = Styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({ children }) => {
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
          <SearchEl />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>왼쪽메뉴</Col>
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