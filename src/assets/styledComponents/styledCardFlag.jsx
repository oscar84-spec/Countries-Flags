import styled from "styled-components";

export const ContainerCardFlag = styled.div`
  width: 250px;
  height: 350px;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 5px;
  padding-bottom: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1244px) {
    width: 250px;
  }
`;

export const ContainerFlag = styled.div`
  width: 100%;
  height: 50%;
`;

export const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const ContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CountryName = styled.h2`
  font: 800 20px "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SpanBold = styled.span`
  font: 600 14px "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

export const Span = styled.span`
  font: 300 14px "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;
