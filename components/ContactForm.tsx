"use client"
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactForm');

  return (
    <form className="space-y-4 text-slate-900" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium mb-1">{t('name')}</label>
        <input type="text" className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t('email')}</label>
        <input type="email" className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t('phone')}</label>
        <input type="tel" className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t('program')}</label>
        <select className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
          {[0, 1, 2, 3, 4].map((i) => (
            <option key={i}>{t(`options.${i}`)}</option>
          ))}
        </select>
      </div>
      <button className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors mt-2">
        {t('submit')}
      </button>
    </form>
  );
}
