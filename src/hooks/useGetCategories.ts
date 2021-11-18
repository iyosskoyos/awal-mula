import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://staging-am.awalmula.co.id/rest/default/V1/categories"
      );

      setCategories(response.data.children_data);
      console.log(response.data);

      setLoading(false);
    };
    getCategories();
  }, []);

  return { categories, loading };
};

export default useGetCategories;
