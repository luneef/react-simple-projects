import "../styles/closebutton.css";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Link } from "react-router-dom";

// Back(Exit) Button Component
const BackButton = () => {
  return (
    <div className="back-btn">
      <Link to="/">
        <BsFillBackspaceFill className="close-btn" />
        <p className="close-word">Close</p>
      </Link>
    </div>
  );
};

export default BackButton;
