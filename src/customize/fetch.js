import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, isBlog) => {
  let [allData, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (!isBlog) {
          data.reverse();
        }
        setData(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setIsError(true);
      }
    };

    fetchData();

    return () => {
      setData([]);
    };
  }, [url, isBlog]);
  return {
    allData,
    loading,
    isError,
  };
};

export default useFetch;
