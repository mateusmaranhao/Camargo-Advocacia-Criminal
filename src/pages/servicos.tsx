import { Services } from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { ShieldAlert } from 'lucide-react';

export function ServicosPage() {
  return (
    <>
      <SEOHead 
        title="Áreas de Atuação Penal | Camargo Advocacia Criminal"
        description="Da audiência de custódia aos recursos perante o STJ e STF. Conheça as áreas de atuação criminal especializada da Camargo Advocacia em Campinas e região."
        canonicalUrl="/servicos"
        jsonLd={generateBreadcrumbSchema([{ name: "Atuação Penal", item: "/servicos" }])}
      />
      <main className="flex-1 flex flex-col bg-[#0D152D] text-white">
        <Breadcrumbs items={[{ label: 'Áreas de Atuação' }]} />
        
        <section className="bg-[#0D152D] border-b border-[#18233F] p-8 lg:p-16 flex flex-col items-center text-center">
          <span className="inline-block bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm mb-6">
            Direito Penal Especializado
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl">
            Nossas Áreas de Atuação Criminal
          </h1>
          <p className="text-[#85888F] leading-relaxed max-w-2xl text-base md:text-lg">
            Atuação combativa e técnica em todas as fases da persecução penal: do acompanhamento em delegacia e custódia aos recursos e sustentações perante os Tribunais Superiores em Brasília.
          </p>
        </section>

        {/* Grid das soluções */}
        <Services />

        <section className="py-20 bg-[#18233F] text-center px-6 border-b border-[#18233F]">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#0D152D] border border-[#B8B9B9]/30 flex items-center justify-center text-[#B8B9B9] mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Urgência penal ou dúvida sobre seu caso?
            </h2>
            <p className="text-[#85888F] mb-8 text-sm leading-relaxed">
              Consulte imediatamente nosso plantão criminal e receba orientação técnica especializada com total discrição e sigilo.
            </p>
            <Button size="lg" className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 h-auto transition-all shadow-lg" asChild>
              <a href="https://wa.me/5519991084001?text=Olá,%20gostaria%20de%20consultar%20um%20advogado%20criminalista%20sobre%20o%20meu%20caso.">
                Falar com o Plantão no WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
