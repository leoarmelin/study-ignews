import { useSession, signIn } from "next-auth/client";
import router, { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import { Button } from "./styles";

interface ISubscribeButton {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButton) {
  const [session] = useSession();
  const push = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn();
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const { data: responseData } = await api.post("/subscribe");

      const { sessionId } = responseData;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };

  return <Button onClick={handleSubscribe}>Subscribe now</Button>;
}
