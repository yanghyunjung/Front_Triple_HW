import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = (props) => {
  const [count, setCount] = useState({ num_1: 0, num_2: 0, num_3: 0 });

  useEffect(() => {
    let number = 0;
    const interval = setInterval(() => {
      number++;
      setCount({
        ...count,
        num_1: number * 3.15,
        num_2: number * 0.475,
        num_3: number * 2.125,
      });
      if (number === 200) {
        return clearInterval(interval);
      }
    });
    return () => clearInterval(interval);
  }, []);


  return (
    <Text>
      <DIV1>
        <span style={{ fontWeight: "730" }}>{parseInt(count.num_1)}만 명</span>의 여행자
      </DIV1>
      <DIV2>
        <span style={{ fontWeight: "730" }}>{parseInt(count.num_2)}만 개</span>의 여행 리뷰
      </DIV2>
      <DIV3>
        <span style={{ fontWeight: "730" }}>{parseInt(count.num_3)}만 개</span>의 여행 일정
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
