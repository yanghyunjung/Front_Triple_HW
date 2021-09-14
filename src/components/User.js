import React from "react";
import styled from "styled-components";

const Box = () => {
  return (
    <Text>
      <DIV1>
        <span style={{ fontWeight: "730" }}>630만 명</span>의 여행자
      </DIV1>
      <DIV2>
        <span style={{ fontWeight: "730" }}>95만 개</span>의 여행 리뷰
      </DIV2>
      <DIV3>
        <span style={{ fontWeight: "730" }}>425만 개</span>의 여행 일정
      </DIV3>
    </Text>
  );
};

// 텍스트 감싸주는 div
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 700px;
  padding-top: 170px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
  font-size: 36px;
`;

const DIV1 = styled.div`
  letter-spacing: -1px;
  margin-bottom: 15px;
`;

const DIV2 = styled.div`
  letter-spacing: -1px;
  margin-bottom: 15px;
`;

const DIV3 = styled.div`
  letter-spacing: -1px;
  margin-bottom: 15px;
`;
export default Box;
