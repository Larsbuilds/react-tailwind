import { getTranslations } from 'next-intl/server';
import { MainHero } from '@/components/ui/MainHero';
import { Features } from '@/components/ui/Feature';
import { CallToAction } from '@/components/ui/CallToAction';

export default async function Home() {
  const t = await getTranslations('Index');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainHero 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />
      <Features features={[
        {
          title: t('features.feature1.title'),
          description: t('features.feature1.description'),
          icon: 'feature1'
        },
        {
          title: t('features.feature2.title'),
          description: t('features.feature2.description'),
          icon: 'feature2'
        },
        {
          title: t('features.feature3.title'),
          description: t('features.feature3.description'),
          icon: 'feature3'
        }
      ]} />
      <CallToAction 
        title={t('cta.title')}
        description={t('cta.description')}
        buttonText={t('cta.button')}
        buttonHref="/contact"
      />
    </main>
  );
}
