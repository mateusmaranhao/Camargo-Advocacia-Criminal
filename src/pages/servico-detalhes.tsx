import { servicesData } from '@/lib/data';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/seo';

export function ServicoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const jsonLdData: Record<string, unknown>[] = [
    generateBreadcrumbSchema([
      { name: "Áreas de Atuação", item: "/servicos" },
      { name: service.shortTitle, item: `/servicos/${service.id}` }
    ]),
    generateServiceSchema(service.title, service.desc, `/servicos/${service.id}`)
  ];

  if (service.faqs && service.faqs.length > 0) {
    jsonLdData.push(generateFAQSchema(service.faqs));
  }

  return (
    <>
      <SEOHead 
        title={`${service.title} | Camargo Advocacia Criminal`}
        description={service.desc}
        canonicalUrl={`/servicos/${service.id}`}
        jsonLd={jsonLdData}
      />
      <main className="flex-1 flex flex-col bg-[#0D152D] text-white">
        <Breadcrumbs items={[
          { label: 'Áreas de Atuação', href: '/servicos' },
          { label: service.shortTitle }
        ]} />

        {/* Hero Section */}
        <section className="bg-[#0D152D] text-white p-8 lg:p-20 flex flex-col border-b border-[#18233F]">
          <div className="max-w-4xl mx-auto flex flex-col items-start w-full">
            <div className="w-12 h-12 bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm mb-6">
              <service.icon className="w-6 h-6 stroke-[2]" />
            </div>
            <span className="text-[10px] text-[#B8B9B9] uppercase font-bold tracking-[0.25em] mb-3">
              Defesa Penal Especializada
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl font-medium text-[#B8B9B9] mb-6 max-w-3xl leading-snug">
              {service.heroSubtitle}
            </p>
            <p className="text-[#85888F] leading-relaxed text-sm md:text-base max-w-2xl mb-10">
              {service.desc}
            </p>
            <Button size="lg" className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 h-auto transition-all shadow-lg flex items-center gap-2" asChild>
              <a href={`https://wa.me/5519991084001?text=Olá,%20preciso%20de%20atendimento%20jurídico%20sobre%20${encodeURIComponent(service.title)}.`}>
                <ShieldAlert className="w-4 h-4" />
                <span>Acionar Plantão sobre este caso</span>
              </a>
            </Button>
          </div>
        </section>

        {/* Sections */}
        <section className="bg-[#0D152D] border-b border-[#18233F]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[42%] p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#18233F] bg-[#0D152D]">
              <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                Estratégia Defensiva
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                Como atuamos nesta frente penal
              </h2>
              <p className="text-[#85888F] text-xs leading-relaxed max-w-md">
                Cada medida processual é planejada de forma cirúrgica para salvaguardar a presunção de inocência e restabelecer a liberdade do cidadão.
              </p>
            </div>
            
            <div className="w-full lg:w-[58%] p-8 lg:p-16 bg-[#18233F]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {service.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-white border-l-2 border-[#B8B9B9] pl-3">
                      {section.title}
                    </h3>
                    <p className="text-[#85888F] text-xs leading-relaxed pl-3.5">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="bg-[#0D152D] border-b border-[#18233F]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[42%] p-8 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-[#18233F]">
                <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                  Esclarecimentos
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                  Dúvidas Frequentes
                </h2>
                <p className="text-[#85888F] text-xs leading-relaxed">
                  Perguntas frequentes e diretrizes técnicas sobre {service.shortTitle.toLowerCase()}.
                </p>
              </div>
              <div className="w-full lg:w-[58%] p-8 lg:p-12">
                <div className="flex flex-col border-t border-[#18233F]">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#18233F]">
                      <button
                        className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      >
                        <span className="font-bold text-sm uppercase tracking-wide text-white group-hover:text-[#B8B9B9] transition-colors">
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-sm transition-colors ${openFaqIndex === idx ? 'bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/30' : 'bg-[#18233F]/40 text-[#85888F] group-hover:bg-[#18233F] group-hover:text-white'}`}>
                          {openFaqIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-8 text-xs text-[#85888F] leading-relaxed pr-8">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Footer CTA Banner */}
        <section className="bg-[#18233F] p-8 lg:p-16 text-center flex flex-col items-center border-b border-[#18233F]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Precisa de orientação jurídica imediata sobre este tema?
          </h2>
          <p className="text-sm text-[#85888F] mb-8 max-w-lg">
            Entre em contato com o plantão criminal da Camargo Advocacia. Atendimento confidencial 24h em Campinas e região.
          </p>
          <Button size="lg" className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 h-auto transition-all shadow-lg" asChild>
            <a href={`https://wa.me/5519991084001?text=Olá,%20gostaria%20de%20falar%20com%20o%20plantão%20criminal%20sobre%20${encodeURIComponent(service.title)}.`}>
              Falar com o Advogado Criminalista
            </a>
          </Button>
        </section>

      </main>
    </>
  );
}
