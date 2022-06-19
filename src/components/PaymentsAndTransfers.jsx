import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "./utils/CustomizedAccTable";
import {AccordionWrapper} from "./AccordionSubscriptions";
import {SectionName} from "./utils/CustomizedAccSubs";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {Link} from "react-router-dom";


const WrapperDetail = styled.div`
  width: 265.02px;
  height: 35.52px;

  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.09);
  backdrop-filter: blur(31px);
  border-radius: 6px;
  transform: matrix(1, 0, 0.01, 1, 0, 0);
  font-size: 14px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 24px;
  }
`;

export const PaymentsAndTransfersAccordion = () => {
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleChange1 = (panel) => (event, newExpanded) => {
        setExpanded1(newExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, newExpanded) => {
        setExpanded2(newExpanded ? panel : false);
    };
    const handleChange3 = (panel) => (event, newExpanded) => {
        setExpanded3(newExpanded ? panel : false);
    };

    return (
        <AccordionWrapper>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <SectionName>
                        Платеж и переводы
                    </SectionName>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded1 === 'panel2'} onChange={handleChange1('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <SectionName>Кредиты</SectionName>

                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded2 === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <SectionName>
                        Вклады и счета
                    </SectionName>

                </AccordionSummary>
                <AccordionDetails>
                    <Link to='/createSavingsAccount' style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <WrapperDetail>
                            <div>Создать счёт</div>
                            <ArrowRightAltIcon sx={{color: '#00FF99'}}/>
                        </WrapperDetail>
                        <WrapperDetail>
                            <div>Создать вклад</div>
                            <ArrowRightAltIcon sx={{color: '#00FF99'}}/>
                        </WrapperDetail>

                    </Link>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded3 === 'panel4'} onChange={handleChange3('panel4')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <SectionName>
                        Инвестиции
                    </SectionName>


                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </AccordionWrapper>
    );
};

