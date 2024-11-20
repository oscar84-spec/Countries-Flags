import styled from "styled-components";

export const SectionCountry = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px 10px;
  background-color: ${({ theme }) => theme.body};
  transition: all 0.3s ease;
  @media screen and (min-width: 375px) {
    padding: 30px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px 50px;
  }
  @media screen and (min-width: 1024px) {
    height: calc(100vh - 153px);
  }
  @media screen and (min-width: 1244px) {
    padding: 30px 100px;
  }
`;

export const ButtonBack = styled.button`
  width: 110px;
  padding: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  font: 300 16px "Nunito Sans", sans-serif;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 1244px) {
    justify-content: space-between;
  }
`;

export const ImgFlag = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fill;
  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 300px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 1244px) {
    width: 50%;
  }
`;

export const CountryName = styled.h2`
  font: 800 1.5rem "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1244px) {
    gap: 100px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextBold = styled.p`
  font: 600 0.875rem "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;
export const TextRegular = styled.span`
  font: 300 0.875rem "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

export const ContainerBorderCountries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1244px) {
    align-items: center;
  }
`;
export const BorderTitle = styled.h2`
  font: 600 1rem "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;
export const ContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media screen and (min-width: 1244px) {
    width: 400px;
  }
`;

export const ListItem = styled.li`
  font: 300 0.875rem "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  list-style: none;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;
