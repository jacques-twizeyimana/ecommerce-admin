import { AxiosError } from 'axios';
import { FormEvent, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import UserContext from '../contexts/UserContext';
import { queryClient } from '../plugins/react-query';
import { userStore } from '../store/user.store';

let created = false;

export default function useAuthenticator() {
  const { user, setUser } = useContext(UserContext);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [_isError, setIsError] = useState(false);
  const [_error, setError] = useState<AxiosError<Response>>();
  const [userAvailabe, setUserAvailable] = useState(false);
  const { refetch } = userStore.getCurrentUser();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const fetchData = async () => {
    setIsUserLoading(true);
    const { data, isSuccess, isError, error } = await refetch();

    if (isSuccess) {
      setUser((_old) => {
        return data?.data;
      });
      setUserAvailable(true);
    }

    if (error) setError(error as any);

    setIsError(isError);
    setIsUserLoading(false);
  };

  useEffect(() => {
    if (!created) {
      fetchData();
      created = true;
    }
  }, []);


  return {
    user,
    userLoading: isUserLoading,
    userAvailabe,
    isLoggingIn,
    isError: _isError,
    error: _error,
  };
}
