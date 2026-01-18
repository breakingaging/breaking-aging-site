import React from 'react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const AMAZON_LINK = "https://www.amazon.com/Breaking-Chains-Aging-biochemical-drama/dp/1913460975";

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

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/explore" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 transition text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> All Topics
          </a>
          <a href={AMAZON_LINK} target="_blank" className="bg-blue-900 text-white px-4 py-2 rounded-sm font-medium hover:bg-blue-800 transition text-xs shadow-md flex items-center gap-2">
             <ShoppingCart size={14} /> Buy Book
          </a>
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">Prologue</span>
        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
          Chain reaction of lipid peroxidation is everywhere
        </h1>
        
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
          <hr className="w-16 h-1 bg-blue-900 my-10 opacity-20 mx-auto border-none" />
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

        {/* AUTHOR BIO IN ARTICLE */}
        <div className="mt-16 p-8 bg-slate-100 rounded-lg flex items-center gap-6 border border-slate-200">
           <img src="https://i.ibb.co/DgDrN8vs/Mikhail-Shepinov.jpg" alt="Author" className="w-16 h-16 rounded-full object-cover" />
           <div>
             <p className="text-sm font-bold text-slate-900">Written by Mikhail S. Shchepinov, PhD</p>
             <p className="text-xs text-slate-500 mt-1">This is an excerpt from the book "Breaking the Chains of Aging".</p>
             <a href={AMAZON_LINK} target="_blank" className="text-blue-800 font-bold text-sm mt-2 block hover:underline">Get the full book on Amazon &rarr;</a>
           </div>
        </div>

      </article>

      {/* FOOTER */}
      <footer className="bg-white py-10 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; 2026 Breaking chains of aging. All rights reserved.</p>
        <p className="mt-2">Contact: info@breakingaging.com</p>
      </footer>
    </div>
  );
}