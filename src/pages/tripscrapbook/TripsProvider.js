import { useState, createContext, useEffect } from "react";
import fireDB from "./firebase";

// Context variable
export const TripsContext = createContext();

// Trip data provider
export const TripsProvider = (props) => {
  const [trips, setTrips] = useState({});

  // Process of assigning trip data from firebase real-time database to useState dynamic value
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
