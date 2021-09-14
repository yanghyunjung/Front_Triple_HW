import React from "react";
import styled, { keyframes } from "styled-components";

import Triple from "../images/triple.png";
import AppStore from "../images/app-store.png";
import PlayStore from "../images/play-store.png";

import TEXT from "../components/Box";

const section = (props) => {
  return (
    <Container>
      <LeftImage>
        <TripleLogo src={Triple} />
        <span
          style={{
            position: "absolute",
            margin: "430px 0 0 230px",
            fontFamily: "sans-serif",
            color: "rgba(58, 58, 58, 0.7)",
            fontSize: "15px",
            width: "100px",
          }}
        >
          2021년 5월 기준
        </span>
      </LeftImage>

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
            textAlign: "initial",
          }}
        >
          <StoreLogo src={PlayStore} />
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </div>
        <div
          style={{
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: "60px 2fr",
            textAlign: "initial",
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

const LeftImage = styled.div`
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-name: ${Slideup};
  animation-fill-mode: forwards;
`;

// 좌측 이미지 스타일 지정
const TripleLogo = styled.img`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 170px;
  padding-left: 80px;
`;

const Awards = styled.div`
  display: flex;
  position: absolute;
  line-height: 22px;
  margin: 380px 0px 100px 700px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: 900;
  font-size: 14px;
  font-family: sans-serif;
  animation-duration: 0.7s;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease-in;
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
