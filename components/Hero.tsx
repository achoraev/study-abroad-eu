import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Study in Bulgaria, <span className="text-blue-500">Secure Your Future</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Get an internationally recognized EU degree with affordable tuition fees. 
            We handle your application, visa, and housing from start to finish.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all flex items-center gap-2">
              Start Your Application <ArrowRight size={16} />
            </button>
            <a href="#universities" className="text-sm font-semibold leading-6 text-white">
              Explore Universities <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}