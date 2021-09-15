import { useState, useEffect, useRef, useContext, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TripsContext, TripsProvider } from "./TripsProvider";
import BackButton from "../../components/BackButton";
import fireDB from "./firebase";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/tripscrapbookstyles/tripscrapbook.css";
import {
  BsHeartFill,
  BsBrush,
  BsFillTrash2Fill,
  BsFillShiftFill,
} from "react-icons/bs";
import defaultimage from "../../images/noimage.jpg";

// Component to determine if image is available
const ImageVerifier = ({ imgverify }) => {
  const [imageVerified, isImageVerified] = useState(false);

  // Function to verify if image url is valid
  function checkImage(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        isImageVerified(true);
      }
    };
    image.onerror = function () {
      isImageVerified(false);
    };
    image.src = url;
  }

  checkImage(imgverify);

  return (
    <>
      <img
        className="trip-image"
        src={imageVerified ? imgverify : defaultimage}
        alt="The Trip"
      />
    </>
  );
};

// Component for displaying "Back to top" button
const ScrollToTop = () => {
  const [scrolltop, isScrollTop] = useState(false);

  // Function for determining the screen position for displaying the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      isScrollTop(true);
    } else {
      isScrollTop(false);
    }
  };

  // Process of mounting/unmounting scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      style={scrolltop ? { display: "block" } : { display: "none" }}
      className="to-top"
      title="Back To Top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <BsFillShiftFill />
    </button>
  );
};

// Component for displaying all trips from firebase API
const AllTrips = ({ editTrip }) => {
  const [trips] = useContext(TripsContext);
  const [readMore, isReadMore] = useState(false);

  // Function for adding a trip to "Favorites" while in "All Trips"
  const addToFavorites = (trip) => {
    const fav = { ...trips[trip], favorite: true };
    fireDB.child(`thetrips/${trip}`).set(fav, (error) => {
      if (error) {
        toast.error("Trip Not Added To Favorites");
      } else {
        toast.success("Trip Added To Favorites");
      }
    });
  };

  // Function for removing a trip from "Favorites" both from UI and firebase
  const removeFavorite = (trip) => {
    const removefav = { ...trips[trip], favorite: false };
    fireDB.child(`thetrips/${trip}`).set(removefav, (error) => {
      if (error) {
        toast.error("Trip Not Removed From Favorites");
      } else {
        toast.success("Trip Removed From Favorites");
      }
    });
  };

  // Function for deleting a trip both from the UI and firebase
  const deleteTrip = (trip) => {
    fireDB.child(`thetrips/${trip}`).remove((error) => {
      if (error) {
        toast.error("Trip Not Removed");
      } else {
        toast.success("Trip Removed");
      }
    });
  };

  return (
    <section className="feed-container">
      {Object.keys(trips).length === 0 ? <h1>Go and add a trip now!</h1> : ""}

      {Object.keys(trips)
        .map((trip) => {
          return (
            <div className="trip-item" key={trip}>
              <h2 className="trip-title">{trips[trip].title}</h2>
              <p className="trip-date">{trips[trip].date}</p>
              <p className="trip-address">{trips[trip].address}</p>
              <ImageVerifier imgverify={trips[trip].image} />
              <div className="option-buttons">
                {trips[trip].favorite ? (
                  <button
                    title="Remove From Favorites"
                    onClick={() => removeFavorite(trip)}
                  >
                    <BsHeartFill className="favorited" />
                  </button>
                ) : (
                  <button
                    title="Add To Favorites"
                    onClick={() => addToFavorites(trip)}
                  >
                    <BsHeartFill className="favorite-button" />
                  </button>
                )}

                <button
                  title="Edit"
                  onClick={() => editTrip(trip, trips[trip])}
                >
                  <BsBrush className="edit-button" />
                </button>

                <button
                  title="Delete"
                  onClick={() =>
                    window.confirm("Delete Trip ?") ? deleteTrip(trip) : ""
                  }
                >
                  <BsFillTrash2Fill className="delete-button" />
                </button>
              </div>

              <p className="trip-caption">
                {trips[trip].caption.length > 220
                  ? `${trips[trip].caption.substring(0, 218)}`
                  : trips[trip].caption}
                {readMore ? trips[trip].caption.substring(218, 100000) : ""}
                {trips[trip].caption.length > 220 ? (
                  readMore ? (
                    <button
                      className="long-caption"
                      onClick={() => isReadMore(!readMore)}
                    >
                      Show Less
                    </button>
                  ) : (
                    <>
                      <span>...</span>
                      <button
                        className="long-caption"
                        onClick={() => isReadMore(!readMore)}
                      >
                        Read More
                      </button>
                    </>
                  )
                ) : (
                  ""
                )}
              </p>
            </div>
          );
        })
        .reverse()}
      <ToastContainer position="top-center" />

      <ScrollToTop />
    </section>
  );
};

// Component for displaying favorite trips
const FavoriteTrips = () => {
  const [trips] = useContext(TripsContext);
  const [readMore, isReadMore] = useState(false);

  // Function for removing a trip from "Favorites"
  const removeFavorite = (trip) => {
    const removefav = { ...trips[trip], favorite: false };
    fireDB.child(`thetrips/${trip}`).set(removefav, (error) => {
      if (error) {
        toast.error("Trip Not Removed From Favorites");
      } else {
        toast.success("Trip Removed From Favorites");
      }
    });
  };

  return (
    <section className="feed-container">
      {Object.keys(trips).some((trip) => trips[trip].favorite === true) ? (
        ""
      ) : (
        <h1>Add your favorite trips here.</h1>
      )}

      {Object.keys(trips).map((trip) => {
        return (
          <Fragment key={trip}>
            {trips[trip].favorite === true ? (
              <div className="trip-item">
                <h2 className="trip-title">{trips[trip].title}</h2>
                <p className="trip-date">{trips[trip].date}</p>
                <p className="trip-address">{trips[trip].address}</p>
                <ImageVerifier imgverify={trips[trip].image} />
                <div className="option-buttons">
                  <button
                    title="Remove From Favorites"
                    onClick={() => removeFavorite(trip)}
                  >
                    <BsHeartFill className="favorited" />
                  </button>
                </div>
                <p className="trip-caption">
                  {trips[trip].caption.length > 220
                    ? `${trips[trip].caption.substring(0, 218)}`
                    : trips[trip].caption}
                  {readMore ? trips[trip].caption.substring(218, 100000) : ""}
                  {trips[trip].caption.length > 220 ? (
                    readMore ? (
                      <button
                        className="long-caption"
                        onClick={() => isReadMore(!readMore)}
                      >
                        Show Less
                      </button>
                    ) : (
                      <>
                        <span>...</span>
                        <button
                          className="long-caption"
                          onClick={() => isReadMore(!readMore)}
                        >
                          Read More
                        </button>
                      </>
                    )
                  ) : (
                    ""
                  )}
                </p>
              </div>
            ) : (
              ""
            )}
          </Fragment>
        );
      })}
      <ToastContainer position="top-center" />

      <ScrollToTop />
    </section>
  );
};

// Component handling adding/editing of a trip
const AddTrip = ({ edit, tripID, tripToEdit, backToAll }) => {
  window.scrollTo(0, 0);

  const [trips] = useContext(TripsContext);

  const title = useRef();
  const date = useRef();
  const address = useRef();
  const image = useRef();
  const caption = useRef();

  // Function adding/updating info of a specific trip
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const editTrip = {
        ...trips[tripID],
        title: title.current.value,
        date: date.current.value,
        address: address.current.value,
        image: image.current.value,
        caption: caption.current.value,
      };

      fireDB.child(`thetrips/${tripID}`).set(editTrip, (error) => {
        if (error) {
          toast.error("Trip Not Edited");
        } else {
          toast.success("Trip Successfully Edited");
        }
      });
    } else {
      const newTrip = {
        title: title.current.value,
        date: date.current.value,
        address: address.current.value,
        image: image.current.value,
        caption: caption.current.value,
        favorite: false,
      };

      fireDB.child("thetrips").push(newTrip, (error) => {
        if (error) {
          toast.error("Trip Not Added");
        } else {
          toast.success("Trip Added Successfully");
        }
      });
    }

    title.current.value = "";
    date.current.value = "";
    address.current.value = "";
    image.current.value = "";
    caption.current.value = "";

    backToAll();
  };

  // Function for resetting input values and going back to the main component
  const cancelEdit = () => {
    title.current.value = "";
    date.current.value = "";
    address.current.value = "";
    image.current.value = "";
    caption.current.value = "";

    backToAll();
  };

  return (
    <section className="addtrip-container">
      <form className="trip-form" onSubmit={handleSubmit}>
        <div className="title-div">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            defaultValue={edit ? tripToEdit.title : ""}
            ref={title}
            autoFocus
            required
          />
        </div>

        <div className="date-div">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            defaultValue={edit ? tripToEdit.date : ""}
            ref={date}
            required
          />
        </div>

        <div className="address-div">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            defaultValue={edit ? tripToEdit.address : ""}
            ref={address}
            required
          />
        </div>

        <div className="image-div">
          <label htmlFor="image">Image Link: </label>
          <input
            type="url"
            id="image"
            defaultValue={edit ? tripToEdit.image : ""}
            ref={image}
            required
          />
        </div>

        <label htmlFor="caption">Caption: </label>
        <textarea
          id="caption"
          defaultValue={edit ? tripToEdit.caption : ""}
          ref={caption}
          required
        />

        <div className="action-buttons">
          <input
            type="submit"
            value={edit ? "Edit Trip" : "Add To Scrapbook"}
          />

          {edit ? (
            <h2
              onClick={() =>
                window.confirm("Do you want to cancel editing ?")
                  ? cancelEdit()
                  : ""
              }
            >
              Cancel Edit
            </h2>
          ) : (
            ""
          )}
        </div>
      </form>

      <ToastContainer position="top-center" />
    </section>
  );
};

// Main component of "Trip Scrapbook" project
const MainScrapbook = () => {
  window.scrollTo(0, 0);

  const [page, setPage] = useState("all");
  const [edit, setEdit] = useState(false);
  const [tripID, setTripID] = useState("");
  const [tripToEdit, setTripToEdit] = useState({});

  // Function to setup which trip to edit
  const editTrip = (trip, editThisTrip) => {
    setEdit(true);
    setTripID(trip);
    setTripToEdit(editThisTrip);
    setPage("add");
  };

  // Setting up homepage
  const backToAll = () => {
    setPage("all");
    setEdit(false);
  };

  return (
    <section className="trips-container">
      <BackButton />

      <div className="trip-header">
        <h1>My Trips Scrapbook</h1>

        <div className="trip-navlinks">
          <button
            style={page === "all" ? { backgroundSize: "100% 3px, auto" } : {}}
            onClick={() => setPage("all")}
          >
            All Trips
          </button>

          <button
            style={
              page === "favorite" ? { backgroundSize: "100% 3px, auto" } : {}
            }
            onClick={() => setPage("favorite")}
          >
            Favorites
          </button>

          <button
            style={page === "add" ? { backgroundSize: "100% 3px, auto" } : {}}
            onClick={() => setPage("add")}
          >
            Add A Trip
          </button>
        </div>
      </div>

      <TripsProvider>
        {page === "all" ? <AllTrips editTrip={editTrip} /> : ""}
        {page === "favorite" ? <FavoriteTrips /> : ""}
        {page === "add" ? (
          <AddTrip
            edit={edit}
            tripID={tripID}
            tripToEdit={tripToEdit}
            backToAll={backToAll}
          />
        ) : (
          ""
        )}
      </TripsProvider>
    </section>
  );
};

export default MainScrapbook;
