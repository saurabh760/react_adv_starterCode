import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [ind, setInd] = useState('random title');
  const handleClick = () => {
    if (ind === 'random title') {
      setInd('hello world');
    } else {
      setInd('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{ind}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
