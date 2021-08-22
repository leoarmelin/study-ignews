import { SignInButton } from '../SignInButton';
import { Container, Content, LogoImg, NavMenu, MenuItem } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <LogoImg src='/images/logo.svg' alt='ig.news' />

        <NavMenu>
          <MenuItem isActive>Home</MenuItem>
          <MenuItem isActive={false}>Posts</MenuItem>
        </NavMenu>

        <SignInButton />
      </Content>
    </Container>
  );
}
