"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function UniversityCard({ university }: { university: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
    >
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
        <h3 className="text-xl font-bold text-slate-900 mb-4">{university.name}</h3>
        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Tuition</p>
            <p className="text-blue-600 font-bold">{university.tuition}/year</p>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}