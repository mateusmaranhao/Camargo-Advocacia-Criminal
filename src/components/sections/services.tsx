import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="servicos" className="border-b border-[#18233F] bg-[#0D152D]">
      <div className="w-full flex flex-col">
        <motion.div 
          className="p-8 lg:p-14 border-b border-[#18233F] bg-[#0D152D]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[#B8B9B9] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            Especialidades Jurídicas
          </span>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl max-w-2xl">
            Soluções jurídicas especializadas em Direito Criminal
          </h2>
          <p className="text-[#85888F] text-sm mt-3 max-w-xl">
            Atendimento estratégico do plantão policial aos Tribunais Superiores em Brasília.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#18233F]/40 gap-px"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((s) => (
            <motion.div 
              key={s.id} 
              variants={itemVariants}
              className="bg-[#0D152D] p-8 lg:p-10 flex flex-col justify-between group hover:bg-[#18233F] transition-all duration-300 relative border border-transparent hover:border-[#B8B9B9]/20"
            >
              <div className="mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-6 bg-[#18233F] text-[#B8B9B9] border border-[#B8B9B9]/20 group-hover:border-[#B8B9B9]/50 group-hover:bg-[#0D152D] transition-colors">
                  <s.icon className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="font-bold text-base uppercase tracking-wide mb-3 text-white group-hover:text-[#B8B9B9] transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-xs text-[#85888F] leading-relaxed line-clamp-3">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#18233F] flex items-center justify-between">
                <Link 
                  to={`/servicos/${s.id}`} 
                  className="text-xs font-bold uppercase tracking-wider text-[#B8B9B9] hover:text-white flex items-center gap-2 group-hover:translate-x-1 transition-all"
                >
                  <span>Conhecer detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-[#85888F] font-mono uppercase">Campinas & RMC</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
