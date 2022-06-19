import {HeaderComponent} from "../components/HeaderComponent";
import styled from "styled-components";
import {FirstSection} from "../components/utils/FirstSection";
import React from "react";





const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 41px 52px;
`;
const Data = styled.div`
  width: 100px;
  height: 37px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  margin-left: 30px;
  margin-bottom: 12px;
`;


const InputWrapper = styled.div`
  width: 281px;
  height: 37px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  margin-left: 30px;
  margin-bottom: 28px;
  display: flex;
`;
const InputText = styled.div`
  font-size: 11px;
  color: rgba(65, 65, 65, 0.6);
  padding-left: 6px;
  padding-top: 13px;
`;

const MoneyBoxWrapper = styled.div`
  width: 500px;
  height: 600px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
`;

const Title = styled.div`
  padding-left: 30px;
  padding-top: 25px;
  font-size: 20px;
  padding-bottom: 25px;
`;
const Subtitle = styled.div`
  font-size: 14px;
  padding-left: 30px;
  padding-bottom: 12px;
`;

const Button = styled.div`
  margin-top: 21px;
  margin-left: 310px;
  width: 132px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  background: linear-gradient(0deg, #BCF7F3, #BCF7F3);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
`
export const MoneyBox = () => {
    return (<>
            <HeaderComponent/>
            <Wrapper>

                <FirstSection/>
                <MoneyBoxWrapper>
                    <Title>
                        Копилка
                    </Title>
                    <Subtitle>
                        Название копилки
                    </Subtitle>
                    <InputWrapper>
                        <InputText>
                            Введите назначение копилки...
                        </InputText>
                    </InputWrapper>
                    <Subtitle>
                        Карта списания
                    </Subtitle>
                    <InputWrapper>
                        <InputText>
                            Выберите карту
                        </InputText>
                    </InputWrapper>
                    <Subtitle>
                        Карта списания
                    </Subtitle>
                    <InputWrapper>
                        <InputText>
                            Выберите  счет
                        </InputText>

                    </InputWrapper>
                    <Subtitle>
                        Вид копилки
                    </Subtitle>
                    <InputWrapper>
                        <InputText>
                            Выберите вид копилки
                        </InputText>
                    </InputWrapper>
                    <Subtitle>
                        Накопление до определенный даты
                    </Subtitle>

                    <Data>
                        <InputText>
                            __ . __ . ____
                        </InputText>
                    </Data>
                    <Button>
                        Создать
                    </Button>
                </MoneyBoxWrapper>
            </Wrapper>

        </>
    )
}