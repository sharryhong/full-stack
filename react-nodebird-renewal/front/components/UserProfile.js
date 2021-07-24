import React, { useCallback } from "react";
import { Card, Avatar, Button } from 'antd';
import PropTypes from "prop-types";

const UserProfile = ({ setIsLoggedIn }) => {
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          트윗용
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>H</Avatar>} title="Sharry" />
      <Button onClick={handleLogout}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func,
};

export default UserProfile;
