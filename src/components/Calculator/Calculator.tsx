import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled, {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { defaultTheme } from "../../Themes/defaultTheme";
import { Input } from "./Input";
import logo from "../../assets/images/logo.svg";
import Label from "./Label";
import ResetButton from "./ResetButton";
import { BillName, Bill, PerPerson } from "./Bill";
import Tip from "../Tip";




export default function Calculator(){
    const [bill, setBill] = useState<number | undefined>(undefined);
    const [people, setPeople] = useState<number | undefined>(undefined);
    const [tip, setTip] = useState<number | undefined>(undefined);
  
    const [peopleError, setPeopleError] = useState('');
  
    const allClear = bill !== undefined && people !== undefined && tip !== undefined;
    const tipAmount = allClear &&(bill * tip / people).toFixed(2);
    const totalPerPerson = allClear &&(bill * (1 + tip) / people).toFixed(2);
    const showTip = allClear && !(tipAmount === 'NaN' || tipAmount === 'infinity');
    const showTotalPerPerson = allClear && !(totalPerPerson === 'NaN' || totalPerPerson === 'infinity');
  
    useEffect(() => {
      if(people === 0){
        setPeopleError(`can't be zero`);
      } else {
        setPeopleError('');
      }
    }, [people]);

    
  
    return (
      <ThemeProvider theme={defaultTheme}>
       
       <Cont>

       <Image src={logo} />

        <CalculatorCont>

          <GlobalStyles />
      <Helmet>
        <link 
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap" 
        rel="stylesheet" /> 
      </Helmet>
      
      <div className="App">
        <InputCont>
        <Label>Bill</Label>
        <InputMargin
           iconTypes="bill"
           placeholder="0"
           type="number"
           value={bill}
           min={0}
           onChange={(e) => {
            if(e.target.value.length < 10)
             setBill(e.target.valueAsNumber);
           }}
           dir="rtl"
        />

        <Label>Select Tip %</Label>
        <Tip setTip={setTip} tip={tip} />
        <Label>People</Label>
        <InputMargin
           iconTypes="person" 
           placeholder='0'
           type='number'
           value={people}
           min={0}
           onKeyDown={(e) => {
            if(e.key === '.'){
              e.preventDefault()
            }
           }}
           onChange={(e) => {
            if(e.target.value.length < 10)
            setPeople(e.target.valueAsNumber);
          }}
          dir="rtl"
          />
          </InputCont>
          <div>{peopleError}</div>
        <ResultCont>
         
         <BillContainer>
          <div>
            <BillName>Tip Amount</BillName>
            <PerPerson>/Person:</PerPerson>
            </div>
            <Bill>{showTip ? tipAmount : "$0.00"}</Bill>
          </BillContainer>
        
        
          <BillContainer>
          <div>
            <BillName>Total</BillName>
            <PerPerson>/Person:</PerPerson> 
            </div>
            <Bill>{showTotalPerPerson ? totalPerPerson : "$0.00"}</Bill>
          </BillContainer>
           <ResetButton>RESET</ResetButton>
          </ResultCont>
      </div>

        </CalculatorCont>
        
      </Cont>

    </ThemeProvider>
    );
};



const InputCont = styled.div`
  padding: 0 8px 0 8px;
`;

const Cont = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const CalculatorCont = styled.div`
  background-color: ${({ theme }) => theme.colors.cyan.white};
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
  overflow: hidden;

`


const Image = styled.img`
  padding: 50px 0 40px 0;
`;

const InputMargin = styled(Input)`
   margin-bottom: 32px;
 `;

 const ResultCont = styled.div`
    background-color: ${({ theme }) => theme.colors.cyan.dark};
    width: 100%;
    border-radius: 15px;
    padding: 39px 22px 24px 24px;
 `;

  const BillContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
