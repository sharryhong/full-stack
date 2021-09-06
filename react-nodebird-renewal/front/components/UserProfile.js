import React, { useCallback } from "react";
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from "../reducers";

const UserProfile = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
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

export default UserProfile;
