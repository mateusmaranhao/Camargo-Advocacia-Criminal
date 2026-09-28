import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3.5 px-6 lg:px-12 bg-[#0D152D] border-b border-[#18233F] overflow-x-auto no-scrollbar">
      <ol className="flex items-center space-x-2 text-xs font-semibold text-[#85888F] uppercase tracking-wider min-w-max">
        <li>
          <Link to="/" className="hover:text-white transition-colors">Início</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-3 h-3 mx-2 text-[#85888F]/60" />
            {item.href ? (
              <Link to={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#B8B9B9]" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
