import { useState } from 'react';
import { callGet } from '../modules/Dashboard/api';

export const useGet = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const waitFor = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await callGet(path);
      await waitFor(1000); // To purposely display loader
      setData(response);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  return { getData, data, isLoading, error };
};
