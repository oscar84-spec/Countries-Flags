import styled from "styled-components";

export const Select = styled.select`
  width: 200px;
  padding: 15px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.text};
  font: 300 14px "Nunito Sans", sans-serif;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  font: 300 12px "Nunito Sans", sans-serif;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
