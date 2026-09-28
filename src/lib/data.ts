import { 
  Scale, 
  ShieldAlert, 
  FileSearch, 
  Gavel, 
  Landmark, 
  ShieldCheck, 
  type LucideIcon 
} from 'lucide-react';

export interface Service {
  id: string;
  shortTitle: string;
  title: string;
  heroSubtitle: string;
  icon: LucideIcon;
  desc: string;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Service[] = [
  { 
    id: 'flagrante-e-audiencia-de-custodia', 
    shortTitle: 'Flagrante & Custódia',
    title: 'Flagrante Delito e Audiência de Custódia em Campinas',
    heroSubtitle: 'Atendimento emergencial e presencial 24h para garantia imediata da liberdade.',
    icon: ShieldAlert, 
    desc: 'Atuação combativa desde as primeiras horas da prisão em delegacias de Campinas e região. Defesa técnica na Audiência de Custódia visando o relaxamento de prisão ilegal ou a concessão de liberdade provisória.',
    sections: [
      { 
        title: 'Pronto Atendimento 24 Horas', 
        content: 'Presença imediata do advogado criminalista na delegacia (Polícia Civil ou Federal) para entrevistar o cliente reservadamente, acompanhar depoimentos e coibir abusos de autoridade.' 
      },
      { 
        title: 'Como funciona a Audiência de Custódia', 
        content: 'Realizada em até 24 horas após a prisão, perante o juiz competente, Ministério Público e defesa, onde são analisadas a legalidade da prisão e a viabilidade da concessão de liberdade.' 
      },
      { 
        title: 'Relaxamento de Prisão Ilegal', 
        content: 'Identificação técnica de nulidades no auto de prisão em flagrante, violação de domicílio sem mandado ou ausência de justa causa, pleiteando o relaxamento imediato.' 
      },
      { 
        title: 'Liberdade Provisória com ou sem Fiança', 
        content: 'Demonstração de requisitos favoráveis (primariedade, bons antecedentes, residência fixa e ocupação lícita) para aplicação de medidas cautelares alternativas ao cárcere.' 
      },
      { 
        title: 'Prevenção de Autoincriminação', 
        content: 'Orientação técnica fundamental quanto ao exercício do direito constitucional ao silêncio, impedindo confissões forçadas ou declarações prejudiciais ao processo.' 
      },
      { 
        title: 'Atuação Regional em Campinas e RMC', 
        content: 'Cobertura rápida e eficiente nos plantões policiais de Campinas, Sumaré, Hortolândia, Americana, Valinhos, Vinhedo, Paulínia e cidades adjacentes.' 
      }
    ],
    faqs: [
      { 
        question: 'Quanto tempo após a prisão deve ocorrer a audiência de custódia?', 
        answer: 'Por determinação legal e jurisprudencial do STF, toda pessoa presa em flagrante deve ser apresentada ao juiz de garantias no prazo máximo de 24 horas.' 
      },
      { 
        question: 'É possível responder ao processo criminal em liberdade?', 
        answer: 'Sim. A prisão preventiva é medida excepcional. Havendo fundamentação técnica adequada, a regra constitucional é que o investigado responda ao processo em liberdade.' 
      }
    ]
  },
  { 
    id: 'habeas-corpus-e-liberdade',
    shortTitle: 'Habeas Corpus',
    title: 'Habeas Corpus e Revogação de Prisão Preventiva', 
    heroSubtitle: 'Medidas urgentes perante os Tribunais para cessar constrangimentos ilegais à liberdade.',
    icon: Scale, 
    desc: 'Impetração célere e fundamentada de Habeas Corpus perante o Tribunal de Justiça de São Paulo (TJSP), TRF-3, Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF).',
    sections: [
      { 
        title: 'Habeas Corpus com Pedido Liminar', 
        content: 'Elaboração técnica ágil voltada à obtenção de tutela de urgência liminar para restabelecer a liberdade do cidadão antes do julgamento final do mérito.' 
      },
      { 
        title: 'Revogação de Prisão Preventiva', 
        content: 'Demonstração da ausência de periculum libertatis e desproporcionalidade da segregação cautelar frente às circunstâncias concretas do fato.' 
      },
      { 
        title: 'Atuação Direta perante o TJSP e TRF-3', 
        content: 'Distribuição prioritária com entrega de memoriais e despacho pessoal direto com Desembargadores e relatores das Câmaras Criminais.' 
      },
      { 
        title: 'Sustentação Oral em Sessões de Julgamento', 
        content: 'Defesa oratória vigorosa e combativa nas sessões colegiadas, esclarecendo aspectos fáticos e controvérsias jurídicas perante o colegiado.' 
      },
      { 
        title: 'Recursos aos Tribunais Superiores em Brasília', 
        content: 'Interposição de Recursos Ordinários Constitucionais e Habeas Corpus originários perante o Superior Tribunal de Justiça (STJ) e o STF.' 
      },
      { 
        title: 'Combate ao Excesso de Prazo', 
        content: 'Reconhecimento de constrangimento ilegal motivado por morosidade injustificada na instrução processual ou demora desarrazoada do Estado.' 
      }
    ],
    faqs: [
      { 
        question: 'Quanto tempo demora para a liminar de Habeas Corpus ser apreciada?', 
        answer: 'A análise da liminar costuma ocorrer em prazo célere, frequentemente entre 24 e 48 horas após a distribuição perante o Tribunal competente.' 
      },
      { 
        question: 'Quem pode impetrar o Habeas Corpus?', 
        answer: 'Embora qualquer pessoa possa redigi-lo, o Habeas Corpus subscrito por advogado criminalista especialista conta com técnica apurada, jurisprudência atualizada e viabiliza sustentação oral.' 
      }
    ]
  },
  { 
    id: 'inquerito-policial-e-investigacao',
    shortTitle: 'Inquérito Policial',
    title: 'Acompanhamento de Inquérito Policial e Investigação Preliminar', 
    heroSubtitle: 'Defesa estratégica desde o início da investigação para evitar denúncias infundadas.',
    icon: FileSearch, 
    desc: 'Atuação vigilante em inquéritos policiais na Polícia Civil e Federal, oitivas de testemunhas, produção de provas defensivas e pedidos de arquivamento.',
    sections: [
      { 
        title: 'Defesa na Fase de Inquérito', 
        content: 'A melhor defesa criminal começa na fase investigatória. Uma atuação técnica firme evita o oferecimento de denúncia e indiciamentos prematuros.' 
      },
      { 
        title: 'Acesso Integral aos Autos e Sigilo', 
        content: 'Garantia de amplo acesso a todos os elementos de prova já documentados (Súmula Vinculante 14 do STF), com respeito absoluto ao sigilo profissional.' 
      },
      { 
        title: 'Acompanhamento em Oitivas e Interrogatórios', 
        content: 'Presença ativa ao lado do cliente durante depoimentos e esclarecimentos perante a autoridade policial, evitando armadilhas e interpretações equivocadas.' 
      },
      { 
        title: 'Investigação Defensiva e Provas Periciais', 
        content: 'Requerimento fundamentado de diligências, perícias técnicas independentes e juntada de documentos capazes de comprovar a inocência do investigado.' 
      },
      { 
        title: 'Acordo de Não Persecução Penal (ANPP)', 
        content: 'Análise minuciosa de cabimento de acordos despenalizadores para afastar a abertura de processo criminal formal e registro de antecedentes.' 
      },
      { 
        title: 'Trancamento de Inquérito Ilegal', 
        content: 'Ajuizamento de medidas para encerramento de investigações abusivas instauradas sem indícios mínimos de autoria ou materialidade delitiva.' 
      }
    ],
    faqs: [
      { 
        question: 'Sou obrigado a prestar depoimento na delegacia sem advogado?', 
        answer: 'Não. Você tem o direito de ser assistido por seu advogado criminalista e de permanecer em silêncio caso deseje, sem que isso seja interpretado em seu prejuízo.' 
      },
      { 
        question: 'O inquérito policial gera antecedentes criminais?', 
        answer: 'Não. O inquérito policial é mero procedimento investigatório administrativo e não gera antecedentes ou condenação definitiva.' 
      }
    ]
  },
  { 
    id: 'tribunal-do-juri', 
    shortTitle: 'Tribunal do Júri',
    title: 'Defesa Especializada no Tribunal do Júri em Campinas', 
    heroSubtitle: 'Atuação combativa e oratória persuasiva na defesa de crimes dolosos contra a vida.',
    icon: Gavel, 
    desc: 'Preparação minuciosa e defesa estratégica desde a primeira fase (instrução preliminar) até os debates orais perante os jurados no plenário do Júri.',
    sections: [
      { 
        title: 'O Rito Escalonado do Júri', 
        content: 'O procedimento do Júri exige maestria em duas etapas: a instrução perante o juiz singular e o julgamento pelos jurados populares em plenário.' 
      },
      { 
        title: 'Despronúncia e Impronúncia', 
        content: 'Busca incessante pelo reconhecimento da ausência de indícios suficientes de autoria ou legítima defesa já na primeira fase do processo.' 
      },
      { 
        title: 'Estudo Minucioso dos Autos e Provas', 
        content: 'Análise detalhada de laudos necroscópicos, balística forense, reconstituições e depoimentos para construir teses defensivas sólidas.' 
      },
      { 
        title: 'Oratória e Debates em Plenário', 
        content: 'Comunicação clara, articulada e convincente dirigida aos jurados da sociedade, desconstruindo narrativas frágeis da acusação.' 
      },
      { 
        title: 'Quesitação e Nulidades Processuais', 
        content: 'Fiscalização rigorosa da elaboração dos quesitos e impugnação imediata de nulidades que possam comprometer a soberania dos veredictos.' 
      },
      { 
        title: 'Recursos de Apelação no Júri', 
        content: 'Interposição de apelações contra decisões manifestamente contrárias à prova dos autos, visando a realização de novo julgamento.' 
      }
    ],
    faqs: [
      { 
        question: 'Quais crimes são julgados pelo Tribunal do Júri?', 
        answer: 'Crimes dolosos contra a vida (homicídio, infanticídio, aborto e induzimento ao suicídio), sejam eles consumados ou tentados.' 
      },
      { 
        question: 'É possível reverter uma condenação no Tribunal do Júri?', 
        answer: 'Sim. Se a decisão dos jurados for manifestamente contrária às provas dos autos ou houver nulidade processual, o Tribunal de Justiça pode anular o júri e determinar novo julgamento.' 
      }
    ]
  },
  { 
    id: 'crimes-economicos-e-empresariais',
    shortTitle: 'Crimes Empresariais',
    title: 'Direito Penal Econômico e Crimes Empresariais', 
    heroSubtitle: 'Consultoria preventiva e defesa contenciosa em infrações penais do ambiente de negócios.',
    icon: Landmark, 
    desc: 'Atuação jurídica especializada para executivos, sócios e empresas em acusações de crimes tributários, lavagem de capitais, fraudes e compliance criminal.',
    sections: [
      { 
        title: 'Crimes Contra a Ordem Tributária', 
        content: 'Defesa em autos de infração que descambam para representações fiscais para fins penais, discutindo crédito tributário e dolo específico.' 
      },
      { 
        title: 'Lavagem de Dinheiro e Evasão', 
        content: 'Atuação estratégica em investigações complexas envolvendo movimentações financeiras, cooperação internacional e bloqueio de bens.' 
      },
      { 
        title: 'Crimes Contra o Sistema Financeiro', 
        content: 'Defesa em imputações de gestão fraudulenta, evasão cambial, apropriação indébita previdenciária e crimes falimentares.' 
      },
      { 
        title: 'Criminal Compliance Preventivo', 
        content: 'Elaboração de programas de conformidade penal para mitigar riscos de responsabilização subjetiva de diretores e conselheiros.' 
      },
      { 
        title: 'Desbloqueio de Ativos e Medidas Cautelares', 
        content: 'Medidas judiciais para liberação de contas bancárias, veículos e imóveis constritos indevidamente em medidas assecuratórias.' 
      },
      { 
        title: 'Atuação na Justiça Federal e Estadual', 
        content: 'Representação em operações especiais, procedimentos investigatórios do Ministério Público e ações penais de alta complexidade.' 
      }
    ],
    faqs: [
      { 
        question: 'O parcelamento ou pagamento do débito tributário extingue a ação penal?', 
        answer: 'Sim. A legislação prevê a suspensão da pretensão punitiva com o parcelamento e a extinção da punibilidade com o pagamento integral do tributo antes do trânsito em julgado.' 
      },
      { 
        question: 'Sócios respondem automaticamente por dívidas fiscais da empresa na esfera penal?', 
        answer: 'Não. É vedada a responsabilidade penal objetiva no Brasil. O Ministério Público precisa comprovar a participação direta e o dolo de cada gestor individualmente.' 
      }
    ]
  },
  { 
    id: 'execucao-penal-e-revisao', 
    shortTitle: 'Execução Penal',
    title: 'Execução Penal e Revisão Criminal', 
    heroSubtitle: 'Fiscalização rigorosa do cumprimento de pena e retificação de injustiças judiciais.',
    icon: ShieldCheck, 
    desc: 'Acompanhamento do processo executivo penal: progressão de regime, livramento condicional, remição de pena por trabalho/estudo e ação de Revisão Criminal.',
    sections: [
      { 
        title: 'Acompanhamento de Cálculo de Pena', 
        content: 'Conferência técnica do atestado de pena a cumprir, garantindo a correta aplicação de frações legais vigentes na data do fato.' 
      },
      { 
        title: 'Progressão de Regime Prisional', 
        content: 'Requerimento imediato da evolução do regime fechado para o semiaberto e deste para o aberto assim que atingido o lapso temporal e bom comportamento.' 
      },
      { 
        title: 'Livramento Condicional e Saídas Temporárias', 
        content: 'Postulação dos benefícios legais que preparam o apenado para a reinserção social digna e convivência familiar.' 
      },
      { 
        title: 'Remição de Pena por Trabalho e Estudo', 
        content: 'Comprovação documental de dias trabalhados, leitura e cursos realizados para abater legalmente o tempo total da condenação.' 
      },
      { 
        title: 'Defesa em Falta Disciplinar (PAD)', 
        content: 'Atuação técnica em sindicâncias internas para evitar sanções disciplinares injustas que possam interromper lapsos de progressão.' 
      },
      { 
        title: 'Ação de Revisão Criminal', 
        content: 'Medida judicial autônoma para anular condenações injustas transitadas em julgado quando surgem novas provas da inocência ou violações da lei.' 
      }
    ],
    faqs: [
      { 
        question: 'O que é necessário para pleitear a progressão de regime prisional?', 
        answer: 'É necessário o cumprimento da fração legal de pena exigida pela lei penal vigente à época do fato aliada ao atestado de bom comportamento carcerário.' 
      },
      { 
        question: 'Quando é cabível a Revisão Criminal?', 
        answer: 'A Revisão Criminal é admitida a qualquer tempo após a condenação definitiva, quando a sentença for contrária ao texto expresso da lei, baseada em provas falsas ou surgirem novas provas de inocência.' 
      }
    ]
  }
];

export const faqData = [
  {
    question: 'O que fazer em caso de prisão em flagrante em Campinas ou região?',
    answer: 'Mantenha a calma, exerça seu direito constitucional ao silêncio e contate imediatamente o plantão criminal da Camargo Advocacia pelo WhatsApp (19) 99108-4001. A intervenção de um advogado criminalista nas primeiras horas garante que seus direitos fundamentais sejam respeitados e prepara a defesa para a audiência de custódia.'
  },
  {
    question: 'Como funciona o atendimento de plantão criminal 24 horas?',
    answer: 'Disponibilizamos atendimento ininterrupto 24 horas por dia, 7 dias por semana, inclusive feriados e madrugadas, para emergências penais como flagrantes, mandados de prisão, buscas e apreensões e audiências de custódia urgentes em toda a Região Metropolitana de Campinas.'
  },
  {
    question: 'Posso ser interrogado na delegacia sem a presença de um advogado?',
    answer: 'A Constituição Federal e o Estatuto da OAB asseguram que ninguém pode ser forçado a produzir prova contra si mesmo. É direito inalienável do cidadão ter a assistência de um advogado criminalista antes e durante qualquer oitiva policial.'
  },
  {
    question: 'Onde está situado o escritório em Campinas?',
    answer: 'Nosso escritório está localizado na Av. Campos Sales, 532 - Sala 61 - Centro, Campinas - SP, CEP 13010-080. O espaço oferece total privacidade, discrição e segurança para reuniões presenciais mediante agendamento.'
  },
  {
    question: 'O escritório atua fora de Campinas e nos Tribunais Superiores?',
    answer: 'Sim. Além de Campinas e cidades da Região Metropolitana (como Sumaré, Hortolândia, Paulínia, Americana, Indaiatuba e Valinhos), atuamos perante o Tribunal de Justiça de São Paulo (TJSP), TRF-3 e nos Tribunais Superiores em Brasília (STJ e STF).'
  }
];

export const pillarsData = [
  {
    quote: "A defesa da liberdade é o pilar inegociável do Estado Democrático de Direito. Não há justiça sem respeito irrestrito às garantias constitucionais.",
    role: "Compromisso Institucional",
    company: "Camargo Advocacia Criminal"
  },
  {
    quote: "Atuação combativa, sigilo profissional absoluto e dedicação artesanal a cada detalhe processual. Cada caso exige uma estratégia jurídica personalizada.",
    role: "Prática Defensiva",
    company: "Campinas e Tribunais Superiores"
  },
  {
    quote: "Pronto atendimento ininterrupto 24 horas: no processo penal, a agilidade na delegacia e na custódia define o futuro da liberdade do cliente.",
    role: "Plantão Emergencial 24h",
    company: "Região Metropolitana de Campinas"
  },
  {
    quote: "Excelência técnica em sustentações orais e recursos perante o Tribunal de Justiça, TRF-3, STJ e STF, combatendo ilegalidades e arbitrariedades.",
    role: "Advocacia Recursal",
    company: "Defesa Penal Estratégica"
  }
];
