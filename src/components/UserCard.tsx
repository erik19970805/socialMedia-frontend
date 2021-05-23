import React from 'react';
import { IUser } from '../interfaces/user.interface';
import Avatar from './Avatar';

const UserCard = ({ user, border }: { user: IUser; border: string }): JSX.Element => {
  const { avatar, username, fullname } = user;

  return (
    <div className={`d-flex p-2 align-item-center ${border}`}>
      <Avatar src={avatar} size="big-avatar" />
      <div className="ml-1" style={{ transform: 'translateY(-2px)' }}>
        <span className="d-block">{username}</span>
        <small style={{ opacity: 0.7 }}>{fullname}</small>
      </div>
    </div>
  );
};

export default UserCard;
