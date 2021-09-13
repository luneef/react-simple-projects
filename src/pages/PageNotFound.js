import BackButton from "../components/BackButton";
import bg from "../images/catpage.jpg";

const PageNotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#5ce1e7",
      }}
    >
      <BackButton />
    </div>
  );
};

export default PageNotFound;
