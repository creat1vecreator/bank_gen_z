import React, {useState} from 'react';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import {Person} from "../pages/ShareCheckPage";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 180px;
`;
const CreateMoneyCollectionWrapper = styled.div`
  width: 489px;
  height: 333px;
  background: #F5FFFE;
  border-radius: 6px;
  padding-top: 31px;
  padding-left: 32px;
  padding-right: 24px;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  & > *:first-child {
    margin-right: 300px;
  }

`;

const HeaderCardWithSection = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 27px;
  padding-right: 32px;

  & > *:first-child {
    margin-right: 9px;
  }
`;

const TypeSum = styled.div`
  font-size: 11px;
  margin-bottom: 12px;
  padding-top: 27px;
`;
const Input = styled.input`
  border: none;
  width: 115px;
  height: 27px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;

`;
const InputAndBtn = styled.div`
  display: flex;

  margin-bottom: 31px;

  & > *:first-child {
    margin-right: 22px;
  }
`;

const AddMembers = styled.div`
  margin-bottom: 19px;
  font-size: 20px;
`;

const BtnCreate = styled.button`
  cursor: pointer;
  border: none;
  width: 74px;
  height: 28px;
  
  
  background: linear-gradient(0deg, #BCF7F3, #BCF7F3);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  align-items: center;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;



export const Members = styled.div`
  display: flex;
  align-items: center;
`;

export const TypeSumComponent = ({header, typeOfOperation, setSum, link, chooseSection}) => {
    console.log('is defined?', !!chooseSection);
    return (<>

            {
                !!chooseSection
                    ?
                    <>
                        <HeaderCardWithSection>
                            <div> {header}</div>
                            <HeaderCard>
                                <div>{chooseSection}</div>
                                <CloseIcon sx={{cursor: "pointer"}}/>
                            </HeaderCard>
                        </HeaderCardWithSection>
                        <TypeSum>Укажите сумму {typeOfOperation}:</TypeSum>
                    </>

                    :
                    <>
                        <HeaderCard>
                            {header}
                            <CloseIcon/>
                        </HeaderCard>
                        <TypeSum>Укажите сумму {typeOfOperation}:</TypeSum>
                    </>
            }

            <InputAndBtn>
                {setSum
                    ?
                    <Input type={'text'} placeholder={'Введите сумму...'} onChange={evt => setSum(evt.target.value)}/>
                    :
                    <Input type={'text'} placeholder={'Введите сумму...'}/>}

                {link ?
                    <Link to={link}>
                        <BtnCreate>
                            <div>
                                Создать
                            </div>
                        </BtnCreate>
                    </Link>
                    :
                    <BtnCreate>
                        <div>
                            Создать
                        </div>
                    </BtnCreate>

                }

            </InputAndBtn>
        </>
    )
}

export const CreateMoneyCollection = () => {
    const [sum, setSum] = useState();

    return (
        <Wrapper>
            <CreateMoneyCollectionWrapper>

                <TypeSumComponent
                    header={'Создать сбор'}
                    typeOfOperation={'Сбора'}
                    setSum={setSum}
                    link={`/createCollection/collectingPage/${sum}`}
                />

                <AddMembers>Добавить участников</AddMembers>

                <Members>

                    <Person name={'Игорь Проськов'}/>
                    <Person name={'Андрей'}/>
                    <Person name={'Иван'}/>
                    <Person name={'Дашка'}/>
                    <Person name={'Катя'}/>

                </Members>

            </CreateMoneyCollectionWrapper>
        </Wrapper>
    );
};