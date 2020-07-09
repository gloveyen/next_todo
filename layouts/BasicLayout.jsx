import React, { useEffect } from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import { fetchTodo } from "../mock/todo";
import { INIT } from "../models/todo";

function BasicLayout({ dispatch, children }) {
  useEffect(() => {
    const todoData = fetchTodo();
    dispatch({
      type: INIT,
      payload: [...todoData],
    });
  }, []);
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(null, mapDispatchToProps)(BasicLayout);
