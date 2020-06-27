import App from "next/app";
import React from "react";
import "../src/styles/global.css";

class MyApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
