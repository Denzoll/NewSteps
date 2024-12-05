import React, { useEffect, useState } from "react";

const Input = () => {
  const inputRef = React.useRef(null);
  const [value, setValue] = useState("");
  const handleClickChange = (e) => {
    setValue(e.target.value);
  };
  const [deal, setDeal] = useState([]);
  const addDealInArr = () => {
    if (value !== "") {
      setDeal([...deal, { id: Date.now(), text: value }]);

      setValue("");
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []) 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addDealInArr(); // Добавляем дело при нажатии Enter
    }
  } 

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleClickChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addDealInArr}>Добавить</button>
      <ul>
        {deal.map((deal) => (
          <li key={deal.id}>{deal.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
