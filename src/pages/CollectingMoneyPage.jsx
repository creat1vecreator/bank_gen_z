import React, {useState} from 'react';
import styled from "styled-components";
import {FirstSection} from "../components/utils/FirstSection";
import {HeaderComponent} from "../components/HeaderComponent";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import {useParams} from "react-router-dom";


const CollectingWrapper = styled.div`
  padding: 41px 52px;
  display: flex;

`;
const MainSection = styled.div`
  display: flex;
  width: 911px;
  height: 579px;
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);

  border-radius: 5px;
`;

const ContactsSection = styled.div`
  box-sizing: border-box;
  height: 579px;
  width: 298px;
  padding-top: 22px;
  margin-right: 32px;

`;

const ImgIcon = styled.img`

  width: 25px;
  height: 25px;

`;

const ContactWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 314px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 10px;
  border-bottom: 1px solid #00FF99;
  background: ${props => props.colorized ? "#ACFFDF" : ""};

  & > *:last-child {
    display: flex;
    align-items: flex-end;
  }

  .checked {
    background: #ACFFDF;

    & > * {
      background: #ACFFDF;

    }
  }
`;

const ChapterName = styled.div`
  box-sizing: border-box;
  margin-left: 29px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 18px;
    font-size: 20px;
  }

  & > *:last-child {
    font-size: 14px;
  }
`;
const NameAndLogo = styled.div`
  margin-left: 31px;
  display: flex;
  align-items: center;

  & > * {
    margin-right: 8px;
  }
`;
const TimeInfo = styled.div`
  box-sizing: border-box;
  font-size: 7px;
  color: rgba(79, 73, 73, 0.8);
`;

const ChatSection = styled.div`
  box-sizing: border-box;
  width: 577px;
  height: 579px;
  background: #E9FDFC;
  box-shadow: 04px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 0 5px 5px 0;
  margin-left: 46px;
`;

const ChatHeader = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 18px 12px 18px 22px;
  justify-content: space-between;
  height: 50px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px 5px 0 0;
  margin-bottom: 24px;

`;

const ChatName = styled.div`
  font-size: 14px;

`;
const Members = styled.div`
  font-size: 10px;
  cursor: pointer;

`;
const CardProgress = styled.div`
  width: 278px;
  height: 235px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  padding-top: 23px;
  margin-bottom: 32px;

  & > *:first-child {
    margin-left: 19px;
    margin-bottom: 33px;
  }

`;

const CurrSum = styled.div`
  font-size: 32px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const BarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 19px;
  padding-right: 25px;
  margin-bottom: 40px;
`;

const BarProgressPositive = styled.div`
  box-sizing: border-box;
  width: 227px;
  height: 11px;
  background: #00FF99;
`;
const BarProgressNegative = styled.div`

  width: 70px;
  height: 11px;
  background: #4F4949;
`;

const ButtonShare = styled.button`
  width: 86px;
  height: 28px;
  background: linear-gradient(0deg, #BCF7F3, #BCF7F3);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-bottom: 29px;
`;

const ButtonShareWrapper = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: flex-end;
`;
const Time = styled.div`

  display: flex;
  align-items: flex-end;
  margin-right: 10px;
  font-size: 7px;
  color: rgba(79, 73, 73, 0.8);
`;

const AvatarAndName = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 6px;

`;
const ImgMessage = styled.img`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
const NameMessage = styled.div`
  font-size: 12px;

`;
const MessageText = styled.div`


`;
const MessageInfo = styled.div`
  margin-bottom: 13px;
`;

const ChatSectionWrapper = styled.div`
  box-sizing: border-box;
  padding-left: 46px;
`;

const MessageAndTime = styled.div`
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  padding-top: 9px;
  padding-left: 13px;
  padding-bottom: 6px;
  max-width: 200px;

`;

const Message = ({name, message, time}) => {

    return (
        <MessageInfo>
            <AvatarAndName>
                <ImgMessage src={require('../images/man.png')}/>
                <NameMessage>{name}</NameMessage>
            </AvatarAndName>
            <MessageAndTime>
                <MessageText>{message}</MessageText>
                <Time>{time}</Time>
            </MessageAndTime>
        </MessageInfo>

    )

}

const TypeMessage = styled.div`
    display: flex;
  align-items: center;
`;

const TextInput = styled.input`
  
  border: none;
  width: 400px;
  height: 51px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px 5px 0 0;
  margin-right: 10px;

`;

const Contact = ({name, time}) => {

    const [colorized, setColorized] = useState(false);
    const settingColor = (evt) => {
        setColorized(!colorized)

    }

    return (
        <ContactWrapper onClick={settingColor} colorized={colorized}>
            <NameAndLogo>
                <ImgIcon src={require('../images/man.png')}/>
                {name}
            </NameAndLogo>

            <TimeInfo>{time}</TimeInfo>
        </ContactWrapper>
    )
}
export const CollectingMoneyPage = () => {
    const {sum} = useParams();

    return (
        <>
            <HeaderComponent/>
            <CollectingWrapper>
                <FirstSection/>
                <MainSection>
                    <ContactsSection>
                        <ChapterName>
                            <div>Чаты</div>
                            <div>Создать сбор</div>

                        </ChapterName>
                        <Contact name={'Андрей'} time={'22:21'}/>
                        <Contact name={'Мамуля'} time={'22:21'}/>
                        <Contact name={'Папуля'} time={'22:21'}/>
                        <Contact name={'Артём'} time={'22:21'}/>
                        <Contact name={'Любимки'} time={'22:21'}/>
                        <Contact name={'Арина Морина'} time={'22:21'}/>
                        <Contact name={'Игорь Проськов'} time={'22:21'}/>
                    </ContactsSection>

                    <ChatSection className='chat-section'>
                        <ChatHeader>
                            <ChatName>Сбор на др Саше</ChatName>
                            <Members>Участники</Members>
                        </ChatHeader>

                        <ChatSectionWrapper>

                            <CardProgress>
                                <div>Собираем</div>
                                <CurrSum>{sum} ₽</CurrSum>
                                <BarWrapper>
                                    <BarProgressPositive/>
                                    <BarProgressNegative/>

                                </BarWrapper>
                                <ButtonShareWrapper>
                                    <ButtonShare>
                                        Перевести
                                    </ButtonShare>
                                </ButtonShareWrapper>
                                <Time>22:11</Time>
                            </CardProgress>
                            <Message name='Игорь Проськов' message='Урааа, почти' time='22:21'/>
                            <Message name='Андрей' message='Вперед!!!' time='22:21'/>

                            <TypeMessage>
                            <AttachFileIcon sx={{
                                transform: 'rotate(45deg)',
                                cursor: 'pointer',
                                marginRight: '12px'
                            }}/>
                                <TextInput placeholder='Напишите сообщение...'/>
                                <SendIcon sx={{
                                    cursor: 'pointer'
                                }}/>
                            </TypeMessage>
                        </ChatSectionWrapper>

                    </ChatSection>


                </MainSection>
            </CollectingWrapper>
        </>
    )

};

