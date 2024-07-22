import { useEffect, useState } from "react";
import axios from "axios";

// const rapidApiKey = process.env.RAPID_API_KEY;

export const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": process.env.EXPO_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: query,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);
      setData(res.data.data);
      // setData([]);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
