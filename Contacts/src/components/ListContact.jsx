import { useState } from "react";
import Contact from "./Contact";
import contactsList from "../data";

const ListConntact = () => {
  const [persons, setPerson] = useState(contactsList);
  const [isFiltered, setIsFilter] = useState(false);

  const removeOfflineUser = () => {
    const newList = isFiltered
      ? contactsList
      : persons.filter((person) => person.active === true);
    setIsFilter(!isFiltered);
    setPerson(newList);
  };

  console.log(isFiltered);

  return (
    <div className='container'>
      <h2 className='title'>Contacts</h2>
      <div className='contact-list'>
        {persons.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
      <button className='clear-btn' onClick={removeOfflineUser}>
        {(isFiltered && "Show all ") || "remove offline"}
      </button>
    </div>
  );
};

export default ListConntact;
