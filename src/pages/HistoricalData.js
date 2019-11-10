import React from "react";

export default props => {
  console.log(props);
  return <div style={{ padding: 20 }}>{props.match.params.coin}</div>;
};
