'use client';

import React from 'react';
import { BookOpen, ChevronDown, ChevronUp, ShoppingCart, Quote } from 'lucide-react';

// --- ДАННЫЕ: ОТЗЫВЫ (С ФОТО) ---
const testimonials = [
  {
    name: "Aubrey D.N.J. de Grey",
    role: "Ph.D., Chairman and Chief Science Officer of the Methuselah Foundation",
    // ЗАМЕНИТЕ ССЫЛКУ НИЖЕ НА ФОТО ОБРИ ДИ ГРЕЯ:
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Aubrey_de_Grey_2010.jpg/640px-Aubrey_de_Grey_2010.jpg", 
    text: "Shchepinov is a true biomedical groundbreaker. His insight, now dating back over 20 years, that the isotope effect might have medical utility was so outlandish that even I was initially inclined to dismiss it. How glad I am that I put my doubts aside! In this book, Shchepinov presents the idea and its development in a form that should be easily digestible. Its time has come!"
  },
  {
    name: "Barry Halliwell",
    role: "Chairman, Biomedical Advisory Council (BMAC), A*STAR",
    // ЗАМЕНИТЕ ССЫЛКУ НИЖЕ НА ФОТО БАРРИ:
    image: "https://www.nuhs.edu.sg/wsu/PublishingImages/bio/Prof%20Barry%20Halliwell.jpg",
    text: "Lipid peroxidation is a fundamental mechanism of oxidative damage that has been studied for over 100 years. The recent discovery of ferroptosis has re-awakened interest in iron and lipid peroxidation. In this amusing, provocative and sometimes iconoclastic book, Misha Shchepinov explores the role of fatty acids. It is a good read, I recommend it."
  },
  {
    name: "Charles R. Cantor",
    role: "American molecular geneticist, CSO at Sequenom",
    // ЗАМЕНИТЕ ССЫЛКУ НИЖЕ НА ФОТО ЧАРЛЬЗА:
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Charles_Cantor.jpg",
    text: "Food for thought: suppose there were a food supplement that actually protects brain health? Wouldn't taking it be irresistible? This book describes the biology and chemistry that plays a role in many brain diseases. The author of this book, Mikhail Shchepinov, is the inventor of a supplement, deuterated long chain fatty acids, which shows great promise."
  },
  {
    name: "J. Thomas Brenna",
    role: "Ph.D., Professor of Pediatrics, Chemistry, and Human Nutrition",
    // ЗАМЕНИТЕ ССЫЛКУ НИЖЕ НА ФОТО ТОМАСА:
    image: "https://dellmed.utexas.edu/sites/default/files/styles/1_1_square_sm/public/2022-03/Brenna-Tom-400x400.jpg", 
    text: "With sharp wit and keen insight, my friend Misha takes us on an extraordinary tour through the biochemistry of aging and neurodegeneration. Oxygen — that double-edged sword — sustains our metabolism while simultaneously escaping to wreak havoc. Misha's elegant solution to reinforce these molecules of life offers a brilliant approach."
  }
];

// --- ДАННЫЕ: ГЛАВЫ ---
const chapters = [
  { 
    title: "Chain reaction: a portrait in oils", 
    desc: "A deep dive into the chemistry of aging. How Polyunsaturated Fatty Acids (PUFA) become the fuel for the non-enzymatic chain reaction of lipid peroxidation. Understanding the thermodynamics of cellular damage." 
  },
  { 
    title: "Linoleum brain", 
    desc: "Why the brain is the primary target. Exploring the link between lipid peroxidation and neurodegenerative conditions like Alzheimer’s, Parkinson’s, and mild cognitive impairment. The role of amyloid beta and oxidative stress." 
  },
  { 
    title: "Ferro-cious metals in oxygen environment", 
    desc: "The deadly interplay between transition metals and oxygen. Uncovering the mechanism of Ferroptosis and how iron catalyzes the production of hydroxyl radicals and superoxide, leading to irreversible cell damage." 
  },
  { 
    title: "Antioxidants cannot stop the chain reaction", 
    desc: "Dispelling the myth: why traditional antioxidants fail to stop the exponential rate of peroxidation. An analysis of reactive carbonyls (HNE, HHE, MDA) and why the body's clean-up mechanisms (ALDH2) get overwhelmed." 
  },
  { 
    title: "D-PUFA: the α-male of the ω-fats", 
    desc: "The Solution: The Kinetic Isotope Effect explained. How replacing hydrogen with Deuterium (heavy hydrogen) in PUFAs creates unbreaking bonds, effectively stopping the chain reaction and preventing mitochondrial dysfunction." 
  }
];

// --- КОМПОНЕНТЫ ---

const Section = ({ title, children, className = "", id = "" }: { title: string, children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-20 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 border-b pb-4 border-slate-200">
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
            <a href="#reviews" className="hover:text-blue-800 transition">Reviews</a>
            <a href="#author" className="hover:text-blue-800 transition">Author</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="book" className="pt-40 pb-20 px-6">
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
              <button className="bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-blue-900 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <ShoppingCart size={20} /> Order on Amazon
              </button>
              <button className="border border-slate-300 px-8 py-4 rounded-sm font-medium hover:bg-white transition flex items-center justify-center gap-2">
                <BookOpen size={20} /> Read Chapter 1
              </button>
            </div>
          </div>
          
          {/* 3D BOOK MOCKUP */}
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
             <div className="relative w-[280px] md:w-[350px] shadow-2xl rounded overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out border-r-2 border-b-2 border-slate-900/10">
                <img 
                  src="https://i.ibb.co/QFBzgZ6K/71uv-J6-U35-JL-SL1360.jpg" 
                  alt="Breaking the Chains of Aging Book Cover" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section title="The Oxidative Paradox" className="bg-white" id="science">
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

      {/* TESTIMONIALS (WITH PHOTOS) */}
      <Section title="Praise for the Book" id="reviews" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex items-center gap-5 mb-6">
                {/* PORTRAIT */}
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-slate-100 shadow-sm flex-shrink-0 bg-slate-200"
                />
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-lg leading-tight">{t.name}</h4>
                  <p className="text-xs text-blue-800 uppercase tracking-widest font-medium mt-2 leading-relaxed opacity-80">{t.role}</p>
                </div>
              </div>
              <div className="relative">
                <Quote size={24} className="text-blue-100 absolute -top-2 -left-2 -z-10" />
                <p className="text-slate-600 italic text-sm leading-relaxed pl-2">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TABLE OF CONTENTS */}
      <Section title="Table of Contents" id="toc">
        <p className="mb-8 text-slate-500 italic">Selected chapters from the book. Click to preview.</p>
        <div className="max-w-4xl">
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
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-slate-800 rounded-full flex-shrink-0 border-4 border-slate-600 overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/PGN5Nx6m/photo-2021-03-02-16-02-58-768x797.jpg" 
              alt="Mikhail Shchepinov" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif text-white mb-2">Mikhail S. Shchepinov, PhD</h3>
            <p className="text-blue-300 mb-6 uppercase text-sm tracking-widest">Bioorganic Chemistry</p>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
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
        <p>&copy; 2026 Lipid Aging. All rights reserved.</p>
        <p className="mt-2">Contact: info@breakingaging.com</p>
      </footer>

    </div>
  );
}