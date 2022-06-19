import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import {CustomizedAccordions} from "./utils/CustomizedAccTable";
import {Link} from "react-router-dom";


const ChapterSectionWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const ChapterSection = styled.div`
  padding: 20px 20px 0 20px;
  width: 398px;
  height: 479px;
  background: #E9FDFC;
  justify-content: space-between;
  border-radius: 5px;

`;
const Chapters = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;


  & > * {
    margin-right: 9px;
    font-size: 10px;
    cursor: pointer;
    display: inline-block;
  }

  & > *:first-child {
    font-size: 14px;
  }

  & > *:last-child {
    color: var(--color-text-not-choosen);

  }
`;
// const AccordionHeader = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: space-between;
//
//   & > * {
//     & > * {
//       outline: 3px solid red;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
// `;

const chaptersChanger = evt => {
    evt.target.style = 'color: black ';
    const wrapperChilds = evt.target.parentElement.childNodes;
    for (const wrapperChild of wrapperChilds) {
        if (wrapperChild !== evt.target) {
            if (wrapperChild.innerText !== 'Последние операции') {
                wrapperChild.style = `color: var(--color-text-not-choosen);`;
            }
        }
    }
}

const AccordionWrapper = styled.div`
  border: none !important;
  font-family: MullerRegular, serif;

  .MuiAccordion-rounded {
    border: none !important;
    display: none;
  }

  .MuiAccordion-root {
    background: #E9FDFC !important;
    border-radius: 20px !important;
    box-shadow: none !important;
    border: none !important;
  }


  .Mui-focusVisible {
    background: #E9FDFC !important;
    border: none !important;


  }

  .MuiAccordionSummary-root {
    border-radius: 100px !important;
    cursor: pointer !important;
    display: flex;
    background: #E9FDFC !important;
    border: none !important;
    padding: 0 !important;



    .MuiAccordionSummary-content {
      justify-content: space-between;
      border: none !important;

    }
  }

  .MuiAccordionSummary-gutters {
    margin: 0 !important;
    border: none !important;

  }

  .MuiAccordionDetails-root {
    background: #E9FDFC !important;
    border-radius: 100px !important;
    -webkit-appearance: none;
    border: none !important;
    padding: 0 !important;


    & > *:not(:last-child) {
      margin-bottom: 17px;

    }
`;

const DetailDayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #00FF99;

  & > *:first-child {
    display: flex;
    align-items: center;

    & > *:first-child {
      margin-right: 10px;
    }

    & > *:last-child {
      color: lime;
      text-decoration: none;
      font-size: 12px;
    }
  }

  .aim-sec {
    display: flex;
    align-items: center;
  }
  

`;
const DetailDay = ({name, sum, check}) => {
    return (<DetailDayWrapper>
            <div className={'aim-sec'}>
                <div className='aimed'>{name}</div>
                {check ?
                    <Link to='shareCheck'>
                        <div className='check'>
                            Разделить чек
                        </div>
                    </Link>
                    : <div/>}
            </div>
            <div className='aimed'>{sum}</div>
        </DetailDayWrapper>
    )

}


export const TableComponent = () => {
    return (
        <>
            <ChapterSection>
                <ChapterSectionWrapper>
                    <Chapters>
                        <p>Последние операции</p>
                        <p onClick={chaptersChanger}>Расходы</p>
                        <p onClick={chaptersChanger}>Зачисления</p>
                    </Chapters>
                    <AddIcon sx={{cursor: 'pointer'}}/>

                </ChapterSectionWrapper>
                <AccordionWrapper>
                    <CustomizedAccordions
                        DetailDay={DetailDay}

                    />
                </AccordionWrapper>
            </ChapterSection>

        </>
    );
};

