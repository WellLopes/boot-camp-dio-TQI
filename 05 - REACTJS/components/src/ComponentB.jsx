import React, { Children } from "react";

function ComponentB(props) {
  return (
    <div>
      Component B :P
      {props.children}
    </div>
  )
}

export default ComponentB