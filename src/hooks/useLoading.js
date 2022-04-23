import AuthContext from '../../auth/context';
import { useContext } from 'react';

export default useLoading = () => {
  const { isLoading, setIsLoading } = useContext(AuthContext);

  return { isLoading, setIsLoading };
};
