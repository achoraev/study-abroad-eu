import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server'

export default async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations('Hero');

  return (
    <div
      className="relative py-32 sm:py-48"
      style={{
        backgroundImage: "url('https://studyabroadeu.net/gallery/home4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-slate-900/65" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {t.rich('title', {
              span: (chunks) => <span className="text-blue-400">{chunks}</span>
            })}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            {t('subtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all flex items-center gap-2"
            >
              {t('cta')} <ArrowRight size={16} />
            </a>
            <a href="#universities" className="text-sm font-semibold leading-6 text-white">
              {t('secondary')} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
