import { useEffect, useState } from "react";

export const useFilter = (array, key) => {
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  

  useEffect(() => {
    const filter = () => {
      const filtered = array?.filter((item) => {
        return item[key]?.toLowerCase().includes(search.toLowerCase());
      });
  
      if (filtered?.length > 0) {
        setFilteredArray(filtered);
      } else {
        setFilteredArray(null);
      }
    };
    filter();
  }, [search]);

  return [filteredArray, handleSearch];
};

