import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { connect } from "react-redux";
import { ModalProvider } from "styled-react-modal";
import { Provider } from "react-redux";

class MyApp extends App<{ reduxStore }> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
// connect(state => state)(
