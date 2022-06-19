import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Members, TypeSumComponent} from "../components/CreateMoneyCollection";
import {Checkbox, Person} from "./ShareCheckPage";
import {AccordionDebts} from "../components/utils/AccordionDebts";
import {DetailInfo} from "../components/AccordionSubscriptions";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const MainSection = styled.div`
  width: 777px;
  height: 547px;
  background: #F5FFFE;
  border-radius: 20px;
  padding-left: 52px;
  padding-top: 32px;
`;


const BtnSection = styled.div`
  display: flex;
  width: 150px;
  height: 12px;
  font-family: 'Muller', serif;
  font-style: normal;
  font-size: 12px;
  text-align: center;
  color: #414141;

  & > *:first-child {
    margin-right: 8px;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  background: #F5FFFE;
  border: none;
  font-size: 12px;
  text-align: center;
`;

const Btns = ({setSection}) => {
    return (
        <>
            <BtnSection>

                <Btn onClick={evt => setSection(evt.target.innerText)}>

                    Долги мне
                </Btn>

                <Btn onClick={evt => setSection(evt.target.innerText)}>
                    Мои долги
                </Btn>

            </BtnSection>
        </>
    )
}

const NotificationWrapper = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 39px;

  & > *:first-child {
    margin-right: 9px;
  }

  font-size: 11px;
  color: rgba(65, 65, 65, 0.8);

  .checked {
    background: lime;
  }
`;

const ColorizingFirstChild = (evt) => {
    evt.target.parentElement.querySelector('.checkbox').classList.toggle('checked');


}
const Notification = () => {

    return (
        <NotificationWrapper onClick={ColorizingFirstChild}>
            <Checkbox className={'checkbox'}/>
            <div>Уведомить контакта о возврате долга за один день до даты возвращения.</div>
        </NotificationWrapper>
    )
}
const AddBorrowerWrapper = styled.div`
  font-size: 12px;
  margin-bottom: 62px;

  & > *:first-child {
    font-size: 12px;
    margin-bottom: 18px;
  }
`;
const AddBorrower = ({sectionName}) => {
    return (
        <AddBorrowerWrapper>
            <div>{
                sectionName === 'Долги мне'
                    ?
                    'Добавить заёмщика'
                    : 'Добавить заимодателя'
            }
            </div>
            <Members>
                <Person name={'Игорь Проськов'}/>
                <Person name={'Андрей'}/>
                <Person name={'Иван'}/>
                <Person name={'Дашка'}/>
                <Person name={'Катя'}/>
            </Members>
        </AddBorrowerWrapper>

    )
}


const SectionDebtName = styled.div`
  font-size: 12px;

`;


export const BorrowedMoney = () => {
    const [section, setSection] = useState('Долги мне');
    useEffect(() => {
        console.log('section:', section);
    })

    return (
        <Wrapper>
            <MainSection>
                <TypeSumComponent
                    header={'Заёмные средства'}
                    typeOfOperation={'долга'}
                    chooseSection={<Btns setSection={setSection}/>}
                />

                <Notification/>
                <AddBorrower sectionName={section}/>

                {

                    section === 'Долги мне'
                        ?
                        <>
                            <SectionDebtName>
                                Мои активные долги
                            </SectionDebtName>
                            <AccordionDebts name={'Иван'} sum={'669 ₽'}/>
                            <AccordionDebts name={'Никита'} sum={'5000 ₽'}/>

                        </>


                        :
                        <>
                            <SectionDebtName>
                                Активные должники
                            </SectionDebtName>

                            <AccordionDebts name={'Иван'} sum={'300 ₽'} DetailInfo={DetailInfo}/>

                        </>
                }
            </MainSection>

        </Wrapper>
    );
};

