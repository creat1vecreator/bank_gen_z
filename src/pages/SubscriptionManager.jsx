import React from 'react';
import styled from "styled-components";
import {ChapterName, Checkbox} from "./ShareCheckPage";
import {CustomizedAccSubsDetail} from "../components/utils/CustomAccordionDetailsSubs";


const AccordionWrapperDetail = styled.div`
  border: none !important;
  font-family: MullerRegular, serif;
  width: 289px;


  .MuiAccordion-rounded {
    border: none !important;
    display: none;
  }

  .MuiAccordion-root {


    background: rgba(255, 255, 255, 0.33);
    box-shadow: 0 4px 10px rgba(157, 157, 157, 0.09);
    backdrop-filter: blur(31px);
    margin-bottom: 20px;
    border-radius: 5px !important;
    width: 391.88px;
  }


  .Mui-focusVisible {
    background: #E9FDFC !important;
    border: none !important;

  }

  .MuiAccordionSummary-root {
    width: 391.88px;


    .MuiAccordionSummary-content {
      border: none !important;
    }
  }

  .MuiAccordionSummary-gutters {
    margin: 0 !important;
    border: none !important;

  }

  .MuiAccordionDetails-root {
    background: rgba(255, 255, 255, 0.33);


    & > *:not(:last-child) {
      margin-bottom: 17px;

    }
`;
export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubscriptionCard = styled.div`
  width: 777px;
  height: 529px;
  box-sizing: border-box;
  padding: 52px 32px 84px 52px;
  border-radius: 6px;
  background: #F5FFFE;

`;

const MainInfoSection = styled.div`
  display: flex;
`;


const SubscriptionSection = styled.div`
  box-sizing: border-box;
  width: 238px;
  height: 353px;
  background: #E9FDFC;
  border-radius: 6px;
  padding-top: 30px;
  padding-left: 14px;
  padding-right: 32px;
  margin-right: 32px;
`;

const ImgSub = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 18px;
`;

const SubscriptionWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .checked {
    background: lime;
  }

`;

const LogoAndName = styled.div`
  display: flex;
  align-items: center;
`;

const SubsAccordionSection = styled.div`

`;

const CheckBoxColorChanger = (evt) => {

    if (evt.target.parentElement.classList.contains('subscription-wrapper')) {
        evt.target.parentElement.querySelector('.checkbox').classList.toggle('checked');

    } else if (evt.target.classList.contains('subscription-wrapper')) {
        evt.target.querySelector('.checkbox').classList.toggle('checked');
    }

}

const Subcription = ({imgSrc, name}) => {

    return (
        <SubscriptionWrapper className='subscription-wrapper' onClick={CheckBoxColorChanger}>
            <LogoAndName>
                <ImgSub src={imgSrc} alt={'spotify_img'}/>
                {name}
            </LogoAndName>
            {name === 'Spotify' ||name === 'Photoshop' ?
                <Checkbox className={'checkbox checked'}/>
                : <Checkbox className={'checkbox'}/>

            }

        </SubscriptionWrapper>
    )

}

const SubscriptionSectionName = styled.div`
  font-size: 16px;
  margin-bottom: 24px;
`;
export const SubscriptionManager = () => {
    return (
        <>
            <PageWrapper>
                <SubscriptionCard>
                    <ChapterName chapterName={'Менеджер подписок'} style={{marginBottom: '38px'}}/>

                    <MainInfoSection>
                        <SubscriptionSection>
                            <SubscriptionSectionName>Менеджер подписок</SubscriptionSectionName>

                            <Subcription imgSrc={require('../images/spotify.png')} name={'Spotify'}/>
                            <Subcription imgSrc={require('../images/ps.png')} name={'Photoshop'}/>

                            <Subcription imgSrc={require('../images/litres.png')} name={'Я.Музыка'}/>
                            <Subcription imgSrc={require('../images/litres.png')} name={'Литрес'}/>
                            <Subcription imgSrc={require('../images/sber.png')} name={'СберПрайм'}/>
                            <Subcription imgSrc={require('../images/okko.png')} name={'Okko'}/>
                            <Subcription imgSrc={require('../images/boom.png')} name={'Boom'}/>
                            <Subcription imgSrc={require('../images/ivi.png')} name={'ivi'}/>
                        </SubscriptionSection>


                        <SubsAccordionSection>
                            Мои подписки
                            <AccordionWrapperDetail>
                                <CustomizedAccSubsDetail
                                    imgSource={require('../images/spotify.png')}
                                    nameSub={'Spotify'}
                                    price={'69 ₽'}
                                    paymentIn={'5 дней'}

                                />

                                <CustomizedAccSubsDetail
                                    imgSource={require('../images/ps.png')}
                                    nameSub={'Photoshop'}
                                    price={'69 ₽'}
                                    paymentIn={'5 дней'}

                                />

                            </AccordionWrapperDetail>

                        </SubsAccordionSection>
                    </MainInfoSection>

                </SubscriptionCard>
            </PageWrapper>
        </>
    )
}
