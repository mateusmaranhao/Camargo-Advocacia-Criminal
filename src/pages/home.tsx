import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { ServiceMarquee } from '@/components/sections/service-marquee';
import { TestimonialSlider } from '@/components/sections/testimonial-slider';
import { useEffect, useState } from 'react';
import { localBusinessSchema, webSiteSchema, generateFAQSchema } from '@/lib/seo';
import { SEOHead } from '@/components/shared/seo-head';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus, MapPin, Phone, Clock, Search, Shield, Scale, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '@/lib/data';
import cartoonLawyersImg from '@/assets/images/advogados_cartoon_1790597586806.jpg';

export function Home() {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEOHead 
        title="Camargo Advocacia Criminal | Campinas - SP"
        description="Advogado especialista em Direito Criminal em Campinas e região. Plantão 24h para flagrante, audiência de custódia, inquérito policial, habeas corpus e tribunal do júri."
        canonicalUrl="/"
        jsonLd={[localBusinessSchema, webSiteSchema, generateFAQSchema(faqData)]}
      />
      <main className="flex flex-col bg-[#0D152D]">
        <h1 className="sr-only">Camargo Advocacia Criminal - Especialista em Direito Penal</h1>
        <Hero />
      
        <ServiceMarquee />
      
        {/* About Summary */}
        <section className="flex flex-col lg:flex-row border-b border-[#18233F]">
          <div className="w-full lg:w-[48%] bg-[#0D152D] p-8 lg:p-16 flex flex-col justify-center text-white lg:border-r border-[#18233F]">
            <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Nossa Essência
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Dedicação artesanal e combate intransigente pela liberdade.
            </h2>
            <p className="text-[#85888F] leading-relaxed mb-6 text-sm md:text-base">
              A <strong className="text-white">Camargo Advocacia Criminal</strong> é um escritório com atuação especializada exclusivamente nas ciências penais, situado no Centro de Campinas. Acreditamos que nenhuma acusação pode superar o devido processo legal e as garantias constitucionais.
            </p>
            <p className="text-[#85888F] leading-relaxed mb-8 text-sm">
              Cada cliente recebe atenção imediata, sigilo absoluto e uma estratégia jurídica minuciosa, desenhada sob medida para as particularidades do seu caso.
            </p>
            <Button variant="outline" className="self-start rounded-none border-[#B8B9B9] text-[#B8B9B9] hover:bg-[#B8B9B9] hover:text-[#0D152D] uppercase tracking-widest font-bold text-xs px-6 py-3 h-auto transition-all" asChild>
              <Link to="/sobre" onMouseEnter={() => {
                import('@/pages/sobre');
              }}>
                Conheça o Escritório <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="w-full lg:w-[52%] min-h-[420px] bg-[#18233F] relative overflow-hidden group">
            <img 
              src={cartoonLawyersImg} 
              alt="Advogados Criminalistas Camargo Advocacia" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D152D] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0D152D]/90 backdrop-blur-md border border-[#B8B9B9]/30 flex items-center justify-between">
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold text-[#B8B9B9]">Corpo Jurídico</span>
                <span className="text-sm font-semibold text-white">Especialistas em Direito Criminal</span>
              </div>
              <span className="text-[11px] text-[#85888F] font-mono uppercase bg-[#18233F] px-2.5 py-1 rounded-sm border border-[#B8B9B9]/20">
                Campinas • SP
              </span>
            </div>
          </div>
        </section>

        <Services />

        {/* Como Funciona a Defesa Criminal */}
        <section className="bg-[#0D152D] border-b border-[#18233F]">
          <div className="w-full flex flex-col">
            <div className="p-8 lg:p-14 border-b border-[#18233F]">
              <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">Metodologia</span>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl max-w-2xl">
                Como atuamos na sua defesa penal
              </h2>
              <p className="text-[#85888F] text-sm mt-2 max-w-xl">
                Três pilares estratégicos para garantir o máximo de eficácia e proteção jurídica.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#18233F]/40 gap-px">
              <div className="bg-[#0D152D] p-8 lg:p-12 group hover:bg-[#18233F] transition-all">
                <div className="w-10 h-10 bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/20 flex items-center justify-center rounded-sm mb-6 font-bold font-mono">01</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-white flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#B8B9B9]" /> Intervenção Imediata
                </h3>
                <p className="text-xs text-[#85888F] leading-relaxed">
                  Presença técnica rápida em delegacias e plantões. Entrevista reservada com o cliente, acompanhamento em depoimentos e resguardo incondicional contra abusos.
                </p>
              </div>
              
              <div className="bg-[#0D152D] p-8 lg:p-12 group hover:bg-[#18233F] transition-all">
                <div className="w-10 h-10 bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/20 flex items-center justify-center rounded-sm mb-6 font-bold font-mono">02</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#B8B9B9]" /> Estratégia Personalizada
                </h3>
                <p className="text-xs text-[#85888F] leading-relaxed">
                  Análise pericial dos autos, identificação de nulidades probatórias e elaboração de teses defensivas individualizadas com foco na liberdade provisória ou absolvição.
                </p>
              </div>
              
              <div className="bg-[#0D152D] p-8 lg:p-12 group hover:bg-[#18233F] transition-all">
                <div className="w-10 h-10 bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/20 flex items-center justify-center rounded-sm mb-6 font-bold font-mono">03</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-white flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#B8B9B9]" /> Combate Recursal
                </h3>
                <p className="text-xs text-[#85888F] leading-relaxed">
                  Atuação incisiva perante as Câmaras Criminais do TJSP, TRF-3 e Tribunais Superiores (STJ e STF), com sustentações orais e impetração de Habeas Corpus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares da Atuação */}
        <TestimonialSlider />

        {/* FAQ */}
        <section id="faq" className="bg-[#0D152D] border-b border-[#18233F]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col bg-[#0D152D] border-b lg:border-b-0 lg:border-r border-[#18233F]">
              <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                Dúvidas Frequentes
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">
                Orientações essenciais sobre a defesa criminal.
              </h2>
              <p className="text-[#85888F] text-sm leading-relaxed mb-8">
                Esclareça as perguntas mais imediatas sobre flagrantes, audiência de custódia, inquéritos e o funcionamento do nosso plantão penal 24 horas.
              </p>
              <div className="mt-auto p-6 bg-[#18233F] border border-[#B8B9B9]/20">
                <span className="block text-xs uppercase tracking-widest text-[#B8B9B9] font-bold mb-2">Urgência em andamento?</span>
                <p className="text-xs text-[#85888F] mb-4">Em situações de flagrante ou mandado de prisão, cada minuto conta.</p>
                <Button size="sm" className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white rounded-none font-bold text-xs uppercase tracking-widest w-full h-auto py-3" asChild>
                  <a href="https://wa.me/5519991084001?text=Olá,%20estou%20com%20uma%20urgência%20criminal%20agora.">
                    Falar no Plantão 24h
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-[55%] p-8 lg:p-12 bg-[#0D152D]">
              <div className="flex flex-col border-t border-[#18233F]">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-[#18233F]">
                    <button
                      className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    >
                      <span className="font-bold text-sm uppercase tracking-wide text-white group-hover:text-[#B8B9B9] transition-colors">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-sm transition-colors ${openIndex === idx ? 'bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/40' : 'bg-[#18233F]/40 text-[#85888F] group-hover:bg-[#18233F] group-hover:text-white'}`}>
                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-sm text-[#85888F] leading-relaxed pr-8">
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

        {/* Contato & Maps */}
        <section id="contato" className="flex flex-col lg:flex-row border-b border-[#18233F]">
          <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col bg-[#0D152D] text-white border-r border-[#18233F]">
            <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Localização & Plantão
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-10 text-white">
              Visite nosso escritório em Campinas
            </h2>
            <div className="flex flex-col gap-8 mt-auto">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm shrink-0 text-[#B8B9B9]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#B8B9B9] mb-1">Endereço</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-[#E4E5E7]">
                    Av. Campos Sales, 532 - Sl 61<br />
                    Centro, Campinas - SP<br />
                    CEP 13010-080
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm shrink-0 text-[#B8B9B9]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#B8B9B9] mb-1">Plantão Telefônico & WhatsApp</h4>
                  <a href="https://wa.me/5519991084001" className="text-base font-bold text-white hover:text-[#B8B9B9] transition-colors block mb-1 font-mono">
                    (19) 99108-4001
                  </a>
                  <p className="text-xs text-[#85888F] mb-3">Atendimento 24h para emergências penais e flagrantes.</p>
                  <Button className="bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-none uppercase tracking-widest font-bold text-[10px] h-8 px-4" asChild>
                    <a href="https://wa.me/5519991084001?text=Olá,%20preciso%20de%20atendimento%20jurídico%20em%20Direito%20Criminal.">
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm shrink-0 text-[#B8B9B9]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#B8B9B9] mb-1">Horário de Funcionamento</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-[#E4E5E7]">
                    Plantão Criminal: 24 horas por dia<br />
                    Atendimento Presencial: Segunda a Sexta, com hora marcada
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <div className="w-10 h-10 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm shrink-0 text-[#B8B9B9]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#B8B9B9] mb-1">Redes Sociais</h4>
                  <a 
                    href="https://instagram.com/camargoadvocaciacriminal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[13px] text-white hover:text-[#B8B9B9] transition-colors"
                  >
                    @camargoadvocaciacriminal
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[55%] h-[420px] lg:h-auto relative bg-[#18233F]">
            <iframe 
              src="https://maps.google.com/maps?q=Av.+Campos+Sales,+532+-+Centro,+Campinas+-+SP,+13010-080&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-700" 
              loading="lazy"
              title="Localização Camargo Advocacia Criminal - Campinas"
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#18233F] flex flex-col md:flex-row items-center justify-between p-8 lg:p-14 gap-8 border-b border-[#18233F]">
          <div>
            <span className="text-[10px] text-[#B8B9B9] uppercase font-bold tracking-[0.2em] block mb-2">Plantão 24 Horas</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
              Precisa de intervenção jurídica imediata?
            </h2>
            <p className="text-[#85888F] text-sm">
              Fale agora com o advogado criminalista de plantão e proteja seus direitos.
            </p>
          </div>
          <Button size="lg" className="bg-[#B8B9B9] text-[#0D152D] rounded-none hover:bg-white uppercase tracking-widest font-bold text-xs w-full md:w-auto px-10 py-6 h-auto shrink-0 transition-all shadow-xl" asChild>
            <a href="https://wa.me/5519991084001?text=Olá,%20preciso%20de%20atendimento%20jurídico%20em%20Direito%20Criminal.">
              Acionar Plantão no WhatsApp
            </a>
          </Button>
        </section>
      
      </main>
    </>
  );
}
