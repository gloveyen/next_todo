import React from "react";
import { connect } from "react-redux";
import DoneItem from "../components/DoneItem";
import { deleteItem } from "../models/todo";

function Done({ done = [] }) {
  const renderDone = done.map(({ id, name }) => (
    <DoneItem key={id} name={name} id={id} />
  ));

  return (
    <div className="page-home">
      {done.length ? (
        <ul>{renderDone}</ul>
      ) : (
        <div className="empty">
          <span className="material-icons">inbox</span>
          <p>尚未完成任何代辦清單</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    done: state.done,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);
