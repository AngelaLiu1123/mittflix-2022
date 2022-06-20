import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchShows } from "../services/tmdb-api";
import TitleList from "../components/TitleList";
import Pagination from "../components/Pagination";
import ReactPaginate from "react-paginate";

const SearchPage = ({ watchList, toggle }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");
  const page = params.get("page");

  const [titles, setTitles] = useState(null);
  const [pageCount, setPageCount] = useState(page);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    if (query) {
      searchShows(query, pageCount).then((data) => {
        setTitles(data.results);
        setTotalPage(data.total_pages);
      });
    }
  }, [query, pageCount]);

  const handlePreviousClick = () => {
    setPageCount(+pageCount - 1);
  };

  const handleNextClick = () => {
    setPageCount(+pageCount + 1);
  };

  return (
    <>
      {titles ? (
        <TitleList
          name={
            pageCount === totalPage
              ? "End of Results"
              : `shows matching your search: "${query}"`
          }
          titles={titles}
          watchList={watchList}
          toggle={toggle}
        />
      ) : (
        <h2>No matching results</h2>
      )}
      <Pagination
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
        totalPage={totalPage}
        pageCount={pageCount}
      />
    </>
  );
};

export default SearchPage;
