import React from "react";
import styled from "styled-components";

export default () => <ImageContainer>404!</ImageContainer>;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(253, 95, 96);
  background: radial-gradient(
    circle,
    rgba(253, 95, 96, 1) 0%,
    rgba(253, 95, 96, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  font-weight: bold;
  font-size: 14rem;
`;
