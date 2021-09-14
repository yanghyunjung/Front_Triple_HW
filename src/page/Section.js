import React from "react";
import styled, { keyframes } from "styled-components";

import LeftImg from "../components/LeftImage";
import USER from "../components/User";
import AWARD from "../components/Award";

const section = (props) => {
  return (
    <Container>
      {/* 좌측 이미지 */}
      <Left>
        <LeftImg />
      </Left>

      {/* 사용자, 리뷰, 저장 문구 */}
      <User delay="0.1">
        <USER />
      </User>

      {/* 수상 내역 */}
      <Award delay="0.2">
        <AWARD />
      </Award>
    </Container>
  );
};

const Slideup = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  position: relative;
`;

// 좌측 이미지 애니메이션 적용
const Left = styled.div`
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

// 사용자, 리뷰, 저장 문구 애니메이션 적용
const User = styled.div`
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-delay: ${(props) => props.delay}s;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

// 수상 내역 애니메이션 적용
const Award = styled.div`
  position: absolute;
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-delay: ${(props) => props.delay}s;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

export default section;
