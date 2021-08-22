import styled from 'styled-components';

interface IMenuItem {
  isActive: boolean;
}

export const Container = styled.header`
  height: 5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
`;

export const Content = styled.div`
  display: flex;

  align-items: center;

  max-width: 1120px;
  height: 100%;

  margin: 0 auto;
  padding: 0 2rem;

  button {
    margin-left: auto;
  }
`;

export const LogoImg = styled.img``;

export const NavMenu = styled.nav`
  height: 100%;

  margin-left: 5rem;
`;

export const MenuItem = styled.a<IMenuItem>`
  position: relative;
  display: inline-block;

  height: 100%;

  font-weight: ${(props) => (props.isActive ? 600 : 400)};
  line-height: 5rem;

  padding: 0 0.5rem;

  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.grayLight};

  transition: 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &::after {
    content: '';
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    position: absolute;

    bottom: 1px;
    left: 0;

    height: 3px;
    width: 100%;

    border-radius: 3px 3px 0 0;

    background: ${({ theme }) => theme.colors.yellow};
  }

  & + a {
    margin-left: 2rem;
  }
`;
