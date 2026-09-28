import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-32 text-center px-4 bg-[#0D152D] text-white">
      <span className="text-[10px] text-[#B8B9B9] uppercase font-bold tracking-[0.25em] mb-3">
        Camargo Advocacia Criminal
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h1>
      <p className="text-[#85888F] max-w-md mb-8 text-sm leading-relaxed">
        A página solicitada não foi encontrada ou está sob atualização técnica.
      </p>
      <Button asChild className="bg-[#B8B9B9] text-[#0D152D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-6 py-4 h-auto">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>
      </Button>
    </div>
  );
}
