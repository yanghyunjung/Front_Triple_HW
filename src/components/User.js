import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 사용자, 리뷰, 저장 문구 컴포넌트 구현
const User = (props) => {
  // 0부터 증가하기 위해 값을 0으로 초기화
  const [count, setCount] = useState({ num_1: 0, num_2: 0, num_3: 0 });

  useEffect(() => {
    let number = 0;
    const interval = setInterval(() => {  // 반복 시작
      number++;
      setCount({
        ...count,             // 객체에 대한 값을 불러옴
        num_1: number * 1.75,
        num_2: number * 0.105,
        num_3: number * 3.25,
      });
      if (number === 200) {   // 숫자 올라가는 속도 조절
        return clearInterval(interval);   // 반복 중단
      }
    });
    return () => clearInterval(interval);
  }, []);


  return (
    <Text>
      <DIV1>
        <span style={{ fontWeight: "730" }}>{parseInt(count.num_1)}만 명</span>의 사용자
      </DIV1>
      <DIV2>
        <span style={{ fontWeight: "730" }}>{parseInt(count.num_2)}만 개</span>의 리뷰
      </DIV2>
      <DIV3>
        <span style={{ fontWeight: "730" }}>{parseInt(count.num_3)}만 개</span>의 저장
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
  font-size: 36px;
`;

// 사용자
const DIV1 = styled.div`
  letter-spacing: -1px;
  margin-bottom: 15px;
`;

// 리뷰
const DIV2 = styled.div`
  letter-spacing: -1px;
  margin-bottom: 15px;
`;

// 저장
const DIV3 = styled.div`
  letter-spacing: -1px;
  margin-bottom: 15px;
`;
export default User;
