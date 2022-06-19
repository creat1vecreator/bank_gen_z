import React from 'react';
import styled from "styled-components";
import {CardsComponent} from "../CardsComponent";
import {AccordionSubscriptions} from "../AccordionSubscriptions";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  

  & > *:first-child {
    padding-right: 16px;

    & > *:first-child {
      margin-bottom: 14px;
    }
  }
`;
export const FirstSection = () => {
    return (
        <Wrapper>
            <div className='first'>
                <CardsComponent/>
                <AccordionSubscriptions/>

            </div>

        </Wrapper>

    );
};

