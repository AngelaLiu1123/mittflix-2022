import { useEffect, useState } from "react";
import { getAllProviders } from "../services/tmdb-api";
import Provider from "../components/Provider";

const ProviderList = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getAllProviders().then((results) => setProviders(results));
  }, []);
  return (
    <div className="titleList">
      <div className="title">
        <h1>Provider List</h1>
        <div className="titles-wrapper">
          {providers ? (
            providers.map((provider) => (
              <Provider key={provider.provider_id} provider={provider} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderList;
