"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; children?: DropdownItem[] };

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-slate-700 hover:text-blue-700 font-medium text-xs whitespace-nowrap"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-0.5 text-slate-700 hover:text-blue-700 font-medium text-xs whitespace-nowrap"
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <>
          {/* invisible backdrop to close on outside click */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[220px] z-50">
            {item.children.map((child) => (
              <a
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              >
                {child.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations('Navbar');

  const navItems: NavItem[] = [
    {
      label: t('menu.buildFuture'),
      href: '#',
      children: [
        { label: t('menu.whyBulgaria'), href: '#why-bulgaria' },
        { label: t('menu.higherEducation'), href: '#higher-education' },
        { label: t('menu.benefits'), href: '#benefits' },
      ],
    },
    {
      label: t('menu.pathToUniversity'),
      href: '#',
      children: [
        { label: t('menu.exploreUniversities'), href: '#universities' },
        { label: t('menu.topPrograms'), href: '#programs' },
        { label: t('menu.compareUniversities'), href: '#compare' },
        { label: t('menu.languages'), href: '#languages' },
      ],
    },
    {
      label: t('menu.applyConfidence'),
      href: '#',
      children: [
        { label: t('menu.howToApply'), href: '#how-to-apply' },
        { label: t('menu.requirements'), href: '#requirements' },
        { label: t('menu.deadlines'), href: '#deadlines' },
        { label: t('menu.tuition'), href: '#tuition' },
      ],
    },
    {
      label: t('menu.studentLife'),
      href: '#',
      children: [
        { label: t('menu.accommodation'), href: '#accommodation' },
        { label: t('menu.jobs'), href: '#jobs' },
        { label: t('menu.transport'), href: '#transport' },
        { label: t('menu.erasmus'), href: '#erasmus' },
        { label: t('menu.culture'), href: '#culture' },
      ],
    },
    { label: t('menu.aboutUs'), href: '#about' },
    { label: t('menu.contact'), href: '#contact' },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="https://studyabroadeu.net/gallery/logoTrans150px.png"
            alt="Study Abroad EU"
            width={52}
            height={52}
            className="object-contain"
            unoptimized
          />
          <div className="hidden sm:block">
            <span className="font-bold text-slate-900 text-base block leading-tight">STUDY ABROAD EU</span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Consultancy Services</span>
          </div>
        </Link>

        {/* Nav items */}
        <div className="hidden lg:flex items-center gap-3 flex-1 justify-center">
          {navItems.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
        </div>

        {/* Right side: language + contact */}
        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-800 transition-all whitespace-nowrap"
          >
            {t('apply')}
          </a>
        </div>
      </div>
    </nav>
  );
}
