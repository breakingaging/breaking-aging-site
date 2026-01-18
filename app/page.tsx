'use client';

import React from 'react';
import { BookOpen, ChevronDown, ChevronUp, ShoppingCart, Quote, CheckCircle2, PlayCircle, Mail, MessageCircle, Download, ExternalLink, FileText } from 'lucide-react';

// --- ССЫЛКИ ---
const AMAZON_LINK = "https://www.amazon.com/Breaking-Chains-Aging-biochemical-drama/dp/1913460975";
const PDF_LINK = "#"; 

// --- ДАННЫЕ: ВИДЕО ---
const videos = [
  {
    title: "Presenting at Undoing Aging",
    id: "JUZBOueVkEM",
    desc: "Dr. Shchepinov presents the core thesis: how deuterated nutrients can strengthen cellular bonds and combat age-related damage."
  },
  {
    title: "GoldLab Symposium 2019",
    id: "T-kC-CojSec",
    desc: "A deep dive into the chemistry of free radicals and how the kinetic isotope effect serves as a shield against oxidation."
  }
];

// --- ДАННЫЕ: ОТЗЫВЫ (PO ALPHABET & NO BIO) ---
// Порядок: Brenna -> Cantor -> de Grey -> Halliwell
const testimonials = [
  {
    name: "J. Thomas Brenna",
    image: "https://i.ibb.co/5D5rYgL/Thomas-Brenna.avif",
    link: "https://en.wikipedia.org/wiki/Tom_Brenna", 
    text: "With sharp wit and keen insight, my friend Misha takes us on an extraordinary tour through the biochemistry of aging and neurodegeneration. Oxygen — that double-edged sword — sustains our metabolism while simultaneously escaping to wreak havoc. Misha's elegant solution to reinforce these molecules of life offers a brilliant approach."
  },
  {
    name: "Charles R. Cantor",
    image: "https://i.ibb.co/pjd3LLQy/Charles-Cantor.jpg",
    link: "https://en.wikipedia.org/wiki/Charles_Cantor",
    text: "Food for thought: suppose there were a food supplement that actually protects brain health? Wouldn't taking it be irresistible? This book describes the biology and chemistry that plays a role in many brain diseases. The author of this book, Mikhail Shchepinov, is the inventor of a supplement, deuterated long chain fatty acids, which shows great promise."
  },
  {
    name: "Aubrey D.N.J. de Grey",
    image: "https://i.ibb.co/tp67mR8B/Aubreyde-Grey.jpg",
    link: "https://en.wikipedia.org/wiki/Aubrey_de_Grey",
    text: "Shchepinov is a true biomedical groundbreaker. His insight, now dating back over 20 years, that the isotope effect might have medical utility was so outlandish that even I was initially inclined to dismiss it. How glad I am that I put my doubts aside! In this book, Shchepinov presents the idea and its development in a form that should be easily digestible. Its time has come!"
  },
  {
    name: "Barry Halliwell",
    image: "https://i.ibb.co/LD9hNdhx/Barry-Halliwell.jpg",
    link: "https://en.wikipedia.org/wiki/Barry_Halliwell",
    text: "Lipid peroxidation is a fundamental mechanism of oxidative damage that has been studied for over 100 years. The recent discovery of ferroptosis has re-awakened interest in iron and lipid peroxidation. In this amusing, provocative and sometimes iconoclastic book, Misha Shchepinov explores the role of fatty acids. It is a good read, I recommend it."
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

const Section = ({ title, children, className = "", id = "", isDark = false, centerTitle = false }: { title: string, children: React.ReactNode, className?: string, id?: string, isDark?: boolean, centerTitle?: boolean }) => (
  <section id={id} className={`py-20 px-6 md:px-20 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-serif mb-12 border-b pb-4 ${isDark ? 'text-white border-slate-700' : 'text-slate-900 border-slate-200'} ${centerTitle ? 'text-center' : ''}`}>
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

const WikiLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-700 underline decoration-1 underline-offset-2 hover:text-blue-900 hover:bg-blue-50 transition-colors"
    title="Read more on Wikipedia"
  >
    {children}
  </a>
);

// --- ГЛАВНАЯ СТРАНИЦА ---

export default function BookWebsite() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-blue-100">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-lg font-serif font-bold text-slate-900 tracking-wide">
            Mikhail S. Shchepinov, PhD
          </div>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex space-x-6 text-xs font-bold text-slate-500 uppercase tracking-widest items-center">
              <a href="#book" className="hover:text-blue-800 transition">The Book</a>
              <a href="#prologue" className="hover:text-blue-800 transition">Prologue</a>
              <a href="#concepts" className="hover:text-blue-800 transition">Concepts</a>
              <a href="#videos" className="hover:text-blue-800 transition">Videos</a>
              <a href="#reviews" className="hover:text-blue-800 transition">Praise</a>
              <a href="#contact" className="hover:text-blue-800 transition">Ask Author</a>
            </nav>

            {/* HEADER BUTTON */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href={AMAZON_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-5 py-2.5 rounded-sm font-medium hover:bg-blue-800 transition items-center gap-2 text-sm shadow-md flex"
              >
                <ShoppingCart size={16} /> Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="book" className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold tracking-widest uppercase mb-6 rounded-full border border-blue-200">
              A BIOCHEMICAL DRAMA
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Breaking the Chains <br/>
              <span className="text-blue-900 italic">of Aging</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
              Oxygen fuels our bodies with life-giving energy — but at a hidden cost. 
              Discover the new scientific paradigm of <b>Lipid Peroxidation</b> and the <b>Isotope Effect</b>.
            </p>
            
            {/* HERO BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={AMAZON_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-blue-900 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <ShoppingCart size={20} /> Buy on Amazon
              </a>
              
              <button className="border border-slate-300 px-8 py-4 rounded-sm font-medium hover:bg-white transition flex items-center justify-center gap-2">
                <BookOpen size={20} /> Read Chapter 1
              </button>
            </div>
          </div>
          
          {/* 3D BOOK MOCKUP */}
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
             <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer" className="relative w-[280px] md:w-[350px] shadow-2xl rounded overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out border-r-2 border-b-2 border-slate-900/10 cursor-pointer group">
                <img 
                  src="https://i.ibb.co/QFBzgZ6K/71uv-J6-U35-JL-SL1360.jpg" 
                  alt="Breaking the Chains of Aging Book Cover" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
             </a>
          </div>
        </div>
      </section>

      {/* PROLOGUE */}
      <Section title="Chain reaction of lipid peroxidation is everywhere" id="prologue" className="bg-stone-50">
        <div className="prose prose-lg prose-slate max-w-none font-serif leading-loose">
          <p>
            At a BBQ party in Texas, you drizzle a little <WikiLink href="https://en.wikipedia.org/wiki/Vegetable_oil">vegetable oil</WikiLink> into 
            a salad bowl, but, distracted by a burst of laughter, leave the uncapped bottle on the table. 
            The party is such a success that the cleanup only starts three days later in the evening, 
            as the punishing Texan sun loosens its grip.
          </p>
          <p>
            The <WikiLink href="https://en.wikipedia.org/wiki/Rancidification">rancid</WikiLink> stench 
            now rising from the bottle is so vile that even your dog recoils in disgust. The oil seems 
            not to have taken the sun and air at all well. You pick a screwcap and seal the bottle tight, with relief.
          </p>
          <p>
            Let’s relocate into a Flemish painter’s studio, 1525 AD. Vivid pigments are ground 
            into <WikiLink href="https://en.wikipedia.org/wiki/Linseed_oil">flax oil</WikiLink> and 
            brushed onto canvas. Within days the air oxidizes the oil into a <WikiLink href="https://en.wikipedia.org/wiki/Drying_oil">hard lacquer layer</WikiLink>, 
            locking the fine colourful grains in place for centuries. Fast-forward 500 years, and 
            audiences are still spellbound by the panorama of <WikiLink href="https://en.wikipedia.org/wiki/View_of_Delft">Delft embankment</WikiLink>, 
            or by the thin ribbon of milk suspended forever in mid-pour from a <WikiLink href="https://en.wikipedia.org/wiki/The_Milkmaid_(Vermeer)">milkmaid’s jug</WikiLink>, 
            all courtesy of this oxidation process preserving colours.
          </p>
          <hr className="w-16 h-1 bg-blue-900 my-8 opacity-20 mx-auto border-none" />
          <p>
            “Oil” and “air” are the common topics in this transition from Texas to Old Masters. 
            Many types of oil readily oxidise in air, and herein lies the biological problem. 
            Every cell in our body, and multiple compartments inside of those cells have elaborate 
            barrier structures, called <WikiLink href="https://en.wikipedia.org/wiki/Cell_membrane">lipid membranes</WikiLink>, 
            built of such oxidisable lipid molecules, referred to as <WikiLink href="https://en.wikipedia.org/wiki/Polyunsaturated_fat">omega-3 and omega-6</WikiLink>. 
            And most cells in our body handle oxygen (<WikiLink href="https://en.wikipedia.org/wiki/Cellular_respiration">respiration</WikiLink>). 
            So, what happened to that bottle of oil, and to the painting, also happens to us all the time: <WikiLink href="https://en.wikipedia.org/wiki/Lipid_peroxidation">Lipid Peroxidation</WikiLink>.
          </p>
          <p>
            Of the <WikiLink href="https://en.wikipedia.org/wiki/Estimates_of_historical_world_population">100 billion people</WikiLink> who 
            ever lived on this planet, only the ones killed in battle or accident did not see oxygen play a prominent role in their demise. 
            Oxygen can oxidise whole planets — just look at <WikiLink href="https://en.wikipedia.org/wiki/Geological_history_of_Mars">Mars</WikiLink>. 
            What chance do tiny cells, choke-full of “flammable” biomolecules, have to resist it?
          </p>
          <p>
            They try their best – there is an arsenal of <WikiLink href="https://en.wikipedia.org/wiki/Antioxidant">antioxidants</WikiLink>, 
            multiple <WikiLink href="https://en.wikipedia.org/wiki/Detoxification">detoxifying</WikiLink> enzymes, 
            and <WikiLink href="https://en.wikipedia.org/wiki/Metabolic_waste">garbage removal</WikiLink> systems. 
            But there is an insidious side to lipids. Tightly packed in membranes like dominoes, 
            multiple lipid molecules also <WikiLink href="https://en.wikipedia.org/wiki/Domino_toppling">fall like dominoes</WikiLink>, 
            when hit with a single <WikiLink href="https://en.wikipedia.org/wiki/Reactive_oxygen_species">activated oxygen molecule</WikiLink>. 
            This represents the only <WikiLink href="https://en.wikipedia.org/wiki/Chain_reactions_in_living_organisms">non-enzymatic chain reaction in life</WikiLink>.
          </p>
        </div>
      </Section>

      {/* KEY CONCEPTS */}
      <Section title="Key Concepts in the Book" className="bg-white" id="concepts">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 border-l-4 border-red-800 pl-4">
              The Problem: Lipid Peroxidation (LPO)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Oxygen, while essential, creates damaging free radicals. LPO is a particularly destructive, 
              self-propagating chain reaction that degrades fats (lipids) in the body, accumulating 
              waste products that accelerate aging.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 border-l-4 border-slate-300 pl-4">
              The Limitation of Antioxidants
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Traditional antioxidants are often inefficient against LPO because they can't stop 
              the chain reaction once it starts. The exponential nature of the damage overwhelms 
              the body's natural defenses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">
              The Solution: D-PUFAs
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Shchepinov introduces "reinforced PUFAs" (D-PUFAs). These are polyunsaturated fatty acids 
              that have been chemically strengthened with Deuterium to resist damage before they are even consumed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">
              How D-PUFAs Work
            </h3>
            <p className="text-slate-600 leading-relaxed">
              They prevent LPO from starting, fight inflammation (inflammaging), and can even help 
              undo existing damage, leading to benefits like better cholesterol, sharper eyes, 
              and younger-looking skin.
            </p>
          </div>
          <div className="md:col-span-2 bg-slate-50 p-6 rounded border border-slate-200">
             <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-blue-800 flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Accessibility</h3>
                   <p className="text-slate-600 leading-relaxed">
                     The book is written to be understandable for a broad audience, not just scientists, 
                     and connects molecular mechanisms to lifestyle choices.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* VIDEOS & LECTURES */}
      <Section title="Lectures & Interviews" id="videos" className="bg-slate-900" isDark={true}>
        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((video, idx) => (
            <div key={idx} className="group">
              <div className="aspect-video w-full bg-slate-800 rounded-lg overflow-hidden shadow-2xl mb-4 border border-slate-700 relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <h4 className="text-xl font-serif text-white flex items-center gap-3 mb-2">
                 <PlayCircle size={24} className="text-blue-400" />
                 {video.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pl-9">
                {video.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS (CLEAN & SORTED) */}
      <Section title="Praise for the Book" id="reviews" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex items-center gap-5 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-slate-100 shadow-sm flex-shrink-0 bg-slate-200"
                />
                <div>
                  <a 
                    href={t.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center gap-2 w-fit"
                  >
                    <h4 className="font-serif font-bold text-blue-900 text-lg leading-tight underline decoration-blue-900/20 underline-offset-4 group-hover:decoration-blue-900 transition-all">
                      {t.name}
                    </h4>
                    <ExternalLink size={14} className="text-blue-900/40 group-hover:text-blue-900 transition-colors" />
                  </a>
                  {/* Bio Removed as requested */}
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
      <Section title="About the Author" id="author" className="bg-slate-900" isDark={true}>
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-slate-800 rounded-full flex-shrink-0 border-4 border-slate-600 overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/DgDrN8vs/Mikhail-Shepinov.jpg" 
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
            
            {/* PUBMED LINK */}
            <div className="mt-6 pt-6 border-t border-slate-700/30">
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/?term=shchepinov&sort=date&size=100"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <FileText size={20} />
                <span className="font-medium decoration-1 underline-offset-4 group-hover:underline">
                  View Full List of Scientific Publications (PubMed)
                </span>
                <ExternalLink size={14} className="opacity-50" />
              </a>
            </div>

            <p className="text-slate-400 text-sm italic mt-6">
              Drawing on 3 decades of experience in academia and commerce.
            </p>
          </div>
        </div>
      </Section>

      {/* ASK AUTHOR SECTION (UPDATED TITLE/TEXT) */}
      <Section title="Ask a Question" id="contact" className="bg-white" centerTitle={true}>
        <div className="max-w-3xl mx-auto">
           <div className="bg-slate-50 p-10 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center text-center">
             <MessageCircle size={48} className="text-blue-900 mb-6 opacity-20" />
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               We welcome questions from the scientific community and interested readers regarding 
               Deuterium, Lipid Peroxidation, and the chemistry of aging.
             </p>
             <a 
               href="mailto:info@breakingaging.com?subject=Question%20regarding%20Breaking%20the%20Chains%20of%20Aging"
               className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-sm hover:bg-blue-800 transition text-lg font-medium shadow-md"
             >
               <Mail size={20} /> Send a Question via Email
             </a>
             <p className="mt-4 text-xs text-slate-400 uppercase tracking-widest">
               info@breakingaging.com
             </p>
           </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-white py-10 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Breaking chains of aging. All rights reserved.</p>
        <p className="mt-2">Contact: info@breakingaging.com</p>
      </footer>

    </div>
  );
}