import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <style jsx global>
        {`
          body {
            background-image: url("/assets/pattern.svg");
            background-repeat: repeat;
          }
        `}
      </style>
    </div>
  );
}
