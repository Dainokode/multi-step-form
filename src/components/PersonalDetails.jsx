import React from "react";

const PersonalDetails = ({ nextStep, handleChange, values, prevStep }) => {
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
        <h1>Enter Personal Details</h1>
      </nav>
      <section>
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Occupation"
              defaultValue={values.occupation}
              onChange={handleChange("occupation")}
            />
            <input
              type="text"
              placeholder="City"
              defaultValue={values.city}
              onChange={handleChange("city")}
            />
            <input
              type="text"
              placeholder="Bio"
              defaultValue={values.bio}
              onChange={handleChange("bio")}
            />
            <button type="submit" onClick={next}>
              Next
            </button>
            <button onClick={back}>Back</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PersonalDetails;
