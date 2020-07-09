import Router from "next/router";
import React from "react";
import { connect } from "react-redux";
import { deleteItem, done } from "../models/todo";

function Item({ name, id, done, deleteItem }) {
  const handleEdit = () => {
    Router.push({
      pathname: "/edit",
      query: { id },
    });
  };

  return (
    <li className="component-item">
      <div onClick={handleEdit}>
        {name}
        <span className="material-icons edit">create</span>
      </div>
      <span
        className="material-icons done"
        onClick={() => {
          done({ id, name });
        }}
      >
        done
      </span>
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
    done: (item) => dispatch(done(item)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
