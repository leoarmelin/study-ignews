import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { Button } from './styles';

interface ISubscribeButton {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButton) {
  const [session] = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn();
      return;
    }

    try {
      const { data: responseData } = await api.post('/subscribe');

      const { sessionId } = responseData;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  return <Button onClick={handleSubscribe}>Subscribe now</Button>;
}
