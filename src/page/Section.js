import React from "react";
import styled, { keyframes } from "styled-components";

import LeftImg from "../components/LeftImage";
import USER from "../components/User";
import AWARD from "../components/Award";

const section = (props) => {
  return (
    <Container>
      {/* 좌측 이미지 불러오기 */}
      <LeftImage>
        <LeftImg />
      </LeftImage>

      {/* 사용자, 리뷰, 저장 문구 불러오기 */}
      <User>
        <USER />
      </User>

      {/* 수상 내역 불러오기 */}
      <Awards>
        <AWARD />
      </Awards>
    </Container>
  );
};

const Slideup = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0px auto;
`;

// 좌측 이미지 애니메이션 적용
const LeftImage = styled.div`
  position: absolute;
  // 애니메이션이 700ms에 걸쳐 일어나게 지정
  animation-duration: 700ms;
  animation-timing-function: ease-in;
  animation-delay: 100ms;
  animation-name: ${Slideup};
`;

// 사용자, 리뷰, 저장 문구 애니메이션 적용
const User = styled.div`
  position: absolute;
  // 애니메이션이 700ms에 걸쳐 일어나게 지정
  animation-duration: 700ms;
  animation-timing-function: ease-in;
  animation-delay: 200ms;
  animation-name: ${Slideup};
`;

// 수상 내역 애니메이션 적용
const Awards = styled.div`
  position: absolute;
  // 애니메이션이 700ms에 걸쳐 일어나게 지정
  animation-duration: 700ms;
  animation-timing-function: ease-in;
  animation-delay: 300ms;
  animation-name: ${Slideup};
`;

export default section;
