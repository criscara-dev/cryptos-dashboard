import React from "react";
import Media from "react-media";

export default function withMedia(Component, queries) {
  return class extends React.Component {
    render() {
      return (
        <Media queries={queries}>
          {matches => <Component matches={matches} {...this.props} />}
        </Media>
      );
    }
  };
}
