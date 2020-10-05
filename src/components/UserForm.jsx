// Parent components

import React, { useState } from "react";
import UserDetails from "./UserDetails";
import PersonalDetaiils from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    secondName: "",
    occupation: "",
    email: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    setState({
      ...state,
      step: state.step + 1,
    });
  };

  const prevStep = () => {
    setState({
      ...state,
      step: state.step - 1,
    });
  };

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  switch (state.step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 2:
      return (
        <PersonalDetaiils
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 3:
      return <Confirm nextStep={nextStep} prevStep={prevStep} values={state} />;
    case 4:
      return <Success />;
  }
};

export default UserForm;
