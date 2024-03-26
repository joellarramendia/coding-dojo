import React, {useState} from "react"; 
import Navbar from "./Navbar";
import FormWrapper from "./FormWrapper";
import Form from "./Form";
import {UserContext} from '../contexts/UserContext';

const Wrapper = () => {
  const [user, setUser] = useState(''); 

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Navbar />
      <FormWrapper>
        <Form />
      </FormWrapper>
    </UserContext.Provider>
  );
};

export default Wrapper;