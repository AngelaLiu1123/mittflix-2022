import { Link, useNavigate } from "react-router-dom";
import placeholder from "../assets/image-not-available.jpg";
import styles from "./Provider.module.css";

const Provider = ({ provider }) => {
  const { provider_id, logo_path, provider_name } = provider;
  let navigate = useNavigate();
  const handleClick = () => {
    navigate({ pathname: "/showsByProvider", search: `id=${provider_id}` });
  };
  const poster = logo_path
    ? `https://image.tmdb.org/t/p/w500/${logo_path}`
    : placeholder;
  return (
    <div onClick={handleClick} className={styles["movie"]}>
      {/* <Link to={`/ShowsByProvider?id=${provider_id}`}> */}
      <img src={poster} alt="Movie poster" />
      <div className={styles["overlay"]}>
        <div className={styles["title"]}>{provider_name}</div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Provider;
