import React from 'react';
import styled from "styled-components";
import SettingsIcon from '@mui/icons-material/Settings';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const GridContainer = styled.div`
  display: grid;
  row-gap: 18px;
  column-gap: 12px;
  grid-template-columns: 120px 110px;

`;
const FastActionsWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 16px;
  width: 284px;
  height: 243px;
  background: #E9FDFC;
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
`;

const ChapterName = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > * {
    font-size: 14px;
  }

`;

const CardWithInfo = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  & > * {
    font-size: 13px;

  }

  & > *:last-child {
    margin-top: 35px;
  }

  display: flex;
  justify-content: space-between;
  width: 121px;
  height: 71px;
  padding: 12px 10px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;

`;

const CardWithInfoAdd = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 71px;
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
`;

const InfoSection = ({chapter}) => {

    if (chapter) {
        return (

            <CardWithInfo>
                <div>{chapter}</div>
                <div><ArrowForwardIosIcon sx={{
                    fontSize: '1rem',
                }}/></div>
            </CardWithInfo>
        )
    }

}
export const FastActions = () => {
    return (
        <FastActionsWrapper>
            <ChapterName>
                <div>
                    Быстрые действия
                </div>
                <SettingsIcon sx={{
                    width: '9.98px',
                    height: '10.24px',
                    cursor: 'pointer'
                }}/>
            </ChapterName>

            <GridContainer>
                <InfoSection chapter={'Запросить средства у Андрей'}/>
                <InfoSection chapter={'Пополнить копилку "Путешествие"'}/>
                <InfoSection chapter={'Пополнить копилку "Путешествие"'}/>
                <CardWithInfoAdd>
                    <AddOutlinedIcon sx={{
                        color: '#00FF99',
                        fontSize: '3rem'

                    }}/>
                </CardWithInfoAdd>



            </GridContainer>

        </FastActionsWrapper>
    );
};

