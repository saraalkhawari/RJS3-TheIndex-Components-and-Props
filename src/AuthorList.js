import React from "react";

const AuthorList = props => {
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{props.authors}</div>
    </div>
  );
};

export default AuthorList;
