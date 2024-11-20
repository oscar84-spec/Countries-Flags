import styled from "styled-components";

export const SectionHome = styled.section`
  background-color: ${({ theme }) => theme.body};
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  transition: background-color 0.3s ease;
  @media screen and (min-width: 768px) {
    padding: 20px 50px;
    align-items: center;
  }
  @media screen and (min-width: 1244px) {
    padding: 20px 100px;
  }
`;

export const ContainerSearchAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const ButtonPagination = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.buttonSymbol};
  background-color: ${({ theme }) => theme.buttonPagination};
  font: 600 14px "Nunito Sans", sans-serif;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

export const PageText = styled.span`
  font: 600 14px "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.pageText};
  transition: color 0.3s ease;
`;
