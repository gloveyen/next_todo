import Router from "next/router";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../models/todo";

function Add({ addItem }) {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  const handleChange = () => {
    const value = inputRef.current.value;
    setNewItem(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      addItem(newItem);
      setNewItem("");
      Router.push("/");
    } else {
      alert("新增代辦事項不得為空!");
    }
  };

  return (
    <div className="page-add">
      <form>
        <label htmlFor="new">
          新增代辦事項：
          <input
            ref={inputRef}
            name="new"
            type="text"
            placeholder="輸入代辦事項"
            value={newItem}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>送出</button>
        </label>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Add);
