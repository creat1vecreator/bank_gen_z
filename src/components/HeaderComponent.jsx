import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  background: #E9FDFC;
  padding-left: 55px;
  padding-right: 90px;
`;

const LogoSection = styled.div`
  box-sizing: border-box;

`;
const SectionWithBtns = styled.div`

  & > *:not(:last-child) {
    margin-right: 17px;
  }

  display: flex;
  align-items: center;
`;
const Img = styled.img`
  :first-child {
    width: 55px;
    height: 38px;
    
  }
;
  :nth-child(5) {
    width: 25px;
    height: 25px;
  }
;
  width: 18px;
  height: 19px;
  cursor: pointer;
`;
const ImgAvatar = styled.img`
    width: 35px;
    height: 35px;
  cursor: pointer;
`;

const InputContainer = styled.label`
  padding: 1rem 2rem;
  display: flex;
  align-items: center
`;


const Input = styled.input`
  font-family: MullerRegular, serif;
  border-radius: 5px;

  &:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.53);
  }

  width: 252px;
  height: 30px;
  background: rgba(255, 255, 255, 0.53);
  box-shadow: 0 1px 10px rgba(157, 157, 157, 0.1);
  backdrop-filter: blur(31px);
  border: none;

`;
const ImgSearch = styled.img`
  position: absolute;
  width: 18px;
  height: 19px;
  margin-left: 225px;
  border-radius: 100px;
  cursor: pointer;
`;

export const HeaderComponent = () => {
    return (
        <HeaderWrapper>

            <LogoSection>
                <Link to='/'>
                    <Img src={require('../images/logo.png')}/>
                </Link>
            </LogoSection>


            <SectionWithBtns>
                <InputContainer>
                    <Input placeholder={'   Поиск'}/>
                    <ImgSearch src={require('../images/icon_search.png')}/>
                </InputContainer>
                <Img src={require('../images/settings.png')}/>
                <Img src={require('../images/message.png')}/>
                <Img src={require('../images/notifications.png')}/>
                <Link to='/personalPage'>
                    <ImgAvatar src={require('../images/avatar.png')}/>
                </Link>
            </SectionWithBtns>
        </HeaderWrapper>
    );
};

