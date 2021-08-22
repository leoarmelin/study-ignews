import { Button } from './styles';

interface ISubscribeButton {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButton) {
  return <Button>Subscribe now</Button>;
}
