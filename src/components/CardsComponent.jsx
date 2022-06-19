import styled from "styled-components";
import {KeyboardArrowDown} from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';

const Wallet = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const ImgWrapper = styled.div`
    
`;

const CardsComponentWrapper = styled.div`
  padding: 12px;
  background: #E9FDFC;
  box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.27);
  width: 287px;
  height: 399px;
  left: 105px;
  top: 113px;
  backdrop-filter: blur(31px);
  box-sizing: border-box;
  border-radius: 5px;


  & button {
    margin-top: 19px;
    margin-left: 118px;
    margin-bottom: 19px;
  }

`;

const CardsImg = styled.img`
  width: 258px;
  height: 161px;
  border-radius: 5px;
`;

const BtnDown = styled.button`
  width: 29px;
  height: 29px;
  border: none;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.33);
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(157, 157, 157, 0.27);
  backdrop-filter: blur(31px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Balance = styled.div`
    margin-left: 93px;

`;

export const CardsComponent = () => {
    return (
        <CardsComponentWrapper>
            <Wallet>Кошелёк <AddIcon/></Wallet>
            <ImgWrapper>
                <CardsImg src={require('../images/img.png')}/>
            </ImgWrapper>
            <BtnDown>
                <KeyboardArrowDown/>
            </BtnDown>
            <Balance>19.990₽</Balance>
        </CardsComponentWrapper>
    )
}