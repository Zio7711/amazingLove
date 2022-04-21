import AuthContext from '../../auth/context';
import { useContext } from 'react';

export default useSocket = () => {
  const { socket } = useContext(AuthContext);

  return { socket };
};
