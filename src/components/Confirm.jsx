import React from "react";

const PersonalDetails = ({ nextStep, values, prevStep }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <nav className="navbar">
        <h1>Confirm Your Details</h1>
      </nav>
      <section>
        <div className="list">
          <ul>
            <li>
              First Name <br /> <span>{values.firstName}</span>
            </li>
            <li>
              Last Name <br /> <span>{values.lastName}</span>
            </li>
            <li>
              Email <br /> <span>{values.email}</span>
            </li>
            <li>
              Occupation <br /> <span>{values.occupation}</span>
            </li>
            <li>
              City <br /> <span>{values.city}</span>
            </li>
            <li>
              Bio <br /> <span>{values.bio}</span>
            </li>
          </ul>
          <button type="submit" onClick={next}>
            Confirm
          </button>
          <button onClick={back}>Back</button>
        </div>
      </section>
    </>
  );
};

export default PersonalDetails;
