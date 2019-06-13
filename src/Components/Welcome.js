import React from 'react';


function Welcome(props)

{
  return <div> <h1>Welcome </h1> {props.name}  <p>{props.children}</p></div>
}
export default Welcome;
