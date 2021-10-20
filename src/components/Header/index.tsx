import { useRouter } from "next/router";
import Link from "next/link";
import { SignInButton } from "../SignInButton";
import { Container, Content, LogoImg, NavMenu, MenuItem } from "./styles";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Container>
      <Content>
        <LogoImg src="/images/logo.svg" alt="ig.news" />

        <NavMenu>
          <Link href="/" passHref>
            <MenuItem isActive={asPath === "/"}>Home</MenuItem>
          </Link>
          <Link href="/posts" passHref>
            <MenuItem isActive={asPath === "/posts"}>Posts</MenuItem>
          </Link>
        </NavMenu>

        <SignInButton />
      </Content>
    </Container>
  );
}
