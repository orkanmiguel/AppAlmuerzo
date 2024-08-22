import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

const useFecth = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

export default useFecth;

/* "http://localhost:3001/Meals" */
