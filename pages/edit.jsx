import Router, { withRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { editItem } from "../models/todo";

function Edit({ todo, editItem, router }) {
  const [newItem, setNewItem] = useState("");
  const { query } = router;
  const inputRef = useRef();

  useEffect(() => {
    if (todo && query.id) {
      const filterById = todo.filter((item) => item.id === query.id)[0];
      console.log(filterById);

      setNewItem(filterById.name);
    }
  }, [todo, query]);

  const handleChange = () => {
    const value = inputRef.current.value;
    setNewItem(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      editItem({ id: query.id, name: newItem });
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
          修改代辦事項：
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

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (item) => dispatch(editItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Edit));
