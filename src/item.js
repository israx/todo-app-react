import React from "react";

function Item(props) {
  const items = props.items.map((item, i) => {
    //console.log(item.completed);
    return (
      <div className="item" key={i}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={props.handleState}
          id={item.id}
          className="custom-checkbox"
        />
        <label htmlFor={item.id}>{item.text}</label>
        <button id={item.id} onClick={props.handleDelete}>
          X
        </button>
      </div>
    );
  });
  return <div className="items-container">{items}</div>;
}
export default Item;
