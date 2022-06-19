import React from 'react';
import styled from "styled-components";


const QuotesWrapper = styled.div`
  padding-top: 20px;
  padding-left: 18px;
  box-sizing: border-box;
  font-size: 10px;
  width: 284px;
  height: 162px;
  background: #E9FDFC;
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  border-radius: 5px;
`;

const ChaptersWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
  align-items: center;
  box-sizing: border-box;

  & > *:first-child {
    margin-right: 14px;
    font-size: 14px;

  }

  & > * {
    cursor: pointer;
    margin-right: 9px;
    font-size: 10px;
  }

  & > *:last-child {
    cursor: pointer;
    margin-right: 9px;
    font-size: 10px;
    color: var(--color-text-not-choosen);
  }
`;


const ImageCurrency = styled.img`
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 0;

  width: 47px;
  height: 47px;
  left: 850px;
  top: 182px;


`

const CurrencySection = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 246.02px;
  height: 50.87px;
  background: rgba(255, 255, 255, 0.33);

  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);

  border-radius: 5px;
  transform: matrix(1, 0, 0.01, 1, 0, 0);

`;

const NameCurrency = styled.div`
  margin-right: 35px;


  & p:first-child {
    font-size: 10px;
    color: #4F4949;
  }

  & p {
    font-size: 10px;
    color: var(--color-text-not-choosen);
  }


`;

const SellBuySection = styled.div`
  box-sizing: border-box;
  padding-top: 10px;

  & > * {
    & > * {
      margin-block-start: 0;
    }

    & > *:last-child {
      opacity: 0.7;
    }

    & > *:first-child {
      color: var(--color-text-not-choosen);
    }
  }

  & > *:first-child {
    margin-right: 11px;

    & > *:last-child {

      margin-bottom: 20px;
    }
  }
  
  display: flex;

`;
const SellOrBuyInfo = styled.div`
  display: flex;
  flex-direction: column;

`;

const More = styled.div`
  margin-left: 222px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 13px;


`;

const chaptersChanger = evt => {
    evt.target.style = 'color: black ';
    const wrapperChilds = evt.target.parentElement.childNodes;
    for (const wrapperChild of wrapperChilds) {
        if (wrapperChild !== evt.target) {
            if (wrapperChild.innerText !== 'Котировки') {
                wrapperChild.style = `color: var(--color-text-not-choosen);`;
            }
        }

    }
}


export const QuotesComponent = () => {
    return (
        <div>
            <QuotesWrapper>

                <ChaptersWrapper>
                    <div>Котировки</div>
                    <div onClick={chaptersChanger}>Валюты</div>
                    <div onClick={chaptersChanger}>Металлы</div>
                </ChaptersWrapper>
                <CurrencySection>
                    <ImageCurrency src={require('../images/img_1.png')}/>
                    <NameCurrency>
                        <p>Доллар США</p>
                        <p>USD</p>
                    </NameCurrency>
                    <SellBuySection>
                        <SellOrBuyInfo>
                            <p>Купить</p>
                            <p>71,78</p>
                        </SellOrBuyInfo>

                        <SellOrBuyInfo>
                            <p>Продать</p>
                            <p>61,78</p>
                        </SellOrBuyInfo>

                        <SellOrBuyInfo>

                        </SellOrBuyInfo>
                    </SellBuySection>
                </CurrencySection>
                <More>Ещё</More>
            </QuotesWrapper>
        </div>
    );
};

