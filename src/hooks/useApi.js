import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const request = async () => {
    // setIsLoading(true);
    const response = await apiFunc();
    // setIsLoading(false);

    if (!response.ok) return console.warn(response.data.message);
    setData(response.data);
  };

  return { data, setData, request };
};
