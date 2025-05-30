import { useTranslations } from 'next-intl';
import AboutToolset from '@/components/ui/AboutToolset';

export default function About() {
  const t = useTranslations('about');

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <AboutToolset />
      </div>
    </main>
  );
}
