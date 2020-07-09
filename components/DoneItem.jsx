import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../models/todo";

function DoneItem({ name, id, deleteItem }) {
  return (
    <li className="component-done-item">
      <div>{name}</div>

      <span
        className="material-icons delete"
        onClick={() => {
          deleteItem(id);
        }}
      >
        delete
      </span>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(DoneItem);
