// Q&A 모아보기 (관리자 페이지)에 쓰이는 Board입니다.

import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import privacyImage from "../../images/Privacy.png";

const QnABoard = ({ info }) => {
  const infoLength = info.length;
  const navigate = useNavigate();
  // 끝에 /를 포함하는 주소도 고려
  const isCollectPage = window.location.pathname === "/ManagerPage/QnA" || window.location.pathname === "/ManagerPage/QnA/";
  const location = useLocation();
  //실제주소
  const actualAddress = location.pathname;

  const handleRowClick = (item) => {
    if (isCollectPage) {
       //상세 페이지의 보드 클릭 시 네비게이트가 되는 문제를 해결
      navigate(`/ManagerPage/QnA/${item.id}`, { state: { item } });
    } else {
      // 클릭 무시
    }
  };

  return (
    <BoardWrapper>
      <HR />
      <HeaderRow as="div">
        <Title>제목</Title>
        <Author>작성자</Author>
        <Time>작성 시간</Time>
      </HeaderRow>
      <ThinHR />
      {info && [...info].reverse().map((item, index) => {
        const createdAtDate = new Date(item.updatedAt);
        createdAtDate.setHours(createdAtDate.getHours() + 9);
 
        const year = createdAtDate.getFullYear();
        const month = String(createdAtDate.getMonth() + 1).padStart(2, '0');
        const day = String(createdAtDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}.${month}.${day}`;

        const maskedAuthor = item.author.charAt(0) + '**';
        return (
          <div key={item.id}>
          <Row onClick={() => handleRowClick(item)} address="/ManagerPage/QnA" addressSub="/ManagerPage/QnA/" actualAddress={actualAddress}>
              <Title>{item.title} 
              {item.privacy === 'PUBLIC' && <PrivacyImage src={privacyImage} alt="privacy"/>}
              {/* isCollectPage &&를 사용하여/ManagerPage/QnA 페이지일 때만 버튼생성, event.stopPropagation()를 사용하여 이후에 handleRowClick을 무력화 */}
              {isCollectPage && <AnswerButton to={`/ManagerPage/QnA/QnAResponse/${item.id}`} state={{ item }}   
               onClick={(event) => {event.stopPropagation();}}>답변하기</AnswerButton>}
              </Title>
              
              <Author style={{ transform: 'translateX(0.3vw)' }}>{maskedAuthor}</Author>
              <Time style={{ transform: 'translateX(0.2vw)' }}>{formattedDate}</Time>
            </Row>
            {index !== infoLength - 1 ? <ThinHR /> : <HR />}
          </div>
        );
      })}
    </BoardWrapper>
  );
};

export default QnABoard;

const BoardWrapper = styled.div`
  margin-top: 200vw;
  margin: 0 auto;
  width: 80vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1vw;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 1vw;
  transform: translateY(-0.5vw); //추가
  // 페이지의 실제 주소가 주어진 주소와 일치할 때 스타일 적용(전체조회페이지에 적용)
  ${props => props.actualAddress === props.address && 'margin-left: -1vw;'}
  ${props => props.actualAddress === props.addressSub && 'margin-left: -1vw;'}
`;

const Title = styled.div`
  flex: 4;
  text-align: center;
`;

const PrivacyImage = styled.img`
  width: 2vw;
  height: 2vw;
  margin-left: 0.5vw;
  margin-bottom: -0.5vw;
`;

const AnswerButton = styled(Link)`
  flex: 0.3;
  width: 5vw;
  height: 1.5vw;
  transform: translateY(-0.5vw);
  margin-left: 1vw; 
  margin-top: -2vw !important; 
  padding: 0.6vw 1vw;
  background: #8be3ff;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
  border: none;
  color: #fff;
  font-size: 0.6vw;
  font-weight: bold;
  text-decoration: none;
  //부모 요소에 막혀서 마진탑와 트렌지션,!important까지 다 안되므로
  //Row에 transform: translateY(-0.5vw);추가
`;

const Author = styled.div`
  flex: 1;
`;

const Time = styled.div`
  flex: 1;
`;

const HR = styled.hr`
  height: 0.1vw;
  background: #000;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
`;

const ThinHR = styled(HR)`
  height: 0.05vw;
  background: #B8B8B8;
`;

const HeaderRow = styled.div`
  font-weight: bold;
  font-size: 1.2vw;
  display: flex;
  justify-content: space-around;
  padding: 0.8vw;
  text-decoration: none;
  color: inherit;
`;

