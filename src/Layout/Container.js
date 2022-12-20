import React from "react";
import { ReactComponent as ReactLogo } from "../assets/group.svg";
const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="box">
        <div>
          <div className="logo">
            <ReactLogo />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
