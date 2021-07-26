import React from "react";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import FollowerList from "../components/FollowerList";

const Profile = () => {
  const followingList = [{ nickname: "sharry" }, { nickname: "kk" }, { nickname: 'ori'}];
  const followerList = [{nickname: 'hoho'}, {nickname: 'wow'}]

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowerList header="팔로워 목록" data={followerList}  />
    </AppLayout>
  );
};

export default Profile;
