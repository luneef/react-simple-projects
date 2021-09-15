import { useState, useEffect } from "react";
import beaches from "./data";
import BackButton from "../../components/BackButton";
import "../../styles/portfoliosstyles/portfolios.css";
import { BsChevronRight, BsChevronLeft, BsGeoAlt } from "react-icons/bs";

// Beaches portfolio main component
const Portfolios = () => {
  const [selector, setSelector] = useState(0);
  const { id, name, location, info, image, travel } = beaches[selector];
  const [more, setMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Go to next beach function
  const nextSelect = () => {
    setSelector(() => {
      if (selector < beaches.length - 1) {
        return selector + 1;
      } else {
        return 0;
      }
    });
    setMore(false);
  };

  // Go to previous beach function
  const prevSelect = () => {
    setSelector(() => {
      if (selector > 0) {
        return selector - 1;
      } else {
        return beaches.length - 1;
      }
    });
    setMore(false);
  };

  return (
    <section className="portfolio-container">
      <BackButton />
      <h1 className="portfolio-title">Top Beaches In The Philippines</h1>
      <div className="portfolio-card">
        <BsChevronLeft
          className="left-select"
          title="Previous"
          onClick={prevSelect}
        />
        <img className="beach-image" src={image} alt={name + " Image"} />
        <BsChevronRight
          className="right-select"
          title="Next"
          onClick={nextSelect}
        />
        <h2 className="beach-name">
          {id}. {name}
        </h2>
        <h3 className="beach-location">
          <BsGeoAlt className="loc-icon" />
          {location}
        </h3>
        <h4 className="beach-info">
          {more ? info : `${info.substring(0, 250)}...`}
          <button className="more-btn" onClick={() => setMore(!more)}>
            {more ? "See Less" : "Read More"}
          </button>
          {more ? (
            <p className="beach-travel">Best time to travel: {travel}</p>
          ) : (
            ""
          )}
        </h4>
      </div>
    </section>
  );
};

export default Portfolios;
