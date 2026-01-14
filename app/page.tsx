'use client';

import React from 'react';
import { BookOpen, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';

// --- ДАННЫЕ (Ваш контент) ---
const chapters = [
  { 
    title: "Chain reaction: a portrait in oils", 
    desc: "Explaining the mechanism of lipid peroxidation and why it resembles a runaway fire." 
  },
  { 
    title: "Linoleum brain", 
    desc: "Why the brain, being essentially fat, is the primary target for oxidative degradation." 
  },
  { 
    title: "Ferro-cious metals in oxygen environment", 
    desc: "The deadly interplay between iron (Ferroptosis) and oxygen in the aging process." 
  },
  { 
    title: "Antioxidants cannot stop the chain reaction", 
    desc: "Why traditional supplements fail against the exponential nature of LPO." 
  },
  { 
    title: "D-PUFA: the α-male of the ω-fats", 
    desc: "The solution: How Deuterium reinforcement creates unbreakable bonds." 
  }
];

// --- КОМПОНЕНТЫ ---

const Section = ({ title, children, className = "", id = "" }: { title: string, children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-20 ${className}`}>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 border-b pb-4 border-slate-200">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const AccordionItem = ({ title, desc }: { title: string, desc: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-xl font-serif text-slate-800">{title}</span>
        {isOpen ? <ChevronUp className="text-blue-800" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed font-light pl-4 border-l-2 border-blue-800">
          {desc}
        </div>
      )}
    </div>
  );
};

// --- ГЛАВНАЯ СТРАНИЦА ---

export default function BookWebsite() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-blue-100">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-lg font-serif font-bold text-slate-900 tracking-wide">
            Mikhail S. Shchepinov, PhD
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 uppercase tracking-wider">
            <a href="#book" className="hover:text-blue-800 transition">The Book</a>
            <a href="#science" className="hover:text-blue-800 transition">The Science</a>
            <a href="#toc" className="hover:text-blue-800 transition">Contents</a>
            <a href="#author" className="hover:text-blue-800 transition">Author</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
              Biochemical Drama
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Breaking the Chains <br/>
              <span className="text-blue-900 italic">of Aging</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              Oxygen fuels our bodies with life-giving energy — but at a hidden cost. 
              Discover the new scientific paradigm of <b>Lipid Peroxidation</b> and the <b>Isotope Effect</b>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-blue-900 transition flex items-center justify-center gap-2">
                <ShoppingCart size={20} /> Order on Amazon
              </button>
              <button className="border border-slate-300 px-8 py-4 rounded-sm font-medium hover:bg-white transition flex items-center justify-center gap-2">
                <BookOpen size={20} /> Read Chapter 1
              </button>
            </div>
          </div>
          
          {/* 3D BOOK MOCKUP PLACEHOLDER */}
          <div className="relative bg-slate-200 aspect-[3/4] rounded shadow-2xl flex items-center justify-center group cursor-pointer">
             <div className="text-center p-10">
                <div className="text-4xl mb-4">⛓️🧬</div>
                <p className="font-serif text-slate-500 italic">Book Cover Image</p>
                <p className="text-xs text-slate-400 mt-2">(Dark background with chains)</p>
             </div>
             <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-slate-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM (SCIENTIFIC SUMMARY) */}
      <Section title="The Oxidative Paradox" className="bg-white">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-lg leading-relaxed text-slate-700">
            <p className="mb-6">
              Breathing oxygen generates energy by burning our food but at the same time, 
              it relentlessly wears out all parts of our biochemical machinery.
            </p>
            <p className="mb-6 font-semibold border-l-4 border-red-800 pl-4">
              The most pernicious type of damage is Lipid Peroxidation (LPO) — 
              the only example of a non-enzymatic chain reaction in biology.
            </p>
            <p>
              Once ignited, it generates multiple damage points. The body does not invest 
              enough into clean-up processes, leading to the accumulation of toxic products 
              like <b>HNE</b> and <b>MDA</b>.
            </p>
          </div>
          <div className="bg-slate-100 p-8 rounded border border-slate-200 flex flex-col justify-center">
            <h3 className="font-serif text-xl mb-4 text-slate-900">Key Affected Systems:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div> Brain & Neurodegeneration
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div> Vision & Retina (AMD)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div> Mitochondria function
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div> Inflammation & Pain
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* TABLE OF CONTENTS (INTERACTIVE) */}
      <Section title="Table of Contents" id="toc">
        <p className="mb-8 text-slate-500 italic">Selected chapters from the book. Click to preview.</p>
        <div className="max-w-3xl">
          {chapters.map((chapter, idx) => (
            <AccordionItem key={idx} title={chapter.title} desc={chapter.desc} />
          ))}
          <div className="mt-8 text-center">
            <a href="#" className="text-blue-800 font-medium hover:underline">View full Table of Contents &rarr;</a>
          </div>
        </div>
      </Section>

      {/* AUTHOR SECTION */}
      <Section title="About the Author" id="author" className="bg-slate-900 text-slate-200">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-700 rounded-full flex-shrink-0 border-4 border-slate-600 overflow-hidden">
            {/* Placeholder for Photo */}
            <img src="https://placehold.co/400x400/333/FFF?text=PhD" alt="Mikhail Shchepinov" className="w-full h-full object-cover opacity-50" />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-white mb-2">Mikhail S. Shchepinov, PhD</h3>
            <p className="text-blue-300 mb-6 uppercase text-sm tracking-widest">Bioorganic Chemistry</p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Dr. Shchepinov has a PhD degree in bioorganic chemistry. He worked in academia and biotech 
              in <b>Oxford, UK</b> and <b>San Diego, USA</b>, and is currently affiliated with several universities. 
              His area of interest is the chemistry of aging and mitigation of age-related diseases.
            </p>
            <p className="text-slate-400 text-sm italic">
              Drawing on 3 decades of experience in academia and commerce.
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-white py-10 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; 2024 Lipid Aging. All rights reserved.</p>
        <p className="mt-2">Contact: info@breakingaging.com</p>
      </footer>

    </div>
  );
}