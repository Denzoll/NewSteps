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
      setDeal([...deal, { id: Date.now(), text: value, done: false }]);

      setValue("");
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addDealInArr();
    }
  };
  useEffect(() => {
    if (deal.length > 0) {
      localStorage.setItem("deals", JSON.stringify(deal));
    }
  }, [deal]);
  useEffect(() => {
    const storedDeals = localStorage.getItem("deals");
    if (storedDeals) {
      try {
        const parsedDeals = JSON.parse(storedDeals);

        if (Array.isArray(parsedDeals)) {
          setDeal(parsedDeals);
        }
      } catch (e) {
        console.error("Ошибка при парсинге данных из localStorage", e);
      }
    }
  }, []);

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
