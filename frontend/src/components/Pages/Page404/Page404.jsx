import React from "react";
import "./Page404.css";

// 404 Page
// Display some 404 text if user is at invalid route
const Page404 = () => {
  return (
    <React.Fragment>
      <div id="page-404">
        <h1>404</h1>
        <h4>The page you are looking for does not exist!</h4>
      </div>
    </React.Fragment>
  );
};

export default Page404;
