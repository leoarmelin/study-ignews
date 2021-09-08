import { signIn, signOut, useSession } from 'next-auth/client';

import { Button, GithubIcon, CloseIcon } from './styles';

export function SignInButton() {
  const [session] = useSession();

  return (
    <Button onClick={() => (session ? signOut() : signIn('github'))}>
      <GithubIcon $isOnline={!!session} />
      {session ? session.user.name : 'Sign in with Github'}
      {session && <CloseIcon />}
    </Button>
  );
}
