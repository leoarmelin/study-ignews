import { GetStaticProps } from 'next';

import { SEO } from '../components/SEO';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import {
  Container,
  Content,
  LittleText,
  Title,
  ColoredText,
  Paragraph,
  HomeImg,
} from '../styles/Home';

interface IHome {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: IHome) {
  return (
    <>
      <SEO title='Home' />
      <Container>
        <Content>
          <LittleText>👏 Hey, welcome</LittleText>

          <Title>
            News about the <ColoredText>React</ColoredText> world.
          </Title>

          <Paragraph>
            Get access to all the publications
            <br />
            <ColoredText>for {product.amount} month</ColoredText>
          </Paragraph>

          <SubscribeButton priceId={product.priceId} />
        </Content>

        <HomeImg src='/images/avatar.svg' alt='Girl coding' />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JQMa8EE53iuEy0X2KiEHYE7');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
