import React from "react";
import styled from "styled-components";
import { Input } from "./Calculator/Input";


interface Props {
    setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
    tip: number | undefined;
}

export default function Tip(props: Props) {
    const {setTip, tip } = props;
    return (
        <ButtonCont>
        {
          [5, 10, 15, 25, 50].map((percentage) => (
            <TipButton
        isActive={tip === percentage / 100}
          onClick={ () => {
            setTip(percentage / 100);
          }}
        >
          {percentage}%
          </TipButton>
          ))
        }
          <Input
          style={ {width: 'calc(50% - 25px)'} }
           placeholder="Custom"
           type='number'
           min={0}
           max={100}
           value={tip && tip * 100}
           onChange={(e) => {
             if(e.target.value.length < 4)
             setTip(e.target.valueAsNumber / 100);
           }}
           dir="rtl"
        />
        </ButtonCont>
    )
}

interface TipButtonProps {
    isActive:boolean;
  };

const TipButton = styled.button<TipButtonProps>`
  all:unset;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
  height: 48px;
  width: calc(50% - 8px);
  border-radius: 5px;
  text-align: center;
  color: ${({ theme, isActive }) => isActive ? theme.colors.cyan.dark : theme.colors.cyan.white};
  font-size: 24px;
  `;

  const ButtonCont = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;