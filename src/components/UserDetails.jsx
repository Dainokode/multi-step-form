import React from "react";

const UserDetails = ({ nextStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <nav className="navbar">
        <h1>Enter User Details</h1>
      </nav>
      <section>
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="First Name"
              defaultValue={values.firstName}
              onChange={handleChange("firstName")}
            />
            <input
              type="text"
              placeholder="Last Name"
              defaultValue={values.lastName}
              onChange={handleChange("lastName")}
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={values.email}
              onChange={handleChange("email")}
            />
            <button type="submit" onClick={next}>
              Next
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserDetails;
