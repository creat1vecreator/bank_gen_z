import React from 'react';
import styled from "styled-components";


const CostAnalysisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 218px;
  height: 479px;
  padding: 20px 12px;
  box-sizing: border-box;
  background: #E9FDFC;
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;

  & > * {
    margin-bottom: 20px;
  }
`;

const MainInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

`;
const ChapterName = styled.div`
  font-weight: 500;
  font-size: 14px;

`;

const Month = styled.div`
  cursor: pointer;
  font-size: 10px;
`;

const CardInfo = styled.div`
  cursor: pointer;
  display: flex;
  padding: 16px 27px;
  box-sizing: border-box;
  width: 194.02px;
  height: 82.08px;
  background: rgba(255, 255, 255, 0.33);
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);

  border-radius: 5px;
  transform: matrix(1, 0, 0.01, 1, 0, 0);
  
`;

const ImgCard = styled.img`
  width: 75px;
  height: 75px;
  margin-left: -50px;

 
`;

const Costs = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 12px;

    &:not(:first-child) {
    }
  }

  & > *:first-child {
    font-size: 14px;
  }
`;

const DetailInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;

  & > *:first-child {
    font-size: 13px;
    margin-bottom: 8px;
  }

  & > *:last-child {
    font-size: 14.5px;

  }


`;
const TypeOfCost = styled.div`
  box-sizing: border-box;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 7px;
  font-size: 11px;
  width: ${props => props.width};
  border-bottom: 7px solid ${props => props.border};

`;


export const CostAnalysis = () => {
    return (
        <CostAnalysisWrapper>
            <MainInfoSection>

                <ChapterName>
                    Анализ расходов и доходов
                </ChapterName>
                <Month>
                    Апрель
                </Month>
            </MainInfoSection>
            <CardInfo>
                <ImgCard src={require('../images/circleGreen.png')}/>
                <DetailInfo>
                    <div>Доходы</div>
                    <div>40660.00</div>
                </DetailInfo>

            </CardInfo>

            <CardInfo>

                <ImgCard src={require('../images/circleRed.png')}/>
                <DetailInfo>
                    <div>Расходы</div>
                    <div>45860.00</div>
                </DetailInfo>

            </CardInfo>

            <Costs>
                <div>Расходы</div>
                <TypeOfCost width={'170px'} border={'#16FFA2'}> Магазины</TypeOfCost>
                <TypeOfCost width={'100px'} border={'#69F9C0'}>Переводы </TypeOfCost>
                <TypeOfCost width={'70px'} border={'#ADFFDE'}> Развлечения</TypeOfCost>
                <TypeOfCost width={'70px'} border={'#ADFFDE'}>Кафе и рестораны</TypeOfCost>
            </Costs>
        </CostAnalysisWrapper>
    );
};

