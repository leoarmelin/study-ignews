import styled from 'styled-components';

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 260px;

  border: 0;
  border-radius: 2rem;

  font-size: 1.25rem;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.grayDarker};

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
