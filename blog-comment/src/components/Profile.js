import React from 'react';

const Profile = ({ author }) => {
  const { name, avatarUrl } = author;

  return (
    <div className="profile">
      <img src={avatarUrl} alt={`${name}의 프로필`} className="profile-image" />
      <span className="profile-name">{name}</span>
    </div>
  );
};

export default Profile;
