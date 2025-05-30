import { useTranslations } from 'next-intl';
import MainHero from '@/components/ui/MainHero';
import Feature from '@/components/ui/Feature';
import CallToAction from '@/components/ui/CallToAction';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature />
        </div>
      </div>
      <CallToAction />
    </main>
  );
}
