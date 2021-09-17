import React from "react";
import styled from "styled-components";

import AppStore from "../images/app-store.png";
import PlayStore from "../images/play-store.png";

// 수상 내역 컴포넌트 구현
const Award = (props) => {
  return (
    <Awards>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 2fr",
          alignItems: "center",
          marginRight: "39px",
          textAlign: "initial",
          lineHeight: "20px",
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
          lineHeight: "20px",
        }}
      >
        <AppLogo src={AppStore} />
        2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
      </div>
    </Awards>
  );
};

// 수상 내역 감싸는 div
const Awards = styled.div`
  display: flex;
  margin: 380px 0 0 700px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: 650;
  font-size: 14px;
`;

const StoreLogo = styled.img`
  width: 54px;
  height: 54px;
`;

const AppLogo = styled.img`
  width: 54px;
  height: 54px;
`;

export default Award;
