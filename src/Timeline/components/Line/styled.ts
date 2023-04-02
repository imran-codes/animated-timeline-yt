import styled from "styled-components";

export const LineContainer = styled.div`
  height: 1px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  rotate: 90deg;
`;
