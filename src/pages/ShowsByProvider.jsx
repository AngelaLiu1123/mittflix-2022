import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getShowsByProviderId } from "../services/tmdb-api";
import TitleList from "../components/TitleList";

const ShowsByProvider = ({ watchList, toggle }) => {
  const [shows, setShows] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const providerId = params.get("id");

  useEffect(() => {
    if (providerId) {
      getShowsByProviderId(providerId).then((shows) => setShows(shows));
    }
  }, []);

  return (
    <>
      {shows ? (
        <TitleList
          //name={`shows matching your provider ID: ${providerId}`}
          titles={shows}
          watchList={watchList}
          toggle={toggle}
        />
      ) : (
        <h2>No matching results</h2>
      )}
    </>
  );
};

export default ShowsByProvider;
