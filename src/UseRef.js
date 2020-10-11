import React, { useRef, useState,useEffect } from 'react';
import './App.css';

function UseRef() {
  const inputEI = useRef(null)
  const [state, setstate] = useState(null)
  useEffect(() => {
    inputEI.current.focus()
  }, [])
  return (
    <div >
      <h1>Give Me Input :UseRef</h1>
      <input ref={inputEI} type='text'></input>
      <h4>value :</h4>

      <hr></hr>
      <h1>Give Me Input :UseState</h1>
      <input  type='text' value={state} onChange={e => {
        setstate(e.target.value)
      }}></input>
      <h4>Value : {state}</h4>
    </div>
  );
}

export default UseRef;
