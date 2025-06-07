import { useState, useCallback } from "react";

const useFetch = (asyncFunc) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchAsync = useCallback(
    async (...args) => {
      try {
        setIsLoading(true);
        setFetchError(null);
        return await asyncFunc(args);
      } catch (err) {
        setFetchError(err);
        setIsLoading(false);
        return;
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunc]
  );

  return { isLoading, fetchError, fetchAsync };
};

export default useFetch;
