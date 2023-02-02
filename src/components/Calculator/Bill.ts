import styled from "styled-components";

 export const BillName = styled.p`
font-size: 16px;
color: ${({ theme }) => theme.colors.cyan.white};
line-height: 24px;
`
export const PerPerson = styled.p`
 font-size: 13px;
 color: ${({ theme }) => theme.colors.cyan.garyish}
`;

export const Bill = styled.p`
 font-size: 32px;
 color: ${({ theme }) => theme.colors.cyan.strong}
`;
