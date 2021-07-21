import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from "antd";

const AppLayout = ({ children }) => {
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
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      <div>{children}</div>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout;