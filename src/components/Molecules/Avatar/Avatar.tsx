import '../../../styles/components/Molecules/Avatar/Avatar.scss';

import React from 'react';

import useAuthenticator from '../../../hooks/useAuthenticator';

export default function Avatar() {
  const { user } = useAuthenticator();
  console.log('User', user);
  return (
    <div className="avatar d-flex">
      <span className="circle"></span>
      <p
        className="mb-0"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        {user?.username}
      </p>
    </div>
  );
}
