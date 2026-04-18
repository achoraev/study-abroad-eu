"use client"
import { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function UniversityCard({ university }: { university: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all">
      <div className="relative h-56 w-full">
        <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">
          {university.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-400 text-sm mb-2">
          <MapPin size={14} /> {university.city}, Bulgaria
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">{university.name}</h3>

        <div className="flex flex-wrap gap-1 mb-4">
          {university.programs.map((prog: string, idx: number) => (
            <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border">
              {prog}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Tuition</p>
            <p className="text-blue-600 font-bold">{university.tuition}/year</p>
          </div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            {expanded ? 'Close' : 'Learn More'}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-800 mb-1">Tags</p>
              <div className="flex flex-wrap gap-2">
                {university.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-1">Programs offered</p>
              <ul className="list-disc list-inside space-y-0.5">
                {university.programs.map((prog: string, idx: number) => (
                  <li key={idx}>{prog}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-1">Location</p>
              <p>{university.city}, Bulgaria</p>
            </div>
            <a
              href="#contact"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-2"
            >
              Apply for {university.name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
