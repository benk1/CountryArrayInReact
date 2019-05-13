import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h1>World countries List</h1>
      <h4>Total Number of countries is: {props.countries.length}</h4>
      <h4>Please Search by Clicking StartWith or Include button</h4>
    </div>
  );
};
export default Header;
