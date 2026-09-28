import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ShieldAlert, PhoneCall, Scale, Clock, Lock } from 'lucide-react';
import sealImg from '@/assets/images/camargo_seal_logo_1790597600740.jpg';

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[82dvh] lg:h-[calc(100vh-76px)] border-b border-[#18233F] overflow-hidden bg-[#0D152D]">
      <motion.div 
        className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center bg-[#0D152D] lg:border-r border-[#18233F]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Campinas - SP • Plantão Criminal 24h
          </span>
        </div>

        <h1 className="text-4xl lg:text-[54px] leading-[1.08] font-extrabold tracking-tight mb-6 text-white">
          Defesa criminal combativa, estratégica e intransigente da sua <span className="text-[#B8B9B9] italic font-serif">liberdade</span>.
        </h1>

        <p className="text-[#85888F] text-base lg:text-lg leading-relaxed max-w-[520px] mb-10">
          A <strong className="text-white font-medium">Camargo Advocacia Criminal</strong> é especializada exclusivamente na defesa penal. Atendimento imediato em flagrantes, audiências de custódia, inquéritos policiais, Tribunal do Júri e recursos aos Tribunais Superiores.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Button size="lg" className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white px-8 py-6 font-bold text-xs uppercase tracking-widest rounded-none h-auto transition-all shadow-lg shadow-black/40 group" asChild>
            <a 
              href="https://wa.me/5519991084001?text=Olá,%20preciso%20de%20atendimento%20jurídico%20em%20Direito%20Criminal."
              className="flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-[#0D152D] group-hover:scale-110 transition-transform" />
              <span>Plantão Urgente 24h</span>
            </a>
          </Button>
          
          <div className="flex flex-col">
            <span className="text-[10px] text-[#85888F] uppercase font-bold tracking-widest mb-1 flex items-center gap-1.5">
              <PhoneCall className="w-3 h-3 text-[#B8B9B9]" />
              Plantão Telefônico Direto
            </span>
            <a 
              href="tel:+5519991084001" 
              className="text-base font-bold text-white hover:text-[#B8B9B9] transition-colors font-mono"
            >
              +55 (19) 99108-4001
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#18233F] max-w-lg">
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#85888F] font-bold mb-1">Localização</span>
            <span className="text-xs font-semibold text-white">Centro, Campinas - SP</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#85888F] font-bold mb-1">Especialidade</span>
            <span className="text-xs font-semibold text-[#B8B9B9]">Direito Criminal</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#85888F] font-bold mb-1">Atendimento</span>
            <span className="text-xs font-semibold text-white">24h Ininterrupto</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-[45%] bg-[#18233F] relative overflow-hidden flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_30%,_#202D50_0%,_#0D152D_80%)] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop" 
          alt="Balança da Justiça e ambiente de advocacia criminal"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-25 mix-blend-luminosity"
          fetchPriority="high"
        />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-full h-full p-8 lg:p-12 flex flex-col justify-between text-white">
            <div className="flex justify-end">
              <div className="w-20 h-20 rounded-full border border-[#B8B9B9]/30 p-1 bg-[#0D152D]/80 backdrop-blur-sm shadow-xl">
                <img 
                  src={sealImg} 
                  alt="Selo Oficial Camargo Advocacia Criminal" 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
            </div>

            <div>
              <div className="mb-8 border-l-2 border-[#B8B9B9] pl-6 bg-[#0D152D]/60 backdrop-blur-md py-4 pr-6">
                <span className="block text-2xl lg:text-3xl font-light italic mb-2 text-[#E4E5E7] font-serif">
                  "A liberdade é o primeiro dos direitos fundamentais."
                </span>
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B8B9B9]">
                  Advocacia Penal Especializada
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0D152D]/80 backdrop-blur-md p-6 border border-[#B8B9B9]/20 shadow-lg">
                  <div className="flex items-center gap-2 mb-2 text-[#B8B9B9]">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Plantão 24 Horas</span>
                  </div>
                  <span className="block text-2xl font-extrabold text-white">Pronto</span>
                  <span className="text-[11px] text-[#85888F]">Flagrantes e Custódia</span>
                </div>

                <div className="bg-[#0D152D]/80 backdrop-blur-md p-6 border border-[#B8B9B9]/20 shadow-lg">
                  <div className="flex items-center gap-2 mb-2 text-[#B8B9B9]">
                    <Lock className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Garantia</span>
                  </div>
                  <span className="block text-2xl font-extrabold text-white">Sigilo</span>
                  <span className="text-[11px] text-[#85888F]">Absoluto e Confidencial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
