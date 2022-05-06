import { useEffect, useState } from 'react';

import { userService } from '../services/users/user.service';
import { IUser } from '../types/services/user.types';

export default function useAuthenticator() {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const user = await userService.fetchCurrentUser();
      setUser(user.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);

  return { user, isLoading };
}
