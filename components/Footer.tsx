import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://studyabroadeu.net/gallery/logoTrans150px.png"
              alt="Study Abroad EU"
              width={44}
              height={44}
              className="object-contain"
              unoptimized
            />
            <div>
              <p className="font-bold text-white text-sm">STUDY ABROAD EU</p>
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">Consultancy Services</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Helping international students build their future through quality European education in Bulgaria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-sm">
            {[
              ['#why-bulgaria', 'Why Choose Bulgaria'],
              ['#universities', 'Explore Universities'],
              ['#programs', 'Top Study Programs'],
              ['#how-to-apply', 'How to Apply'],
              ['#tuition', 'Tuition & Costs'],
              ['#contact', 'Contact Us'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{t('contactUs')}</h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <span className="shrink-0">📍</span>
              {t('address')}
            </p>
            <p className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:studyabroadeunet@gmail.com" className="hover:text-white transition-colors">
                studyabroadeunet@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>📱</span>
              <a href="https://wa.me/359895618131" className="hover:text-white transition-colors">
                +359 895 618131
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>📱</span>
              <a href="https://wa.me/359895181395" className="hover:text-white transition-colors">
                +359 895 181395
              </a>
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="text-lg" title="Greek support">🇬🇷</span>
            <span className="text-lg" title="English support">🇬🇧</span>
            <span className="text-lg" title="Turkish support">🇹🇷</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Study Abroad EU. {t('rights')}
      </div>
    </footer>
  );
}
