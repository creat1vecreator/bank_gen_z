import styled from "styled-components";
import {HeaderComponent} from "../components/HeaderComponent";
import {CostAnalysis} from "../components/CostAnalysis";
import {PiggySection} from "../components/PiggySection";
import {FastActions} from "../components/FastActions";
import {PaymentsAndTransfersAccordion} from "../components/PaymentsAndTransfers";
import {QuotesComponent} from "../components/QuotesComponent";
import {TableComponent} from "../components/TableComponent";
import {FirstSection} from "../components/utils/FirstSection";

const ImgPiggy = styled.img`
  cursor: pointer;
  width: 242px;
  height: 161px;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 41px 52px;
  
  .second {
    margin-right: 14px;

    & > *:first-child {
      margin-bottom: 14px;
    }
  }

  .third {
    margin-right: 14px;
    & > *:first-child {
      margin-bottom: 14px;
    }
    & > *:not(:first-child) {
      margin-bottom: 8px;
    }
  }
  .fourth {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const MainPage = () => {
    return (<>
            <HeaderComponent/>
            <Wrapper>
                <FirstSection/>

                <div className='second'>
                    <PiggySection/>
                    <TableComponent/>
                </div>

                <div className='third'>
                    <QuotesComponent/>
                    <PaymentsAndTransfersAccordion/>
                    <FastActions/>

                </div>
                <div/>

                <div className='fourth'>
                    <ImgPiggy src={require('../images/piggy.png')}/>
                    <CostAnalysis/>
                </div>
            </Wrapper>
        </>
    )
}