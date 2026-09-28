import { Link } from 'react-router-dom';
import { prefetchRoute } from '@/lib/prefetch';
import logoImg from '@/assets/images/camargo_logo_emblem_1790597573681.jpg';
import { Instagram, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0D152D] border-t border-[#18233F] text-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#18233F]/40 gap-px">
        <div className="bg-[#0D152D] p-8 lg:p-12 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#B8B9B9]/30 bg-[#18233F] shrink-0">
                <img 
                  src={logoImg} 
                  alt="Camargo Advocacia Criminal" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg uppercase leading-none">Camargo</span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#B8B9B9]">Advocacia Criminal</span>
              </div>
            </div>
            <p className="text-[13px] text-[#85888F] leading-relaxed max-w-[32ch]">
              Advocacia criminal especializada, técnica e combativa. Atendimento 24h em Campinas, Região Metropolitana e Tribunais Superiores em defesa irrestrita da liberdade.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/camargoadvocaciacriminal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-sm bg-[#18233F] border border-[#B8B9B9]/20 flex items-center justify-center text-[#B8B9B9] hover:text-white hover:border-[#B8B9B9] transition-colors"
                aria-label="Instagram Camargo Advocacia Criminal"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#85888F] font-mono">@camargoadvocaciacriminal</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0D152D] p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#B8B9B9]">Atuação Criminal</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#85888F]">
            <li><Link to="/servicos/flagrante-e-audiencia-de-custodia" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Flagrante & Audiência de Custódia</Link></li>
            <li><Link to="/servicos/habeas-corpus-e-liberdade" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Habeas Corpus & Revogação de Prisão</Link></li>
            <li><Link to="/servicos/inquerito-policial-e-investigacao" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Inquérito Policial & Investigação</Link></li>
            <li><Link to="/servicos/tribunal-do-juri" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Tribunal do Júri Especializado</Link></li>
            <li><Link to="/servicos/crimes-economicos-e-empresariais" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Crimes Econômicos & Empresariais</Link></li>
            <li><Link to="/servicos/execucao-penal-e-revisao" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Execução Penal & Revisão Criminal</Link></li>
          </ul>
        </div>

        <div className="bg-[#0D152D] p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#B8B9B9]">Institucional</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#85888F]">
            <li><Link to="/sobre" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/sobre')}>O Escritório</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Todas as Áreas de Atuação</Link></li>
            <li><Link to="/#faq" className="hover:text-white transition-colors">Perguntas Frequentes</Link></li>
            <li><Link to="/#contato" className="hover:text-white transition-colors">Plantão 24h & Localização</Link></li>
          </ul>
        </div>

        <div className="bg-[#0D152D] p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#B8B9B9]">Plantão & Endereço</h4>
          <ul className="flex flex-col gap-3.5 text-[13px] text-[#85888F]">
            <li className="font-semibold text-white flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B8B9B9]" />
              Campinas, SP
            </li>
            <li>Av. Campos Sales, 532 - Sl 61</li>
            <li>Centro - CEP 13010-080</li>
            <li className="text-xs text-[#85888F]/80">Atendimento 24h para emergências penais</li>
            <li className="pt-2">
              <a 
                href="https://wa.me/5519991084001" 
                className="inline-flex items-center gap-2 font-bold text-sm text-white hover:text-[#B8B9B9] transition-colors bg-[#18233F] px-3 py-2 rounded-sm border border-[#B8B9B9]/30"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8B9B9]" />
                (19) 99108-4001
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[#18233F] bg-[#070B18] p-6 px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#85888F] uppercase tracking-wider font-semibold">
        <p>© {new Date().getFullYear()} Camargo Advocacia Criminal. OAB/SP.</p>
        <p>Defesa intransigente da liberdade com rigor técnico e absoluto sigilo.</p>
      </div>
    </footer>
  );
}
