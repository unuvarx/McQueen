import React from "react";
import "@/styles/global.css";


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />{" "}
    </React.Fragment>
  );
}

export default MyApp;
