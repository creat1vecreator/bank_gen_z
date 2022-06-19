import {HeaderComponent} from "../components/HeaderComponent";
import styled from "styled-components";
import {FirstSection} from "../components/utils/FirstSection";
import React from "react";
import {Checkbox, Person} from "./ShareCheckPage";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";


const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 41px 52px;
`;

const Members = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-left: 30px;
  padding-bottom: 15px;

  & > * {
    padding-right: 15px;
    font-size: 11px;
    width: 67px;
  }

`;
const FamilyAccountWrapper = styled.div`
  width: 473px;
  height: 687px;
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
  padding-bottom: 19px;
`;

const Text = styled.div`
  padding-left: 9px;

`;

const AccountCardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  font-size: 11px;

  .checked {
    background: lime;
  }
`;

const AboutText = styled.div`
  font-size: 14px;
  padding-left: 30px;
`;
const AccountCard = ({imgSrc, name}) => {

    return (
        <AccountCardWrapper className='account-wrapper' onClick={CheckBoxColorChanger}>
            {name === 'Spotify' || name === 'Photoshop' ?
                <Checkbox className={'checkbox checked'}/>
                : <Checkbox className={'checkbox'}/>

            }
            <Text>
                {name}
            </Text>


        </AccountCardWrapper>
    )

}
const CheckBoxColorChanger = (evt) => {

    if (evt.target.parentElement.classList.contains('account-wrapper')) {
        evt.target.parentElement.querySelector('.checkbox').classList.toggle('checked');

    } else if (evt.target.classList.contains('account-wrapper')) {
        evt.target.querySelector('.checkbox').classList.toggle('checked');
    }

}
const AboutAccountWrapper = styled.div`

  width: 413px;
  height: 310px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  margin-left: 30px;

`;
const Condition = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-bottom: 12px;
`;
const ConditionText = styled.div`
  font-size: 14px;
  width: 260px;
  padding-left: 6px;
  
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

export const FamilyAccount = () => {
    return (<>
            <HeaderComponent/>
            <Wrapper>

                <FirstSection/>
                <FamilyAccountWrapper>
                    <Title>
                        Семейный счет
                    </Title>

                    <Subtitle>
                        Карта счета
                    </Subtitle>
                    <AccountCard name={'Создать карту счета'}/>
                    <Title>
                        Добавить участников:
                    </Title>
                    <Members>

                        <Person name={'Игорь Проськов'}/>
                        <Person name={'Андрей'}/>
                        <Person name={'Иван'}/>
                        <Person name={'Дашка'}/>
                        <Person name={'Катя'}/>

                    </Members>

                    <AboutAccountWrapper>
                        <Title>
                            О счете:
                        </Title>
                        <AboutText>
                            Процентная ставка: <strong>10%</strong>
                        </AboutText>
                        <Title>
                            Условия:
                        </Title>

                        <Condition>
                            <AddOutlinedIcon sx={{
                                color: '#00FF99',
                                fontSize: '20px'
                            }}/>
                            <ConditionText>
                                Можно пополнять и снимать
                                в любое время без ограничений
                            </ConditionText>
                        </Condition>
                        <Condition>
                            <AddOutlinedIcon sx={{
                                color: '#00FF99',
                                fontSize: '20px'
                            }}/>
                            <ConditionText>
                                Проценты выплачиваются
                                на счёт
                            </ConditionText>
                        </Condition>
                        <Condition>
                            <AddOutlinedIcon sx={{
                                color: '#00FF99',
                                fontSize: '20px'
                            }}/>
                            <ConditionText>
                                Периодичность выплаты процентов
                                каждый месяц
                            </ConditionText>
                        </Condition>
                        <Condition>
                            <AddOutlinedIcon sx={{
                                color: '#00FF99',
                                fontSize: '20px'
                            }}/>
                            <ConditionText>
                                Семейный чат
                            </ConditionText>
                        </Condition>
                    </AboutAccountWrapper>
                    <Button>
                        Создать
                    </Button>
                </FamilyAccountWrapper>
            </Wrapper>

        </>
    )
}