import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 100%;
  position: relative;
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.placeholder};
    transition: all 0.3s ease;
  }
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 15px 10px 15px 60px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.text};
  font: 300 12px "Nunito Sans", sans-serif;
  outline: none;
  transition: all 0.3s ease;
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
    transition: all 0.3s ease;
  }
`;
