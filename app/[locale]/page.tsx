import { getTranslations } from 'next-intl/server'
import Hero from '@/components/Hero';
import UniversityCard from '@/components/UniversityCard';
import ContactForm from '@/components/ContactForm';
import { universities } from '@/data/universities';
import {
  ShieldCheck, Globe, GraduationCap, CheckCircle,
  Briefcase, BookOpen, Users, MapPin, Clock,
  Stethoscope, Cpu, TrendingUp, UtensilsCrossed,
  Bus, Plane, Building2, PartyPopper,
} from 'lucide-react';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const tWhy = await getTranslations('WhyBulgaria');
  const tHE = await getTranslations('HigherEducation');
  const tBen = await getTranslations('Benefits');
  const tProg = await getTranslations('Programs');
  const tApply = await getTranslations('HowToApply');
  const tTuition = await getTranslations('Tuition');
  const tLife = await getTranslations('StudentLife');
  const tUni = await getTranslations('Universities');
  const tCTA = await getTranslations('CTA');

  const whyCards = [
    { icon: <ShieldCheck className="w-7 h-7 text-blue-600" />, title: tWhy('card1Title'), desc: tWhy('card1Desc') },
    { icon: <Globe className="w-7 h-7 text-blue-600" />, title: tWhy('card2Title'), desc: tWhy('card2Desc') },
    { icon: <Users className="w-7 h-7 text-blue-600" />, title: tWhy('card3Title'), desc: tWhy('card3Desc') },
    { icon: <TrendingUp className="w-7 h-7 text-blue-600" />, title: tWhy('card4Title'), desc: tWhy('card4Desc') },
    { icon: <Building2 className="w-7 h-7 text-blue-600" />, title: tWhy('card5Title'), desc: tWhy('card5Desc') },
    { icon: <MapPin className="w-7 h-7 text-blue-600" />, title: tWhy('card6Title'), desc: tWhy('card6Desc') },
  ];

  const degrees = [
    { label: tHE('bachelor'), duration: tHE('bachelorDuration'), desc: tHE('bachelorDesc') },
    { label: tHE('master'), duration: tHE('masterDuration'), desc: tHE('masterDesc') },
    { label: tHE('phd'), duration: tHE('phdDuration'), desc: tHE('phdDesc') },
  ];

  const benefits = [
    { icon: <Briefcase className="w-6 h-6 text-blue-600" />, title: tBen('b1Title'), desc: tBen('b1Desc') },
    { icon: <BookOpen className="w-6 h-6 text-blue-600" />, title: tBen('b2Title'), desc: tBen('b2Desc') },
    { icon: <Globe className="w-6 h-6 text-blue-600" />, title: tBen('b3Title'), desc: tBen('b3Desc') },
    { icon: <PartyPopper className="w-6 h-6 text-blue-600" />, title: tBen('b4Title'), desc: tBen('b4Desc') },
    { icon: <CheckCircle className="w-6 h-6 text-blue-600" />, title: tBen('b5Title'), desc: tBen('b5Desc') },
    { icon: <Plane className="w-6 h-6 text-blue-600" />, title: tBen('b6Title'), desc: tBen('b6Desc') },
  ];

  const programs = [
    { icon: <Stethoscope className="w-8 h-8" />, title: tProg('p1Title'), desc: tProg('p1Desc'), tuition: tProg('p1Tuition'), color: 'bg-red-50 text-red-600' },
    { icon: <Cpu className="w-8 h-8" />, title: tProg('p2Title'), desc: tProg('p2Desc'), tuition: tProg('p2Tuition'), color: 'bg-blue-50 text-blue-600' },
    { icon: <TrendingUp className="w-8 h-8" />, title: tProg('p3Title'), desc: tProg('p3Desc'), tuition: tProg('p3Tuition'), color: 'bg-green-50 text-green-600' },
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: tProg('p4Title'), desc: tProg('p4Desc'), tuition: tProg('p4Tuition'), color: 'bg-amber-50 text-amber-600' },
  ];

  const steps = [
    { n: 1, title: tApply('step1Title'), desc: tApply('step1Desc') },
    { n: 2, title: tApply('step2Title'), desc: tApply('step2Desc') },
    { n: 3, title: tApply('step3Title'), desc: tApply('step3Desc') },
    { n: 4, title: tApply('step4Title'), desc: tApply('step4Desc') },
    { n: 5, title: tApply('step5Title'), desc: tApply('step5Desc') },
    { n: 6, title: tApply('step6Title'), desc: tApply('step6Desc') },
  ];

  const studentLifeCards = [
    { icon: <Bus className="w-7 h-7 text-blue-600" />, title: tLife('transportTitle'), desc: tLife('transportDesc') },
    { icon: <Plane className="w-7 h-7 text-blue-600" />, title: tLife('erasmusTitle'), desc: tLife('erasmusDesc') },
    { icon: <Briefcase className="w-7 h-7 text-blue-600" />, title: tLife('jobsTitle'), desc: tLife('jobsDesc') },
    { icon: <PartyPopper className="w-7 h-7 text-blue-600" />, title: tLife('cultureTitle'), desc: tLife('cultureDesc') },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero locale={locale} />

      {/* ── Why Bulgaria ── */}
      <section id="why-bulgaria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-slate-900">{tWhy('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tWhy('intro')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyCards.map((c, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">{c.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Higher Education System ── */}
      <section id="higher-education" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{tHE('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tHE('subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {degrees.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-1">{d.label}</h3>
                <div className="flex items-center justify-center gap-1 text-blue-600 font-semibold text-sm mb-3">
                  <Clock className="w-4 h-4" /> {d.duration}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-4">{tHE('typesTitle')}</h3>
            <ul className="space-y-2">
              {[tHE('type1'), tHE('type2'), tHE('type3')].map((type, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Benefits & Opportunities ── */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{tBen('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tBen('subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Study Programs ── */}
      <section id="programs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{tProg('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tProg('subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${p.color}`}>{p.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="text-sm font-bold text-blue-700 border-t pt-3">{p.tuition}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore Universities ── */}
      <section id="universities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{tUni('title')}</h2>
              <p className="text-slate-500 mt-1">{tUni('subtitle')}</p>
            </div>
            <button className="text-blue-700 font-semibold hover:underline text-sm">{tUni('viewAll')}</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Apply ── */}
      <section id="how-to-apply" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{tApply('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tApply('subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-700 text-white rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-4">{tApply('deadlinesTitle')}</h3>
            <ul className="space-y-2">
              {[tApply('early'), tApply('regular'), tApply('late')].map((d, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle className="w-4 h-4 text-white shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Tuition & Living Costs ── */}
      <section id="tuition" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{tTuition('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tTuition('subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-6">{tTuition('tuitionTitle')}</h3>
              <div className="space-y-4">
                {[
                  [tTuition('bachelor'), tTuition('bachelorRange')],
                  [tTuition('master'), tTuition('masterRange')],
                  [tTuition('medical'), tTuition('medicalRange')],
                ].map(([label, range]) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="text-slate-700 font-medium">{label}</span>
                    <span className="font-bold text-blue-700">{range}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-6">{tTuition('livingTitle')}</h3>
              <div className="space-y-4">
                {[
                  [tTuition('dorm'), tTuition('dormRange')],
                  [tTuition('apartment'), tTuition('apartmentRange')],
                  [tTuition('expenses'), tTuition('expensesRange')],
                ].map(([label, range]) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                    <span className="text-slate-700 font-medium">{label}</span>
                    <span className="font-bold text-green-700">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Life ── */}
      <section id="accommodation" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{tLife('title')}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{tLife('subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentLifeCards.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">{c.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Contact Form ── */}
      <section id="contact" className="bg-blue-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">{tCTA('title')}</h2>
            <p className="text-blue-100 mb-8 text-lg">{tCTA('desc')}</p>
            <ul className="space-y-3">
              {['p1', 'p2', 'p3', 'p4'].map((k) => (
                <li key={k} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle className="w-5 h-5 text-blue-300 shrink-0" />
                  {tCTA(k)}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm text-blue-200">
              <p>📧 studyabroadeunet@gmail.com</p>
              <p>📱 +359 895 618131</p>
              <p>📱 +359 895 181395</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
