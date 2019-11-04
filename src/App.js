import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorCard from "./AuthorCard";

function App() {
  const auth = authors.map(authObj => (
    <AuthorCard author={authObj} key={authObj.first_name} />
  ));
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          <AuthorList authors={auth} />
        </div>
      </div>
    </div>
  );
}

export default App;
