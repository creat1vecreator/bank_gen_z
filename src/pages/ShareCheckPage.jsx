import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';


const ShareCheckWrapper = styled.div`
  width: 489px;
  height: 333px;
  background: #F5FFFE;
  border-radius: 6px;
  padding: 31px 16px 31px 52px;
  margin-top: 180px;
  margin-left: 420px;
`;

const SectionName = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CommonInfoSection = styled.div`
  display: flex;
  margin-bottom: 46px;
`;

const CommonInfo = styled.div`
  padding: 12px 15px;
  width: 193px;
  height: 87px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
  margin-right: 21px;


  & > * {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 13px;


  }

  & > *:last-child {
    font-family: MullerRegular, serif;
  }
`;
const CommonInfoShared = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .shared-with {
    font-size: 11px;
    text-align: right;

  }

  .total-sum {
    font-size: 20px;
    text-align: right;

  }
`;

const SendCheck = styled.div`

  width: 170px;
  height: 28px;
  background: linear-gradient(0deg, #BCF7F3, #BCF7F3);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  float: right;
`;

const BeforeBtn = styled.div`
  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-bottom: 11px;
  }

`;

const CardCheck = styled.div`

`;

const ShareWith = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SectionWithPeople = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 20px;
  }

`;
const PersonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  

  .checkbox {
    margin-left: 30px;
    width: 10px;
    height: 10px;
    border: 1px solid #414141;
    background: white;
  }

  .checked {
    background: lime;
  }

`;

export const Checkbox = styled.div`
  margin-left: 30px;
  width: 10px;
  height: 10px;
  border: 1px solid #414141;
  background: white;
  

`;


const ImgHuman = styled.img`
  width: 57px;
  height: 57px;
  margin-bottom: 6px;

`;
const ColorizingFirstChild = (evt, setPers) => {


        evt.target.parentElement.querySelector('.checkbox').classList.toggle('checked');

    setPers();


}
export const Person = ({name, setPers}) => {
    return (
        <div onClick={(evt) => {
            ColorizingFirstChild(evt, setPers)
        }}>
            <PersonWrapper>
                <Checkbox className={'checkbox'}/>
                <ImgHuman src={require('../images/man.png')}/>
                <div>{name}</div>
            </PersonWrapper>
        </div>
    )
}

export const ChapterName = ({chapterName}) => {
    return (
        <SectionName>{chapterName} <CloseIcon sx={{
            fontSize: '2.5rem',
            cursor: 'pointer'
        }}/> </SectionName>
    )
}
// let person
export const ShareCheckPage = () => {


    const [personsToShare, setPersonsToShare] = useState(1);
    console.log('persons to dhare initial:', personsToShare)

    const setPers = () => {
        setPersonsToShare(document.querySelectorAll('.checked').length + 1);
        console.log('now persons are', personsToShare);
    }

    useEffect(() => {
        console.log('rendered component')
    }, [personsToShare]);

    return (
        <ShareCheckWrapper>
            <ChapterName chapterName={'Деление чека'}/>

            <CommonInfoSection>
                <CommonInfo>
                    <div>Хачапурия</div>
                    <div>1457,56₽</div>
                </CommonInfo>

                <CommonInfoShared>
                    <BeforeBtn>
                        <div className={'shared-with'}>Поделено между {personsToShare}:</div>
                        <div className={'total-sum'}>{(1457.56 / personsToShare.toFixed(2)).toFixed(2)}</div>
                    </BeforeBtn>
                    <SendCheck>Отправить друзьям</SendCheck>
                </CommonInfoShared>
            </CommonInfoSection>
            <CardCheck>
                <ShareWith>Поделить между:</ShareWith>

                <SectionWithPeople>
                    <Person name={'Игорь Проськов'} setPers={setPers}/>
                    <Person name={'Андрей'} setPers={setPers}/>
                    <Person name={'Иван'} setPers={setPers}/>
                    <Person name={'Дашка'} setPers={setPers}/>
                    <Person name={'Катя'} setPers={setPers}/>

                </SectionWithPeople>

            </CardCheck>
        </ShareCheckWrapper>
    );
};

