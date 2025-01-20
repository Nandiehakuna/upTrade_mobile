import { useState } from "react";
export const useApi = (ApiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(false);
    const response = await ApiFunc();
    setLoading(true);
    if (!response.ok) {
      setError(true);
    }
    setError(false);

    setListings(response.data);
  };

  return { data, loading, error, request };
};
