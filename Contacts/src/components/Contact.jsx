import React from "react";
import person from "./../data";

const Contact = ({ contact }) => {
  const { img, name, phoneNumber, active } = contact;
  return (
    <article>
      <img src={img} alt={name} />
      <div className='article-info'>
        <h2>{name}</h2>
        <div className='personn-detail'>
          <p>+{phoneNumber} </p>
          <p>
            <span className={active ? "online" : "offline"}></span>
            {active ? "available" : "offline"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Contact;
