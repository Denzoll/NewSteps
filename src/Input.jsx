import React, { useState } from "react";

const Input = () => {
  const InputRef = React.useRef(null);
  const [value, setValue] = useState("");
  const handleClickChange = (e) => {
    setValue(e.target.value);
  };
  const [deal, setDeal] = useState([]);
  const addDealInArr = () => {
    if (value !== "") {
      setDeal([...value, {id:Date.now(), text:deal}]);
      setValue("");
    }
  };

  return (
    <div>
      <input
        ref={InputRef}
        type="text"
        value={value}
        onChange={handleClickChange}
      />
      <button onClick={addDealInArr}>Добавить</button>
      <ul>{deal.map(el => {
        <li>{el.text}</li>   
      })}</ul>
    </div>
  );
};

export default Input;
