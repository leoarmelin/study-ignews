import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

interface IGithubIcon {
  isActive: boolean;
}

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 3rem;

  border: 0;
  border-radius: 3rem;
  padding: 0 1.5rem;

  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.grayDarkTwo};
  color: ${({ theme }) => theme.colors.white};

  transform: 200ms ease;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    height: 20px;
    width: 20px;

    &:first-child {
      margin-right: 1rem;
    }
  }
`;

export const GithubIcon = styled(FaGithub)<IGithubIcon>`
  color: ${(props) => (props.isActive ? '#04d361' : '#eba417')};
`;

export const CloseIcon = styled(FiX)`
  margin-left: 1rem;

  color: #737380;
`;
