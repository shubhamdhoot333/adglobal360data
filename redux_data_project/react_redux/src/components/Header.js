import React from "react";

function Header(props) {
  return (
    <>
      <div>
        <h3>Total item in addtocart{props.data.length}</h3>
      </div>
    </>
  );
}

export default Header;
