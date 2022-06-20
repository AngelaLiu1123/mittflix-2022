const Pagination = ({
  handlePreviousClick,
  handleNextClick,
  totalPage,
  pageCount,
}) => {
  return (
    <div>
      <button
        disabled={totalPage >= 1 && pageCount > 1 ? false : true}
        onClick={handlePreviousClick}
        style={{ color: "blue" }}
      >
        Previous
      </button>
      <button
        disabled={pageCount !== totalPage ? false : true}
        onClick={handleNextClick}
        style={{ color: "blue" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
