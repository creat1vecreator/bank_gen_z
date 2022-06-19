import React from 'react';
import styled from "styled-components";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Link} from "react-router-dom";


export const GridContainer = styled.div`
  display: grid;
  row-gap: 18px;
  column-gap: 12px;
  grid-template-columns: 215px 215px;

`;

const CardWithInfo = styled.div`
  color: black;
  cursor: pointer;
  text-decoration: none;

  .chapter {
    text-decoration: none;

  }

  & > * {
    font-size: 14px;
    text-decoration: none;


  }

  & > *:last-child {
    margin-top: 50px;
  }

  display: flex;
  justify-content: space-between;
  width: 193px;
  height: 72px;
  background: rgba(255, 255, 255, 0.33);
  padding: 18px 12px;

  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);

  border-radius: 5px

`;

export const InfoSection = ({chapter}) => {
    return (
        <CardWithInfo>

            <div className={'chapter'}>{chapter}</div>
            <div><ArrowRightAltIcon sx={{color: '#00FF99'}}/></div>


        </CardWithInfo>

    )
}

export const PiggySection = () => {
    return (
        <GridContainer>
            <Link to='/moneyBox' style={{
                textDecoration: 'none',
                color: 'black'
            }}>
                <InfoSection chapter={'Копилка'}/>
            </Link>
            <Link to='/borrowedMoney' style={{
                textDecoration: 'none',
                color: 'black'
            }}>
                <InfoSection chapter={'Заёмные средства'}/>
            </Link>


            <Link to='/createCollection' style={{
                textDecoration: 'none',
                color: 'black'
            }}>
                <InfoSection chapter={'Сборы'}/>
            </Link>

            <InfoSection chapter={'Итоги за май'}/>


        </GridContainer>
    );
};

