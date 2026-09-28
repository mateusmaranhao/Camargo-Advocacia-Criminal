import { servicesData } from '@/lib/data';

export function ServiceMarquee() {
  const repeatedServices = [...servicesData, ...servicesData, ...servicesData, ...servicesData];

  return (
    <div className="flex overflow-hidden w-full bg-[#18233F] border-b border-[#18233F] py-4 select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
        {repeatedServices.map((service, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="mx-8 text-[11px] font-bold uppercase tracking-[0.25em] text-white/90 whitespace-nowrap">
              {service.shortTitle}
            </span>
            <div className="w-1.5 h-1.5 bg-[#B8B9B9] rotate-45 shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
