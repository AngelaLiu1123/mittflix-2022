import { Link } from "react-router-dom";
import placeholder from "../assets/image-not-available.jpg";

const Provider = ({ provider }) => {
  const { logo_path, provider_name } = provider;
  // console.log(logo_path);
  // console.log(provider_name);
  const poster = logo_path
    ? `https://image.tmdb.org/t/p/w500/${logo_path}`
    : placeholder;
  return (
    <div className="movie">
      <Link to={`/details/8`}>
        <img src={poster} alt="Movie poster" />
        <div className="overlay">
          <div className="title">{provider_name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Provider;
