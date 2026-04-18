"use client"
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    // Current path looks like /en/about or /el/about
    // This swaps the first part of the path
    const pathParts = pathname.split('/');
    pathParts[1] = locale;
    router.push(pathParts.join('/'));
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')} className="hover:opacity-80 transition-opacity">
        <span className="text-lg" title="English">🇬🇧</span>
      </button>
      <button onClick={() => changeLanguage('el')} className="hover:opacity-80 transition-opacity">
        <span className="text-lg" title="Ελληνικά">🇬🇷</span>
      </button>
      <button onClick={() => changeLanguage('tr')} className="hover:opacity-80 transition-opacity">
        <span className="text-lg" title="Türkçe">🇹🇷</span>
      </button>
    </div>
  );
}