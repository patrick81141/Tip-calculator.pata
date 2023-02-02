import styled from "styled-components";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import humanIcon from "../../assets/images/icon-person.svg";

interface Props {
    iconTypes?: "bill" | "person";
}

const icon = (props: Props) =>{
    switch(props.iconTypes){
        case "person":
          return humanIcon;
        case "bill":
          return dollarIcon;
        default:
          return '';
    }
};

export const Input= styled.input<Props>`
all: unset;
border-radius: 5px;
padding-right: 17px;
background-image: url(${icon});
background-position: center left 19px;
font-size: 24px;
background-color: ${(props) => props.theme.inputBackground};
height: 48px;
background-repeat: no-repeat;
color: ${({ theme }) => theme.colors.cyan.dark}; 
width: calc(100% - 17px);

&:hover{
 outline: 2px solid ${({ theme }) => theme.colors.cyan.strong};
}

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

&[type=number] {
    -moz-appearance: textfield;
  }
 
`