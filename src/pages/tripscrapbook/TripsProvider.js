import { useState, createContext, useEffect } from "react";
import fireDB from "./firebase";

export const TripsContext = createContext();

export const TripsProvider = (props) => {
  const [trips, setTrips] = useState({});

  useEffect(() => {
    fireDB.child("thetrips").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setTrips({ ...snapshot.val() });
      } else {
        setTrips({});
      }
    });

    return () => {
      setTrips({});
    };
  }, []);

  return (
    <TripsContext.Provider value={[trips, setTrips]}>
      {props.children}
    </TripsContext.Provider>
  );
};
