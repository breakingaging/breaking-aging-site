import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans">
      
      {/* HEADER (SIMPLE) */}
      <header className="w-full bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 transition text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Home
          </a>
          <div className="text-lg font-serif font-bold text-slate-900">
            Explore Topics
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-12">Scientific Insights</h1>
        
        <div className="grid gap-8">
          
          {/* ARTICLE CARD 1 */}
          <a href="/explore/chain-reaction" className="group block bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all hover:border-blue-200">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Prologue</span>
                <h2 className="text-2xl font-serif text-slate-900 group-hover:text-blue-900 transition-colors mb-4">
                  Chain reaction of lipid peroxidation is everywhere
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  From a BBQ party in Texas to Flemish painters studios. Why "oil" and "air" are the common topics in biology and art, and how oxygen plays a role in our demise.
                </p>
                <div className="inline-flex items-center text-blue-900 font-bold text-sm">
                  Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>

          {/* PLACEHOLDER FOR NEXT ARTICLE */}
          <div className="border border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-400">
            <p className="italic">More scientific articles coming soon...</p>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-10 border-t border-slate-200 text-center text-slate-500 text-sm mt-20">
        <p>&copy; 2026 Breaking chains of aging. All rights reserved.</p>
      </footer>
    </div>
  );
}