import styled from "styled-components";
import {CustomizedAccSubs} from "./utils/CustomizedAccSubs";


export const AccordionWrapper = styled.div`
  border: none !important;
  font-family: MullerRegular, serif;
  width: 289px;


  .MuiAccordion-rounded {
    border: none !important;
    display: none;
  }

  .MuiAccordion-root {
    background:${(background) => background || '#BCF6F3'}; 
    box-shadow: none !important;
    border: none !important;
    margin-bottom: 14px;
    border-radius: 5px !important;

  }


  .Mui-focusVisible {
    background: #E9FDFC !important;
    border: none !important;

  }

  .MuiAccordionSummary-root {
    cursor: pointer;
    display: flex;
    background: linear-gradient(0deg, #BCF7F3, #BCF7F3);
    border-radius: 5px !important;

    border: none !important;
    padding: 0 !important;


    .MuiAccordionSummary-content {
      border: none !important;
    }
  }

  .MuiAccordionSummary-gutters {
    margin: 0 !important;
    border: none !important;

  }

  .MuiAccordionDetails-root {
    background: #E9FDFC !important;
    border-radius: 0 0 5px 5px;
    -webkit-appearance: none;
    border: none !important;
    padding: 10px 12px;


    & > *:not(:last-child) {
      margin-bottom: 17px;

    }
`;

const SubscriptionsWrapper = styled.div`
  width: 289px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

`;

const DetailsWrapper = styled.div`
  background: rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.09);
  backdrop-filter: blur(31px);
  border-radius: 6px;
  transform: matrix(1, 0, 0.01, 1, 0, 0);
  display: flex;
  text-decoration: none;

  

  justify-content: space-between;
  align-items: center;
  width: 265.02px;
  height: 35.52px;

  img {
    margin-left: 10px;
    margin-right: 15px;
  }

  .nameDetail {
    font-size: 10px;
    margin-right: 15px;
    cursor: pointer;
  }

  .additional {
    font-size: 7px;
  }

  .price {
    margin-right: 10px;
    font-size: 10px;

  }
  .common {
    margin-left: 5px;
    color: lime;
    font-size: 7px;
    cursor: pointer;
  }

`;
const ImageDetail = styled.img`
  width: 19px;
  height: 18px;


`;
const MainSectionDetals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;



export const DetailInfo = ({srcImage, nameDetail, additionalInfo, price, isCommon}) => {
    return (
        <DetailsWrapper>
            <MainSectionDetals>
                <ImageDetail src={srcImage}/>
                <div className='nameDetail'>{nameDetail}</div>
                <div className='additional'>{additionalInfo}</div>
                {isCommon ? <div className={'common'}>Общий</div> : <div/>}
            </MainSectionDetals>
            <div className='price'>{price}</div>
        </DetailsWrapper>

    )
}

export const AccordionSubscriptions = () => {
    return (
        <SubscriptionsWrapper>
            <AccordionWrapper>
                <CustomizedAccSubs
                DetailInfo={DetailInfo}/>

            </AccordionWrapper>
        </SubscriptionsWrapper>
    )
}