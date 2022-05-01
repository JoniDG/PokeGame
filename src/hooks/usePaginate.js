import {useEffect , useState} from 'react'

export const usePaginate = (data ,quantityItems) => {
  
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(quantityItems);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data?.slice(firstIndex, lastIndex);

  const nextPage = () => {
    if (currentItems?.length < itemsPerPage) {
      return;
    } else {
      setcurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    } else {
      setcurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setcurrentPage(1);
  }, [data, itemsPerPage]);

  return [currentItems, currentPage, nextPage, prevPage];
};

