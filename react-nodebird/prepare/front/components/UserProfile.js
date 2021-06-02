import React, { useCallback } from 'react';
import { Card, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">크크<br/>0</div>,
        <div key="follwing">팔로잉<br/>0</div>,
        <div key="follwer">팔로워<br/>0</div>
      ]}
    >
      <Card.Meta
      avatar={<Avatar>SH</Avatar>}
        title="Sharry"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )

}

export default UserProfile;