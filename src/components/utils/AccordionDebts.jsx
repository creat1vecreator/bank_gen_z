import React from 'react';
import styled from "styled-components";
import {DetailInfo} from "../AccordionSubscriptions";

export const SectionName = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;

  &:first-child {
    margin-top: 23px;
  }

  & > *:first-child {
    margin-right: 14px;
  }

  & > * {
    & > * {
      .additional {
        color: lime;
      }
    }
  }

`;
const CloseBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 7px;
  background: linear-gradient(0deg, #BCF7F3, #BCF7F3);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);

  backdrop-filter: blur(31px);

  border-radius: 5px;`;

export const AccordionDebts = ({name, sum}) => {

    return (
        <div>
            <SectionName>
                <DetailInfo
                    srcImage={require('../../images/man.png')}
                    nameDetail={name}
                    additionalInfo={'До 23 июня'}
                    price={sum}
                />
                <CloseBtn>Закрыть</CloseBtn>
            </SectionName>
        </div>

    );
};

