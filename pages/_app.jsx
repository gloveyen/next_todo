import { createWrapper } from "next-redux-wrapper";
import React from "react";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import "../assets/scss/index.scss";
import BasicLayout from "../layouts/BasicLayout";
import todoReducer from "../models/todo";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  todoReducer,
  { todo: [], done: [] },
  composeEnhancers()
);

const wrapper = createWrapper(() => store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div id="app">
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </div>
    </Provider>
  );
}

export default wrapper.withRedux(App);
