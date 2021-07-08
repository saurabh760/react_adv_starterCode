import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [emp, setEmp] = useState(data);

  const removeItem = (id) => {
    let newEmp = emp.filter((person) => person.id !== id);
    setEmp(newEmp);
  };
  return (
    <>
      {emp.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setEmp([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
