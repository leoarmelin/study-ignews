import { Button, GithubIcon, CloseIcon } from './styles';

export function SignInButton() {
  const isUserLoggedIn = true;

  return (
    <Button>
      <GithubIcon isActive={isUserLoggedIn} />
      {isUserLoggedIn ? 'Leozinho Delas' : 'Sign in with Github'}
      {isUserLoggedIn && <CloseIcon />}
    </Button>
  );
}
