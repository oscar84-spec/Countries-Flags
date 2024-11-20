import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.borderHeader};
  transition: all 0.3s ease;
  @media screen and (min-width: 768px) {
    padding: 30px 50px;
  }
  @media screen and (min-width: 1244px) {
    padding: 30px 100px;
  }
`;

export const Title = styled.h1`
  font: 800 14px "Nunito Sans", sans-serif;
  margin: 0;
  @media screen and (min-width: 768px) {
    font: 800 18px "Nunito Sans", sans-serif;
  }
  @media screen and (min-width: 1244px) {
    font: 800 24px "Nunito Sans", sans-serif;
  }
`;

export const DarkMode = styled.span`
  font: 600 14px "Nunito Sans", sans-serif;
  cursor: pointer;
  display: flex;
  gap: 10px;
`;
