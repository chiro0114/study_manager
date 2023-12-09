import React from 'react';
import Profile from './Profile';
import WithAuthProvider from '@/provider/WithAuthProvider';

const ProfilePage = () => {
  return (
    <WithAuthProvider>
      <Profile />
    </WithAuthProvider>
  );
};

export default ProfilePage;
