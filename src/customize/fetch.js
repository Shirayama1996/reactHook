import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  let [allData, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        setData(data.reverse());
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setIsError(true);
        alert(e.message);
      }
    };

    fetchData();

    return () => {
      setData([]);
    };
  }, [url]);
  return {
    allData,
    loading,
    isError,
  };
};

export default useFetch;
