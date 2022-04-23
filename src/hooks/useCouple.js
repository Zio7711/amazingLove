import AuthContext from '../../auth/context';
import { useContext } from 'react';

export default useCouple = () => {
  const { couple, setCouple } = useContext(AuthContext);

  return { couple, setCouple };
};
