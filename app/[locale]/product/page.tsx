import { useTranslations } from 'next-intl';
import Feature from '@/components/ui/Feature';
import CallToAction from '@/components/ui/CallToAction';

export default function Product() {
  const t = useTranslations('product');

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Feature />
      </div>
      <CallToAction />
    </main>
  );
}
