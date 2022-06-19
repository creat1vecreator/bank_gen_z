import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import './App.css'
import {ShareCheckPage} from "./pages/ShareCheckPage";
import {PersonalPage} from "./pages/PersonalPage";
import {SubscriptionManager} from "./pages/SubscriptionManager";
import {SavingsAccount} from "./pages/SavingsAccount";
import {FamilyAccount} from "./pages/FamilyAccount";
import {CollectingMoneyPage} from "./pages/CollectingMoneyPage";
import {CreateMoneyCollection} from "./components/CreateMoneyCollection";
import {BorrowedMoney} from "./pages/BorrowedMoney";
import{MoneyBox} from "./pages/MoneyBox";

function App() {
  return (
      <>
        <div className={'.test'}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
                <Route path='/shareCheck' element={<ShareCheckPage/>}/>
                <Route path='/personalPage' element={<PersonalPage/>}/>
                <Route path='/subscriptionManager' element={<SubscriptionManager/>}/>
                <Route path='/createSavingsAccount' element={<SavingsAccount/>}/>
                <Route path='/createSavingsAccount/createFamilyAccount' element={<FamilyAccount/>}/>
                <Route path='/createCollection' element={<CreateMoneyCollection/>}/>
              <Route path='/createCollection/collectingPage/:sum' element={<CollectingMoneyPage/>}/>
              <Route path='/borrowedMoney' element={<BorrowedMoney/>}/>
              <Route path='/moneyBox' element={<MoneyBox/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
}

export default App;
