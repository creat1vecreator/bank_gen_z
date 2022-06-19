import {HeaderComponent} from "../components/HeaderComponent";
import styled from "styled-components";
import {FirstSection} from "../components/utils/FirstSection";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 41px 52px;
`;
const PersonalInfoWrapper = styled.div`
  padding-left: 53px;
`;

const Name = styled.div`
  font-size: 24px;
  padding-bottom: 22px;
`;

const Subtitle = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;
const Subtitle2 = styled.div`
  display: flex;
  padding-bottom: 33px;
`;
const AchievementItems = styled.div`
  display: flex;
  padding-bottom: 33px;
  padding-top: 33px;
`;
const Achievement = styled.div`
  padding-right: 26px;
  font-size: 13px;
`;
const Img = styled.img`
  width: 94px;
  height: 94px;
  padding-bottom: 17px;
  cursor: pointer;
`;


const PersonalDescription = styled.div`
  display: flex;
  padding-bottom: 33px;
`;
const PersonalDescriptionWrapper = styled.div`
  width: 284px;
  height: 162px;
  left: 462px;
  top: 430px;
  background: #E9FDFC;
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 6px;
  margin-right: 21px;
`;
const Title = styled.div`
  padding-left: 17px;
  padding-top: 20px;
  padding-bottom: 18px;
  display: flex;
`;
const ValueWrapper = styled.div`
  width: 246.02px;
  height: 50.87px;
  left: 478.66px;
  top: 488.61px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 6px;
  margin: auto
`;
const Settings = styled.div`
  padding-top: 25px;
  color: #4F4949;
  font-size: 11px;
  padding-left: 211px;
  cursor: pointer;
`;
const ShowINN = styled.div`
  color: #4F4949;
  font-size: 11px;
  padding-top: 3.5px;
  cursor: pointer;
  padding-left: 166px;
`;
const ShowPasport = styled.div`
  color: #4F4949;
  font-size: 11px;
  padding-top: 3.5px;
  cursor: pointer;
  padding-left: 139px;
`;
const Value = styled.div`
  padding-left: 14px;
  padding-top: 15px;
`
const Value2 = styled.div`
  padding-left: 14px;
  padding-top: 15px;
  font-size: 12px;
  width: 213px;
`
const Registration = styled.div`
  color: #4F4949;
  font-size: 14px;
  padding-left: 18px;
  cursor: pointer;
`
const DocumentInfo = styled.div`
  padding-left: 17px;
  padding-bottom: 13px;
  font-size: 14px;
  color: #000000;
  filter: blur(4px);
`;


export const PersonalPage = () => {

    return (<>
            <HeaderComponent/>
            <Wrapper>
                <FirstSection/>
                <PersonalInfoWrapper>
                    <Name>Иванова Анна Ивановна</Name>
                    <Subtitle>Достижения</Subtitle>
                    <AchievementItems>
                        <Achievement>
                            <Img src={require('../images/achievement1.png')}/>
                            <Subtitle>Накопитель</Subtitle>
                        </Achievement>
                        <Achievement>
                            <Img src={require('../images/achievement2.png')}/>
                            <Subtitle>Ответственный
                                финансист</Subtitle>
                        </Achievement>
                        <Achievement>
                            <Img src={require('../images/achievement3.png')}/>
                            <Subtitle>Мамин
                                инвестор</Subtitle>
                        </Achievement>
                        <Achievement>
                            <Img src={require('../images/achievement4.png')}/>
                            <Subtitle>Помогатор</Subtitle>
                        </Achievement>
                    </AchievementItems>
                    <PersonalDescription>
                        <PersonalDescriptionWrapper>
                            <Title>
                                Ваш кэшбэк
                            </Title>
                            <ValueWrapper>
                                <Value>123.56 ₽</Value>
                            </ValueWrapper>
                            <Settings>
                                Настроить
                            </Settings>
                        </PersonalDescriptionWrapper>
                        <PersonalDescriptionWrapper>
                            <Title>
                                Тариф для студента
                            </Title>
                            <ValueWrapper>
                                <Value2>Полезные категории кэшбека и другие привелегии для учащихся</Value2>
                            </ValueWrapper>
                            <Settings>
                                Настроить
                            </Settings>
                        </PersonalDescriptionWrapper>
                    </PersonalDescription>
                    <Subtitle2>
                        Мои документы
                        <Registration>Зарегистрировать юридическое лицо</Registration>
                    </Subtitle2>
                    <PersonalDescription>
                        <PersonalDescriptionWrapper>
                            <Title>
                                Паспорт
                                <ShowPasport>
                                    Показать
                                </ShowPasport>
                            </Title>
                            <DocumentInfo>
                                2218 567845
                            </DocumentInfo>
                            <DocumentInfo>
                                08.06.2019
                            </DocumentInfo>
                            <DocumentInfo>
                                Выдан гу мвд по ниж району
                            </DocumentInfo>
                        </PersonalDescriptionWrapper>
                        <PersonalDescriptionWrapper>
                            <Title>
                                ИНН
                                <ShowINN>
                                    Показать
                                </ShowINN>
                            </Title>
                            <DocumentInfo>
                                2218 567845 909864
                            </DocumentInfo>
                            <DocumentInfo>
                                Выдан гу мвд по ниж району
                            </DocumentInfo>

                        </PersonalDescriptionWrapper>
                    </PersonalDescription>

                </PersonalInfoWrapper>
            </Wrapper>
        </>
    )
}