import errorImage from "./error.png";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <img src={errorImage} alt="Error 404" />
    </div>
  );
};

export default Error;
