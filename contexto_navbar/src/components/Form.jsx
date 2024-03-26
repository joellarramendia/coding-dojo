import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import './Form.css';

const Form = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className='content'>
        <label>Your Name:</label>
        <input type="text" value={user} onChange={handleChange} />
    </div>
  );
}

export default Form;