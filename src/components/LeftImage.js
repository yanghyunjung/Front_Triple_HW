import React from "react";
import styled from "styled-components";

import Triple from "../images/triple.png";

// 좌측 이미지 컴포넌트 구현
const LeftImage = (props) => {
  return (
    <Container>
      {/* 좌측 이미지 */}
      <LeftImg>
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
          2019년 2월 기준
        </span>
      </LeftImg>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0px auto;
`;

// 좌측 이미지 감싸는 div 
const LeftImg = styled.div``;

// 좌측 이미지 스타일 지정
const TripleLogo = styled.img`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 170px;
  padding-left: 80px;
`;


export default LeftImage;
