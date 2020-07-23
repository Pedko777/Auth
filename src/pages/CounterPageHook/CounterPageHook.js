import React, { useState, useEffect } from 'react';

const CounterPageHook = () => {
  const [value, setValue] = useState(0);

  //*componentDidMount + componentDidUpdate
  //   useEffect(() => {
  //     console.log('useEffect All');
  //   });
  //* COUNTER *//
  //*componentDidUpdate
  useEffect(() => {
    console.log('useEffect componentDidUpdate');
  }, [value]);

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => prevValue - 1);
  };

  //* INPUT*//

  const [text, setText] = useState('');

  const handleChange = ({ target }) => setText(target.value);

  return (
    <div>
      <h1>Counter</h1>
      <span>{value}</span>
      <br />
      <button type="button" onClick={decrement}>
        Decrement -
      </button>
      <button type="button" onClick={increment}>
        Incremet +
      </button>

      <div>
        <input value={text} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CounterPageHook;
