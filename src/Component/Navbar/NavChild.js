import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export const NavChild = (props) => {
  const { isLogo, contentName } = props;

  return (
    <Link to={contentName ? contentName.toLowerCase() : ""}>
      <div>
        <div className="hover:text-blue-300 text-black dark:text-gray-200">
          {isLogo ? (
            <div
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: "cover",
                height: "100%",
                aspectRatio: "1/1",
                margin: "auto",
              }}
            ></div>
          ) : (
            <span>{contentName}</span>
          )}
        </div>
      </div>
    </Link>
  );
};
