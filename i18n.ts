import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`./messages/${locale}.json`)).default;
  const content = {
    home: (await import(`./app/[locale]/content/${locale}/home.mdx`)).default,
    about: (await import(`./app/[locale]/content/${locale}/about.mdx`)).default,
    product: (await import(`./app/[locale]/content/${locale}/product.mdx`)).default,
  };

  return {
    messages: {
      ...messages,
      content,
    },
  };
});
