import {HeaderComponent} from "../components/HeaderComponent";
import styled from "styled-components";
import {FirstSection} from "../components/utils/FirstSection";
import {Link} from "react-router-dom";
import React from 'react';



const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 41px 52px;
`;

const Section1 = styled.div`
  display: flex;
`
const Section2 = styled.div`
  display: flex;
`
const SavingsAccountTypesWrapper = styled.div`
  width: 358px;
  height: 159px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  margin-bottom: 18px;
  margin-right: 18px;
`
const AccountType = styled.div`
  font-size: 20px; 
  padding-top: 25px;
  padding-left: 29px;
`
const Subtitle = styled.div`
  font-size: 11px;
  color: rgba(65, 65, 65, 0.8);
  width: 234px;
  padding-top: 15px;
  padding-left: 29px;
`
const SavingsAccounts = styled.div`
`
const Button = styled.div`
  margin-top: 21px;
  margin-left: 207px;
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
`;


export const SavingsAccount = () => {
    return (<>
            <HeaderComponent/>
            <Wrapper>

                <FirstSection/>
                <SavingsAccounts>
                    <Section1>
                        <SavingsAccountTypesWrapper>
                            <AccountType>Стандартный счет</AccountType>
                            <Subtitle>
                                Копите и свободно распоряжайтесь деньгами
                            </Subtitle>
                           <Button>
                               Создать
                           </Button>
                        </SavingsAccountTypesWrapper>
                        <SavingsAccountTypesWrapper>
                            <AccountType>Семейный</AccountType>
                            <Subtitle>
                                Накопительный счёт, доступный для нескольких пользователей
                            </Subtitle>
                            <Link to='/createSavingsAccount/createFamilyAccount' style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                                <Button>
                                    Создать
                                </Button>
                            </Link>
                        </SavingsAccountTypesWrapper>
                    </Section1>
                    <Section2>
                        <SavingsAccountTypesWrapper>
                            <AccountType>Сберегательный счет</AccountType>
                            <Subtitle>
                                Для повседневного свободного распоряжения деньгами на счёте
                            </Subtitle>
                            <Button>
                                Создать
                            </Button>
                        </SavingsAccountTypesWrapper>
                        <SavingsAccountTypesWrapper>
                            <AccountType>Накопительный счет</AccountType>
                            <Subtitle>
                                Уведомить контакта о возврате долга за один день до даты возвращения.
                            </Subtitle>
                            <Button>
                                Создать
                            </Button>
                        </SavingsAccountTypesWrapper>
                    </Section2>
                </SavingsAccounts>
            </Wrapper>

        </>
    )
}
