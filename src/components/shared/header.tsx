import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { prefetchRoute } from '@/lib/prefetch';
import logoImg from '@/assets/images/camargo_logo_emblem_1790597573681.jpg';
import { PhoneCall } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    let isActive = false;
    if (path.startsWith('/#')) {
      isActive = location.pathname === '/' && location.hash === path.substring(1);
    } else {
      isActive = path === '/' ? location.pathname === '/' && !location.hash : location.pathname.startsWith(path);
    }
    return isActive
      ? "text-white border-b-2 border-[#B8B9B9] pb-1 font-semibold"
      : "text-[#85888F] hover:text-white transition-colors pb-1 border-b-2 border-transparent";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#18233F] bg-[#0D152D]/95 backdrop-blur-md h-[76px] flex items-center">
      <div className="w-full flex items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#B8B9B9]/30 bg-[#18233F] shrink-0 flex items-center justify-center shadow-inner">
            <img 
              src={logoImg} 
              alt="Camargo Advocacia Criminal" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-lg uppercase text-white leading-none">
              Camargo
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#B8B9B9]">
              Advocacia Criminal
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 lg:flex text-[12px] font-semibold uppercase tracking-wider">
            <Link to="/" className={getLinkClass('/')}>Início</Link>
            <Link to="/sobre" className={getLinkClass('/sobre')} onMouseEnter={() => prefetchRoute('/sobre')}>O Escritório</Link>
            <Link to="/servicos" className={getLinkClass('/servicos')} onMouseEnter={() => prefetchRoute('/servicos')}>Atuação Penal</Link>
            <Link to="/#faq" className={getLinkClass('/#faq')}>Dúvidas</Link>
            <Link to="/#contato" className={getLinkClass('/#contato')}>Contato & Plantão</Link>
          </nav>

          <Button asChild className="bg-[#18233F] text-white border border-[#B8B9B9]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#B8B9B9] hover:text-[#0D152D] rounded-none hidden md:inline-flex h-auto transition-all shadow-sm">
            <a 
              href="https://wa.me/5519991084001?text=Olá,%20preciso%20de%20atendimento%20jurídico%20em%20Direito%20Criminal."
              className="flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B8B9B9] group-hover:text-[#0D152D]" />
              <span>Plantão 24h</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
