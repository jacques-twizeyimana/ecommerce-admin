import '../../../styles/components/Molecules/Avatar/Avatar.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthenticator from '../../../hooks/useAuthenticator';
import { queryClient } from '../../../plugins/react-query';
import Dropdown from '../../Atoms/custom/Dropdown';


export default function Avatar() {
  const { user } = useAuthenticator();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwt_info');
    navigate('/login');
    queryClient.clear();
  };

  return (
    <div className="avatar d-flex">
      <span className="circle" />
      <Dropdown
        header={
          <p
            className="mb-0"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {user?.username}
          </p>
        }>
        <div className="px-3 py-2 shadow rounded bg-white">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            onClick={handleLogout}
            className="text-sm text-black text-decoration-none">
            Logout
          </a>
        </div>
      </Dropdown>
    </div>
  );
}
