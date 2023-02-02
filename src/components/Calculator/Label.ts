import styled from "styled-components";

const Label = styled.p`
  all: unset;
  color:${ ({ theme }) => theme.colors.cyan.darkGrayish };
  fonst-size: 16px;
  display: block;
  margin-bottom: 6px;
`;

export default Label;