import React from "react";
import styled, { keyframes } from "styled-components";

import Triple from "../images/triple.png";
import AppStore from "../images/app-store.png";
import PlayStore from "../images/play-store.png";

import TEXT from "../components/Box";

const section = (props) => {
  return (
    <Container>
      <TripleLogo src={Triple} delay="0.1" />
      
      {/* 텍스트 */}
      <TEXT delay="0.2" />

      {/* 수상 내역 */}
      <Awards delay="0.3">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "60px 2fr",
            alignItems: "center",
            marginRight: "39px",
            backgroundImage: "url(../play-store.png)",
          }}
        >
          <StoreLogo src={PlayStore} />
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </div>
        <div
          style={{
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: "0 2fr",
          }}
        >
          <AppLogo src={AppStore} />
          2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
        </div>
      </Awards>
    </Container>
  );
};

const Slideup = keyframes`
  from {
    opacity: 0;
    transform: translateY(0px);
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

// 좌측 이미지 스타일 지정
const TripleLogo = styled.img`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 250px;
  padding-left: 90px;
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

const Awards = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  position: absolute;
  align-items: center;
  justify-content: start;
  line-height: 22px;
  margin: 460px 0px 100px 710px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  font-size: 14px;
  font-family: sans-serif;
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

const StoreLogo = styled.img`
  width: 54px;
  height: 54px;
`;

const AppLogo = styled.img`
  width: 54px;
  height: 54px;
`;

export default section;
