import { Target, Shield, Clock, Scale, Lock, MapPin, Phone } from 'lucide-react';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { localBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';
import cartoonLawyersImg from '@/assets/images/advogados_cartoon_1790597586806.jpg';
import sealImg from '@/assets/images/camargo_seal_logo_1790597600740.jpg';
import { Button } from '@/components/ui/button';

export function Sobre() {
  return (
    <>
      <SEOHead 
        title="O Escritório | Camargo Advocacia Criminal em Campinas"
        description="Conheça a história e o compromisso da Camargo Advocacia Criminal. Atuação especializada em Direito Penal, atendimento 24h em Campinas e Tribunais Superiores."
        canonicalUrl="/sobre"
        jsonLd={[localBusinessSchema, generateBreadcrumbSchema([{ name: "O Escritório", item: "/sobre" }])]}
      />
      <main className="flex-1 flex flex-col bg-[#0D152D] text-white">
        <Breadcrumbs items={[{ label: 'O Escritório' }]} />
        
        <section className="bg-[#0D152D] border-b border-[#18233F]">
          <div className="flex flex-col lg:flex-row min-h-[55dvh]">
            <div className="w-full lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#18233F]">
              <span className="inline-block bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm self-start mb-6">
                Institucional
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Compromisso inegociável com a sua <span className="text-[#B8B9B9] italic font-serif">liberdade</span>.
              </h1>
              <p className="text-[#85888F] leading-relaxed max-w-xl text-base md:text-lg mb-6">
                A <strong className="text-white">Camargo Advocacia Criminal</strong> é um escritório dedicado com exclusividade ao Direito Penal e Processual Penal. Nossa sede em Campinas foi estruturada para oferecer uma advocacia artesanal, estratégica e combativa.
              </p>
              <p className="text-[#85888F] leading-relaxed max-w-xl text-sm">
                Frente ao poder punitivo estatal, asseguramos que nenhum direito seja violado e que o contraditório seja exercido com a máxima firmeza técnica em delegacias, fóruns e cortes superiores.
              </p>
            </div>
            
            <div className="w-full lg:w-[45%] relative bg-[#18233F] min-h-[360px] overflow-hidden group">
              <img 
                src={cartoonLawyersImg} 
                alt="Corpo jurídico Camargo Advocacia Criminal" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D152D] via-[#0D152D]/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-end justify-between p-8">
                <div className="bg-[#0D152D]/90 backdrop-blur-md border border-[#B8B9B9]/30 p-6 w-full flex items-center justify-between">
                  <div>
                    <span className="block text-2xl font-extrabold text-white">24h</span>
                    <span className="text-[10px] text-[#B8B9B9] uppercase tracking-widest font-bold">Plantão Penal Permanente</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#B8B9B9]/40 overflow-hidden">
                    <img src={sealImg} alt="Selo Oficial" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-20 lg:py-24 border-b border-[#18233F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <span className="text-[10px] text-[#B8B9B9] uppercase font-bold tracking-[0.25em] block mb-2">Fundamentos</span>
              <h2 className="text-3xl font-extrabold text-white">Nossos Pilares de Atuação</h2>
              <p className="text-[#85888F] text-sm mt-2 max-w-xl">
                Diretrizes éticas e processuais que norteiam cada intervenção da Camargo Advocacia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#18233F]/40 gap-px border border-[#18233F]">
              <div className="bg-[#0D152D] p-10 lg:p-12 hover:bg-[#18233F] transition-colors">
                <div className="w-12 h-12 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm mb-6 text-[#B8B9B9]">
                  <Scale className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Excelência Técnica</h3>
                <p className="text-[#85888F] text-xs leading-relaxed">
                  Estudo aprofundado da jurisprudência contemporânea dos Tribunais Superiores e elaboração artesanal de peças processuais com precisão cirúrgica.
                </p>
              </div>
              
              <div className="bg-[#0D152D] p-10 lg:p-12 hover:bg-[#18233F] transition-colors">
                <div className="w-12 h-12 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm mb-6 text-[#B8B9B9]">
                  <Lock className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Sigilo Absoluto</h3>
                <p className="text-[#85888F] text-xs leading-relaxed">
                  Rigorosa proteção ao segredo profissional e preservação integral da honra, imagem e intimidade de nossos constituintes.
                </p>
              </div>
              
              <div className="bg-[#0D152D] p-10 lg:p-12 hover:bg-[#18233F] transition-colors">
                <div className="w-12 h-12 bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center rounded-sm mb-6 text-[#B8B9B9]">
                  <Clock className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Prontidão 24 Horas</h3>
                <p className="text-[#85888F] text-xs leading-relaxed">
                  Plantão ativo 24h para prisões em flagrante, cumprimento de mandados de busca e apreensão e audiências de custódia em toda a RMC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Localização & Sede */}
        <section className="p-8 lg:p-16 bg-[#18233F] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] text-[#B8B9B9] uppercase font-bold tracking-[0.25em] block mb-2">Estrutura Privativa</span>
            <h3 className="text-2xl font-bold text-white mb-3">Atendimento Seguro e Confidencial no Centro de Campinas</h3>
            <p className="text-sm text-[#85888F] leading-relaxed">
              Estamos localizados na <strong className="text-white font-medium">Av. Campos Sales, 532 - Sala 61</strong>, com estrutura reservada para reuniões sigilosas. Atendimento presencial com agendamento prévio ou emergencial no plantão criminal.
            </p>
          </div>
          <Button size="lg" className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 shrink-0 h-auto" asChild>
            <a href="https://wa.me/5519991084001?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20jurídica.">
              Agendar Consulta no WhatsApp
            </a>
          </Button>
        </section>
      </main>
    </>
  );
}
