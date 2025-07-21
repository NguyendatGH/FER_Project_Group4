import React from "react";
import "../css/NotFound.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {

  const naviage = useNavigate();

  return (
    <div className="error-container">
      <div className="error-code">
        <img src="/images/404/404.svg" alt="404" />
      </div>
      <div className="error-text">Sorry, the page can't be found</div>
      <div className="error-subtext">
        The page you were looking for appears to have been moved, deleted or
        does not exist.
      </div>
      <button className="back-button" onClick={() => naviage('/')}>Back to Homepage</button>
    </div>
  );
};

export default NotFound;
