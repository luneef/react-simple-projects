import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import BackButton from "../../components/BackButton";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import "../../styles/phonebookstyles/phonebook.css";
import backgrounds from "./backgrounds";

// Function for getting phonebook list data stored in local storage
const getContacts = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

// Component for displaying phonebooks added to list
const PhoneBookList = ({ list, editContact, removeContact }) => {
  return (
    <div className="contact-container">
      {list.map((list) => {
        return (
          <div
            style={{
              backgroundImage: `url(${backgrounds[list.bgID].image})`,
            }}
            className="contact-person"
            key={list.id}
          >
            <div className="contact-separator">
              <h2 className="contact-name">{list.name}</h2>
              <h3 className="contact-number">{list.number}</h3>
              <h3
                className="
                contact-email"
              >
                {list.email}
              </h3>
            </div>
            <div className="edit-div">
              <BsPencil
                className="edit-contact"
                title="Edit"
                onClick={() => editContact(list.id)}
              />
              <p className="edit-text">Edit</p>
            </div>
            <div className="delete-div">
              <BsFillTrashFill
                className="delete-contact"
                title="Delete"
                onClick={() =>
                  window.confirm(`Remove ${list.name} ?`)
                    ? removeContact(list.id)
                    : ""
                }
              />
              <p className="delete-text">Delete</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Component for displaying, editing, and set-up form for phonebook entry
const PhoneBookForm = ({ newContact, edit, contactEdit, finalEdit }) => {
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  let editID;

  // Condition triggered when editing a contact
  if (edit) {
    const { id, name, number, email } = contactEdit[0];
    editID = id;
    nameRef.current.value = name;
    numberRef.current.value = number;
    emailRef.current.value = email;

    nameRef.current.focus();
  }

  // Function used to handle "Add/Edit" click event
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.random() * 15;
    const bgID = Math.floor(id);

    const newPerson = {
      id: id,
      name: nameRef.current.value,
      number: numberRef.current.value,
      email: emailRef.current.value,
      bgID: bgID,
    };

    newContact(newPerson);

    if (edit) {
      const finalInfo = {
        id: editID,
        name: nameRef.current.value,
        number: numberRef.current.value,
        email: emailRef.current.value,
      };

      finalEdit(finalInfo);
    }

    nameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <section>
      <form className="phonebook-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Type the name"
          ref={nameRef}
          required
        />

        <input
          type="tel"
          pattern="[0-9\-]+"
          id="number"
          placeholder="Type the number"
          ref={numberRef}
          required
        />

        <input
          type="email"
          id="email"
          placeholder="Type the email address (optional)"
          ref={emailRef}
        />
        <input type="submit" value={edit ? "Edit" : "Add"} />
      </form>
    </section>
  );
};

// Phonebook project main component
const Phonebook = () => {
  const [list, setList] = useState(getContacts());
  const [contactEdit, setContactEdit] = useState([]);
  const [edit, setEdit] = useState(false);

  // Function for adding a new contact to phonebook local data
  const newContact = (newPerson) => {
    setList([...list, newPerson]);
  };

  // Function for setting up the contact info to edit
  const editContact = (id) => {
    setContactEdit(list.filter((lists) => lists.id === id));
    setEdit(true);
  };

  // Function for updating the contact info in local storage
  const finalEdit = (finalInfo) => {
    setList(
      list.map((lists) =>
        finalInfo.id === lists.id
          ? {
              ...lists,
              id: finalInfo.id,
              name: finalInfo.name,
              number: finalInfo.number,
              email: finalInfo.email,
            }
          : lists
      )
    );
    setEdit(false);
  };

  // Function for handling contact removal
  const removeContact = (id) => {
    setList(list.filter((lists) => lists.id !== id));
    toast.success("Contact Successfully Removed");
  };

  // Hook/Process of storing phonebook data to local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="phonebook-container">
      <BackButton />
      <div className="phonebook-inner">
        <h1 className="phonebook-title">My Phonebook</h1>
        <PhoneBookForm
          newContact={newContact}
          edit={edit}
          contactEdit={contactEdit}
          finalEdit={finalEdit}
        />
        <PhoneBookList
          list={list}
          editContact={editContact}
          removeContact={removeContact}
        />
        {list.length ? (
          <button
            className="clear-btn"
            onClick={() =>
              window.confirm(`Clear All Contacts ?`) ? setList([]) : ""
            }
          >
            Clear Contacts
          </button>
        ) : (
          <p className="no-contacts">No Contacts</p>
        )}
      </div>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default Phonebook;
