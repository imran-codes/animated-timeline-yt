import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  width: 20%;
  gap: 15px;
  height: 200px;
`;

export const Text = styled.p`
  height: 10px;
  margin-bottom: 5px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HRContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const HR = styled.hr<{ isHovered: boolean }>`
  width: 100%;
  border: 1px solid
    ${({ theme, isHovered }) =>
      isHovered ? theme.colors.border : theme.colors.primary};
`;

export const CenterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-top: -65px;
  height: 100%;
  p {
    border-radius: 45px;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin-top: -55px;
    p {
      padding: 0 5px;
    }
  }
`;
