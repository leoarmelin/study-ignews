import Head from 'next/head';

interface ISEOProps {
  title: string;
  noRightText?: boolean;
}

export function SEO({ title, noRightText = false }: ISEOProps) {
  return (
    <Head>
      <title>{noRightText ? title : `${title} | ignews`}</title>
    </Head>
  );
}
