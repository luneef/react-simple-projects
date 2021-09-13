import { useState, useEffect } from "react";
import data from "./data";
import BackButton from "../../components/BackButton";
import "../../styles/birthdayreminderstyles/birthdayreminder.css";

const BirthdayList = ({ bdaylist, onClick }) => {
  return (
    <>
      {bdaylist.map((bday) => {
        return (
          <article className="bday-list" key={bday.id}>
            <img className="bday-image" src={bday.image} alt={bday.name} />
            <p className="bday-name">{bday.name}</p>
            <p className="bday-age">{bday.age} years old</p>
            <button
              className="remove-btn"
              onClick={() => onClick(bday.id, bday.name)}
            >
              Remove
            </button>
          </article>
        );
      })}
    </>
  );
};

const BirthdayReminder = () => {
  const [birthdays, setBirthdays] = useState(data);
  const [removedPerson, setRemovedPerson] = useState("");
  const [isChange, setIsChanged] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClick = (id, name) => {
    setBirthdays(birthdays.filter((bdays) => bdays.id !== id));
    setRemovedPerson(name);
    setIsChanged(true);
  };

  return (
    <section className="bday-container">
      <BackButton />
      <h1 className="bday-title">Greet Them A "Happy Birthday!"</h1>
      <div className="bday-card">
        {birthdays.length ? (
          <BirthdayList bdaylist={birthdays} onClick={onClick} />
        ) : (
          <h3 className="no-bdays">No More Birthdays Today</h3>
        )}
        {isChange ? (
          <p className="removed">
            <b>{removedPerson}</b> has been removed
          </p>
        ) : (
          <p className="bday-count">{birthdays.length} Birthdays Today</p>
        )}
      </div>
    </section>
  );
};

export default BirthdayReminder;
