import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "./CustomizedAccTable";
import styled from "styled-components";
import {Link} from "react-router-dom";


export const SectionName = styled.div`
  padding: 5px 0 0 12px;
  font-size: 14px;

`;

export const CustomizedAccSubs = ({DetailInfo}) => {
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleChange1 = (panel) => (event, newExpanded) => {
        setExpanded1(newExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, newExpanded) => {
        setExpanded2(newExpanded ? panel : false);
    };

    return (
        <div>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <SectionName>
                        Сберегательный счёт
                    </SectionName>
                </AccordionSummary>
                <AccordionDetails>
                    <DetailInfo srcImage={require('../../images/forDetails1.png')}
                                nameDetail={'Накопительный счёт'}
                                additionalInfo={'..8967'}
                                price={'1258 ₽'}
                    />
                    <DetailInfo srcImage={require('../../images/forDetails1.png')}
                                nameDetail={'Накопительный счёт'}
                                additionalInfo={'..6967'}
                                price={'1258 ₽'}
                                isCommon={true}

                    />
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded1 === 'panel2'} onChange={handleChange1('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <SectionName>
                        Мои подписки
                    </SectionName>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to={'/subscriptionManager'}
                          style={{
                              textDecoration: 'none',
                              color: 'black'
                          }}>

                    
                        <DetailInfo srcImage={require('../../images/forDetails2.png')}
                                    nameDetail={'Spotify'}
                                    additionalInfo={'7 числа каждого месяца'}
                                    price={'69 ₽'}
                        />
                    </Link>

                    <Link to={'/subscriptionManager'} style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>

                        <DetailInfo srcImage={require('../../images/forDetails2.png')}
                                    nameDetail={'Photoshop'}
                                    additionalInfo={'23 числа каждого месяца'}
                                    price={'1558 ₽'}
                        />
                    </Link>


                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded2 === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <SectionName>
                        Заёмные средства
                    </SectionName>
                </AccordionSummary>
                <AccordionDetails>
                    <DetailInfo srcImage={require('../../images/forDetails3.png')}
                                nameDetail={'Долги мне'}
                                additionalInfo={''}
                                price={'69 ₽'}
                    />
                    <DetailInfo srcImage={require('../../images/forDetails4.png')}
                                nameDetail={'Мои долги'}
                                additionalInfo={''}
                                price={'1558 ₽'}
                    />
                </AccordionDetails>
            </Accordion>
        </div>

    );
};

