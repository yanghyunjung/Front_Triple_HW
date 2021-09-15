import React from "react";
import styled from "styled-components";

import Triple from "../images/triple.png";

const section = (props) => {
  return (
    <Container>
      {/* 좌측 이미지 */}
      <LeftImage>
        <TripleLogo src={Triple} />
        <span
          style={{
            position: "absolute",
            margin: "450px 0 0 230px",
            fontFamily: "sans-serif",
            color: "rgba(58, 58, 58, 0.7)",
            fontSize: "15px",
            width: "100px",
          }}
        >
          2021년 5월 기준
        </span>
      </LeftImage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  position: relative;
`;

// 좌측 이미지 감싸는 div 
const LeftImage = styled.div``;

// 좌측 이미지 스타일 지정
const TripleLogo = styled.img`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 170px;
  padding-left: 80px;
`;


export default section;
