import React, { Children } from "react";

function ComponentA(props) {
  return (
    <div>
      Component A :D
      {props.children}
    </div>
  )
}

export default ComponentA