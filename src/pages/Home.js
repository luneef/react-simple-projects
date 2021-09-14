import { Link } from "react-router-dom";
import "../styles/home.css";
import birthdayImg from "../images/projectthumbnails/bdaythumb.jpg";
import beachImg from "../images/projectthumbnails/beachthumb.jpg";
import menuImg from "../images/projectthumbnails/menuthumb.jpg";
import experienceImg from "../images/projectthumbnails/experiencethumb.jpg";
import phonebookImg from "../images/projectthumbnails/phonebookthumb.jpg";
import scrapbookImg from "../images/projectthumbnails/scrapbookthumb.jpg";

// Home(Homepage) Component
const Home = () => {
  return (
    <>
      <header className="header">
        <h1>Simple Projects</h1>
        <h4>Carl(Lunee) Fernandez</h4>
      </header>

      <main className="main">
        {/* Birthday Reminder Project */}
        <div className="project-container">
          <div className="project-inner">
            <div className="project-front">
              <img src={birthdayImg} alt="Birthday Reminder Project" />
            </div>
            <div className="project-back bday-back">
              <Link className="link" to="/birthdayreminder">
                <h2 className="bday-link">Proceed To Project</h2>
              </Link>
              <h3>Utilizations:</h3>
              <p>( Sass Preprocessor )</p>
              <p>( react-toastify )</p>
              <p>( useState, useEffect )</p>
            </div>
          </div>
        </div>

        {/* Philippine Beaches Project */}
        <div className="project-container">
          <div className="project-inner">
            <div className="project-front">
              <img src={beachImg} alt="Philippine Beaches Project" />
            </div>
            <div className="project-back beaches-back">
              <Link className="link" to="/phbeaches">
                <h2 className="beaches-link">Proceed To Project</h2>
              </Link>
              <h3>Utilizations:</h3>
              <p>( Sass Preprocessor )</p>
              <p>( react-icons )</p>
              <p>( useState, useEffect )</p>
            </div>
          </div>
        </div>

        {/* Food Menu Project */}
        <div className="project-container">
          <div className="project-inner">
            <div className="project-front">
              <img src={menuImg} alt="Food Menu Project" />
            </div>
            <div className="project-back menu-back">
              <Link className="link" to="/foodmenu">
                <h2 className="menu-link">Proceed To Project</h2>
              </Link>
              <h3>Utilizations:</h3>
              <p>( Sass Preprocessor )</p>
              <p>( useState, useEffect )</p>
            </div>
          </div>
        </div>

        {/* Job Experiences Project */}
        <div className="project-container">
          <div className="project-inner">
            <div className="project-front">
              <img src={experienceImg} alt="Job Experiences Project" />
            </div>
            <div className="project-back experience-back">
              <Link className="link" to="/jobexperiences">
                <h2 className="experience-link">Proceed To Project</h2>
              </Link>
              <h3>Utilizations:</h3>
              <p>( Sass Preprocessor )</p>
              <p>( Fetch API )</p>
              <p>( useState, useEffect )</p>
            </div>
          </div>
        </div>

        {/* Phonebook Project */}
        <div className="project-container">
          <div className="project-inner">
            <div className="project-front">
              <img src={phonebookImg} alt="Phonebook Project" />
            </div>
            <div className="project-back phonebook-back">
              <Link className="link" to="/phonebook">
                <h2 className="phonebook-link">Proceed To Project</h2>
              </Link>
              <h3>Utilizations:</h3>
              <p>( Sass Preprocessor )</p>
              <p>( react-icons )</p>
              <p>( react-toastify )</p>
              <p>( localStorage )</p>
              <p>( useState, useEffect, useRef )</p>
            </div>
          </div>
        </div>

        {/* Trip Scrapbook Project */}
        <div className="project-container">
          <div className="project-inner">
            <div className="project-front">
              <img src={scrapbookImg} alt="Trip Scrapbook Project" />
            </div>
            <div className="project-back scrapbook-back">
              <Link className="link" to="/tripscrapbook">
                <h2 className="scrapbook-link">Proceed To Project</h2>
              </Link>
              <h3>Utilizations:</h3>
              <p>( Sass Preprocessor )</p>
              <p>( Firebase )</p>
              <p>( react-icons )</p>
              <p>( react-toastify )</p>
              <p>( Context API )</p>
              <p>( useState, useEffect, useRef )</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <h3>Copyright &copy; 2021</h3>
        <p>All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;
