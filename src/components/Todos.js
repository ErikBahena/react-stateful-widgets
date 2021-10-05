import React, { useState } from "react";

const itemsInitArr = ["get this item done", "get another one done"];

export function Todo() {
  const [items, setItems] = useState([]);
  const [inputVal, setInputVal] = useState("");

  function setInputValue(e) {
    const value = e.target.value;
    setInputVal(value);
  }

  function addItem() {
    const placeHolder = items;
    if(inputVal === "") return;
    placeHolder.push({id:`item${items.length}`, name: inputVal, status: false});
    setItems(placeHolder);
    setInputVal("");
  }

  const changeItemStatus = idOfBtn => {
      const clickedOnItem = items.find(item => item.id === idOfBtn);
      clickedOnItem.status  = clickedOnItem.status ? false : true;

      const newArr = items.slice();

      setItems(newArr);
      
  }

  return (
    <div className="widget-todo container">
      <h2>Todo List</h2>
      <label htmlFor="makeNewItem">Make New Item</label>

      <input
        id="makeNewItem"
        type="text"
        onChange={setInputValue}
        value={inputVal}
      />
      <button onClick={addItem}>Add Item</button>

      {items.map((item, i) => (
        <div className="todo-item" key={"item" + [i]}>
          {item.name}
          <button onClick={() => changeItemStatus(`item${[i]}`)}>
            {item.status ? "Done" : "Mark Done"}
          </button>
        </div>
      ))}
    </div>
  );
}
