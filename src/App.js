import React from "react";
import { useEffect, useState } from "react";
import Item from "./item";

function App() {
  //Pull out data from localstorage if null then it will take an empty array
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  const [item, setItem] = useState({
    text: "",
    id: "",
    completed: false,
  });

  //Event Handlers
  function handleChange(e) {
    const { type, value, checked, name, id } = e.target;

    setItem({
      text: value,
      id: Date.now(),
      completed: false,
    });
  }

  function handleState(e) {
    setItems(
      items.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          item.completed = e.target.checked;

          return item;
        }
        return item;
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (item.text !== "") {
      const newItems = [...items, item];
      setItems(newItems);
    }

    setItem({ text: "" });
  }

  function handleDelete(e) {
    const id = parseInt(e.target.id);

    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  }

  //Local Storage
  useEffect(() => {
    console.log("working");
    window.localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  return (
    <div className="main-app">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          name="todo-text"
          value={item.text}
          onChange={handleChange}
        />
        <button onSubmit={handleSubmit}>Add</button>
      </form>
      <Item
        handleState={handleState}
        items={items}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
