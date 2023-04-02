import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 64px;
  @media (max-width: 768px) {
    width: 32px;
  }
`;

export const Border = styled.div<{ hasBeenHovered: boolean }>`
  padding: 10px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  border-width: 1px;
  border-style: ${({ hasBeenHovered }) =>
    hasBeenHovered ? "solid" : "dashed"};
`;
