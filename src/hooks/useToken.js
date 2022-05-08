import { useEffect, useState } from "react";

import authStorage from "../../auth/authStorage";

export default useToken = () => {
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    authStorage.getToken().then((token) => setAuthToken(token));
  }, []);

  return authToken;
};
