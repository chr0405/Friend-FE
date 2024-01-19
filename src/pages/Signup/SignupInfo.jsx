import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Title from '../../components/title';
import CircleCheckbox from '../../components/CircleCheckbox/CircleCheckbox';
import styled from 'styled-components';
import ProfileBasic from "../../images/ProfileBasic.png"

const SignupInfo = () => {
    //로그인 정보 관리
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordCheckChange = (event) => {
        setPasswordCheck(event.target.value);
    };

    const handleCancleButton = (event) => {
        //취소 시 이전 페이지로
        navigate(-1);
    }
    const handleSubmitButton = (event) => {
        //가입완료, 정보들 서버로 전송하는 api 필요
    }

    return (
        <>
            <Header/>
            <Title title = "회원가입"/>
            <Separator />

            <AppContainer>
                <InfoMessage>먼저 프로필 사진을 등록해주세요 </InfoMessage>
                <LogoContainer>
                    <ProfileImage src={ProfileBasic} alt="profile_image" />
                </LogoContainer>

                <InfoMessage>아이디와 비밀번호를 입력해주세요</InfoMessage>
                <LoginForm>
                    <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일"/>
                    <Input type="password" value={password} onChange={handlePasswordChange} placeholder="패스워드" />
                    <Input type="password" value={passwordCheck} onChange={handlePasswordCheckChange} placeholder="패스워드 확인" />
                </LoginForm>

                <InfoMessage>기본 정보를 작성해주세요.</InfoMessage>
                <InfoName>닉네임</InfoName>
                <LoginForm>
                    <Input type="text" placeholder="닉네임을 입력해주세요."/>
                </LoginForm>

                <InfoName>연락처</InfoName>
                <LoginForm>
                    <Input type="tel"  placeholder="***-****-****"/>
                </LoginForm>

                <InfoName>생년월일</InfoName>
                <LoginForm>
                    <Input type="date"  placeholder="****/**/**"/>
                </LoginForm>

                <InfoName>성별</InfoName>
                <CircleCheckbox options={['여성', '남성']} />

                <InfoName>키</InfoName>
                <LoginForm>
                    <Input type="number"  placeholder="***cm"/>
                </LoginForm>

                <InfoName>지역</InfoName>
                <LoginForm>
                    <Input type="text"  placeholder="대략적인 **구까지만 써주세요."/>
                </LoginForm>

                <InfoName>장거리 가능 유무</InfoName>
                <CircleCheckbox options={['가능', '불가능']} />

                <InfoName>흡연 여부</InfoName>
                <CircleCheckbox options={['흡연', '비흡연']} />

                <InfoName>음주 여부</InfoName>
                <CircleCheckbox options={['음주', '비음주']} />
                    
                <InfoName>내가 속한 단과대는?</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>자기소개를 입력해주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>나의 이상형에 대해서 알려주세요!</InfoName>
                <LoginForm>
                    <Input type="text" placeholder='자세하게 적어주실 수록 좋아요!' />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 학과를 적어주세요! 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 학번를 적어주세요! (예, 20학번) 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 나이를 적어주세요! (예, 2005년생보다 어린 나이) 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 지역 조건을 적어주세요! (예, 부산 외에 지역만 매칭 원함) 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>
                
                <ButtonContainer>
                    <CancelButton onClick={handleCancleButton}>취소</CancelButton>
                    <SubmitButton  onClick={handleSubmitButton}>이어서 가입하기</SubmitButton>
                </ButtonContainer>
                
            </AppContainer>
            <Footer/>
        </>
    )
}

export default SignupInfo;


// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;

//ProfileBasic 로고 표시를 위한 스타일
const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로축에서 가운데 정렬 */
`;

//ProfileBasic 이미지 삽입
const ProfileImage = styled.img`
    margin : 20px;
    height: 200px;
`;

//수평선 스타일
const Separator = styled.div`
  height: 1px;
  background-color: Gray;
  margin: 100px; 
`;

//어떤 정보를 입력해야하는지, 알려주는 텍스트
const InfoMessage = styled.div`
    text-align: center;
    margin-top : 100px;
    margin-bottom : 20px;
    font-size: 25px; 
    width: 100%; /* 텍스트가 max-width를 넘어가더라도 크기를 조절할 수 있도록 */
`;

// 이메일과 패스워드를 입력할 칸들
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  height: 30px;
  padding: 8px;
  margin-bottom: 20px;
`;

// 칸 마다 입력해야하는 정보 알려주는 작은 텍스트
const InfoName = styled.div`
    font-size: 15px;
`;


//취소, 이어서 가입 버튼 
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 버튼을 좌우로 나눕니다. */
`;

const CancelButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #23CAFF;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  /* isFormValid가 언제 false로 설정할지 필요 */
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;