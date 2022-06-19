import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "./CustomizedAccTable";
import styled from "styled-components";


const MainInfo = styled.div`
  font-size: 15px;
  padding: 5px 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;

`;

const LogoSub = styled.img`
  width: 29px;
  height: 29px;

`;

const LogoAndName = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 12px;
  }

`;

const DetailsWrapper = styled.div`


  display: flex;
  align-items: center;

`;

const Remembering = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  & > *:first-child {
    margin-right: 4px;
  }

  & > *:last-child {
    margin-right: 6px;
  }

`;

const DayToPay = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 8px;

  }

  .scrollable {
    overflow: auto;
  }

`;

export const CustomizedAccSubsDetail = ({imgSource, nameSub, price, paymentIn}) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <MainInfo>
                        <LogoAndName>
                            <LogoSub src={imgSource}/>
                            {nameSub}
                        </LogoAndName>
                        <div>{price}</div>
                    </MainInfo>
                </AccordionSummary>

                <AccordionDetails>
                    <DetailsWrapper>

                    </DetailsWrapper>

                    <DetailsWrapper>
                        <Remembering>
                            <div>Напомнить за:</div>
                            <select placeholder={'1'}>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            дней
                        </Remembering>
                        <DayToPay>

                            <div>Число оплаты:</div>
                            <div className="scrollable">
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="16">15</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="24">23</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                        </DayToPay>
                    </DetailsWrapper>

                </AccordionDetails>
            </Accordion>

        </div>

    );
};

