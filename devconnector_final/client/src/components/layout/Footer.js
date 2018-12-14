import React from "react";

export default () => {
  return (
    <footer className="inverse mt-5 p-4">
      <span className="inverse">Copyright</span>{" "}
      <span className="inverse">&copy;</span>{" "}
      <span className="inverse">{new Date().getFullYear()}</span>{" "}
      <span className="inverse">MemberDev</span>
    </footer>
  );
};
