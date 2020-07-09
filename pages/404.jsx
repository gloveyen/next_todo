import Router from "next/router";
import React from "react";

function NotFound404(props) {
  const handleClick = () => {
    Router.push("/");
  };

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={handleClick}>Back To Home</button>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1 {
            text-align: center;
            margin: 16px 0;
          }

          button {
            height: 2rem;
            border: none;
            border-radius: 4px;
            padding: 0 8px;
            cursor: pointer;
          }

          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
}

export default NotFound404;
