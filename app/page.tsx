import Hero from '@/components/Hero';
import UniversityCard from '@/components/UniversityCard';
import ContactForm from '@/components/ContactForm';
import { universities } from '@/data/universities';
import { CheckCircle, Globe, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />

      {/* Trust Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-blue-600"/>, title: "EU Recognition", desc: "Diplomas valid across Europe" },
            { icon: <Globe className="w-8 h-8 text-blue-600"/>, title: "Multi-Language", desc: "English, French & German programs" },
            { icon: <GraduationCap className="w-8 h-8 text-blue-600"/>, title: "Expert Guidance", desc: "Full application support" },
            { icon: <CheckCircle className="w-8 h-8 text-blue-600"/>, title: "Easy Transition", desc: "Visa & Housing assistance" },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              {feature.icon}
              <h3 className="mt-4 font-bold text-lg">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* University Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Top Universities</h2>
            <p className="text-slate-600">Start your journey in Bulgaria's leading institutions</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">View All Universities</button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {universities.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Our experts handle the bureaucracy while you focus on your future. 
              Get a free consultation today.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">✅ No hidden fees</li>
              <li className="flex items-center gap-3">✅ Document translation included</li>
              <li className="flex items-center gap-3">✅ Guaranteed response in 24h</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}