export interface WarEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  mediaPortrayal: string;
  propaganda: {
    sides: {
      name: string;
      slogans: string[];
      mediaOutlets: string[];
      techniques: string[];
    }[];
    analysis: string;
  };
  theories: {
    title: string;
    description: string;
    evidence?: string;
  }[];
  image: string;
  relatedNews?: {
    title: string;
    description: string;
    source: string;
    date?: string;
  }[];
  financialInfo?: {
    banks: {
      name: string;
      country: string;
      assets?: string;
      owners: {
        name: string;
        religion?: string;
        politicalAffiliation?: string;
      }[];
      side?: string;
    }[];
    financiers: {
      name: string;
      type: "government" | "corporation" | "individual" | "organization";
      amount?: string;
      currency?: string;
      side: string;
    }[];
    financialImpact: string;
  };
  casualties?: {
    military?: string;
    civilian?: string;
    total?: string;
  };
  keyFigures?: {
    name: string;
    role: string;
    side: string;
    fate?: string;
  }[];
}
export interface TimePeriod {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  color: string;
}

export const timePeriods: TimePeriod[] = [
  {
    id: "pre-napoleon",
    name: "Pré-Napoleônicas",
    startYear: 1700,
    endYear: 1803,
    color: "#D4AF37",
  },
  {
    id: "napoleon",
    name: "Era Napoleônica",
    startYear: 1804,
    endYear: 1815,
    color: "#5E1914",
  },
  {
    id: "19th-century",
    name: "Século XIX",
    startYear: 1816,
    endYear: 1899,
    color: "#3C4220",
  },
  {
    id: "world-wars",
    name: "Guerras Mundiais",
    startYear: 1900,
    endYear: 1945,
    color: "#85144b",
  },
  {
    id: "cold-war",
    name: "Guerra Fria",
    startYear: 1946,
    endYear: 1991,
    color: "#1A3A5F",
  },
  {
    id: "modern",
    name: "Era Moderna",
    startYear: 1992,
    endYear: 2025,
    color: "#2F3640",
  },
];

export const warEvents: WarEvent[] = [
  {
    id: "war-spanish-succession",
    year: 1701,
    title: "Guerra da Sucessão Espanhola",
    description:
      "Conflito internacional pela sucessão ao trono da Espanha após a morte do rei Carlos II sem herdeiros diretos.",
    mediaPortrayal:
      "Frequentemente retratada como uma guerra dinástica, a cobertura midiática histórica minimiza frequentemente os interesses econômicos e comerciais envolvidos.",
    theories: [
      "A teoria do 'equilíbrio de poder' sugere que as potências europeias entraram em guerra para evitar que a França se tornasse demasiado poderosa.",
      "Teorias alternativas sugerem que interesses comerciais nas Américas foram a verdadeira motivação por trás do conflito.",
    ],
    image: "placeholder.svg",
    financialInfo: {
      banks: [
        {
          name: "Bank of England",
          owners: [
            { name: "William Paterson", religion: "Protestant" },
            { name: "Michael Godfrey", religion: "Protestant" },
          ],
        },
        {
          name: "Banque Générale",
          owners: [{ name: "John Law", religion: "Catholic" }],
        },
      ],
      financiers: ["British Crown Treasury", "Dutch East India Company"],
    },
  },
  {
    id: "seven-years-war",
    year: 1756,
    title: "Guerra dos Sete Anos",
    description:
      "Conflito global envolvendo as principais potências europeias, muitas vezes considerada a primeira 'guerra mundial'. Envolveu a Grã-Bretanha e Prússia contra França, Áustria, Rússia e outros aliados, com batalhas ocorrendo na Europa, América do Norte, Índia e áreas coloniais.",
    mediaPortrayal:
      "Frequentemente simplificada como um conflito entre França e Inglaterra, quando na verdade envolveu múltiplos teatros de operação em todo o mundo. A mídia da época, através de panfletos e jornais, retratava o conflito de acordo com interesses nacionais específicos.",
    theories: [
      "A teoria da 'Revolução Militar' sugere que novas táticas e tecnologias testadas durante este conflito revolucionaram a forma como as guerras seriam travadas posteriormente",
      "Alguns historiadores acreditam que esta guerra estabeleceu as fundações para o posterior domínio britânico global",
      "A teoria da 'Conspiração Diplomática' sugere que a Prússia e a Grã-Bretanha planejaram deliberadamente provocar o conflito para redistribuir o poder na Europa",
      "Existem teorias sobre a influência maçônica na formação das alianças, especialmente considerando a ligação de Federico II da Prússia com a maçonaria",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Tratado de Paris (1763) estabelece nova ordem colonial global",
      "Prússia emerge como potência militar europeia após vitórias decisivas",
      "Dívidas francesas da guerra contribuem para posterior Revolução Francesa",
      "Massacre de Jumonville Glen marca início das hostilidades na América do Norte",
    ],
    financialInfo: {
      banks: [
        {
          name: "Bank of England",
          owners: [
            { name: "William Barrington", religion: "Protestant" },
            { name: "George Grenville", religion: "Anglican" },
          ],
        },
        {
          name: "Preußische Bank",
          owners: [{ name: "Johann Ernst Gotzkowsky", religion: "Protestant" }],
        },
        {
          name: "Banque Royale de France",
          owners: [
            { name: "Étienne de Silhouette", religion: "Catholic" },
            { name: "Henri Bertin", religion: "Catholic" },
          ],
        },
      ],
      financiers: [
        "Casa Rothschild (Londres e Frankfurt)",
        "Banqueiros Judeus de Amsterdam",
        "East India Company (financiamento britânico)",
        "Compagnie des Indes (financiamento francês)",
      ],
    },
  },
  {
    id: "american-revolution",
    year: 1775,
    title: "Revolução Americana",
    description:
      "Guerra de independência das colônias americanas contra o Império Britânico, resultando na formação dos Estados Unidos da América.",
    mediaPortrayal:
      "A narrativa tradicional enfatiza a luta pela liberdade e democracia, frequentemente omitindo o papel crucial dos interesses comerciais e financeiros na revolução.",
    theories: [
      "A teoria da 'conspiração maçônica' sugere que os Fundadores dos EUA, muitos deles maçons, planejaram a revolução como parte de um plano maior.",
      "Alguns historiadores argumentam que banqueiros europeus financiaram a revolução para enfraquecer o domínio britânico.",
      "Uma teoria sugere que a Casa de Rothschild lucrou com a guerra financiando ambos os lados do conflito.",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Morte suspeita de vários líderes revolucionários após a independência",
      "Documentos revelam conexões entre revolucionários e banqueiros europeus",
      "Papel da maçonaria na formação do governo americano",
    ],
    financialInfo: {
      banks: [
        {
          name: "Bank of North America",
          owners: [
            { name: "Robert Morris", religion: "Protestant" },
            { name: "Thomas Willing", religion: "Quaker" },
          ],
        },
        {
          name: "Bank of England",
          owners: [{ name: "Sir Richard Neave", religion: "Anglican" }],
        },
      ],
      financiers: [
        "Casa Rothschild",
        "Banqueiros holandeses",
        "Mercadores franceses",
        "Haym Solomon (financista americano)",
      ],
    },
  },
  {
    id: "french-revolution",
    year: 1789,
    title: "Revolução Francesa",
    description:
      "Período revolucionário que transformou a França de uma monarquia absoluta em uma república, com profundas implicações para toda a Europa.",
    mediaPortrayal:
      "A cobertura histórica tende a focar na violência e no Terror, frequentemente negligenciando as complexas manobras financeiras e políticas nos bastidores.",
    theories: [
      "A teoria da 'Conspiração Iluminati' sugere que sociedades secretas orquestraram a revolução para derrubar as monarquias europeias",
      "Alguns historiadores argumentam que a crise financeira foi deliberadamente criada por banqueiros para provocar a revolução",
      "Teoria sobre o papel dos maçons na organização do levante popular",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Morte misteriosa de importantes figuras aristocráticas durante o Terror",
      "Conexões entre revolucionários e banqueiros suíços reveladas",
      "Papel dos assignats na desestabilização econômica",
    ],
    financialInfo: {
      banks: [
        {
          name: "Caisse d'Escompte",
          owners: [{ name: "Jacques Necker", religion: "Protestant" }],
        },
        {
          name: "Banque de France",
          owners: [{ name: "Napoleon Bonaparte", religion: "Catholic" }],
        },
      ],
      financiers: [
        "Banqueiros suíços",
        "Casa Rothschild",
        "Banqueiros holandeses",
      ],
    },
  },
  {
    id: "napoleonic-wars",
    year: 1803,
    title: "Guerras Napoleônicas",
    description:
      "Série de conflitos liderados por Napoleão Bonaparte que remodelaram o mapa político europeu e estabeleceram novas dinâmicas de poder global.",
    mediaPortrayal:
      "As narrativas variam drasticamente dependendo da perspectiva nacional, com diferentes interpretações sobre o papel de Napoleão e as verdadeiras motivações das guerras.",
    theories: [
      "Teoria sobre o envenenamento deliberado de Napoleão em Santa Helena por agentes britânicos",
      "Especulações sobre acordos secretos entre Napoleão e banqueiros europeus",
      "Teoria sobre a manipulação do mercado de ouro durante as guerras",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Mortes suspeitas de generais franceses durante a campanha da Rússia",
      "Conexões financeiras entre Napoleão e banqueiros internacionais reveladas",
      "Papel do Banco da Inglaterra no financiamento da coalizão anti-francesa",
    ],
    financialInfo: {
      banks: [
        {
          name: "Banque de France",
          owners: [
            { name: "Napoleon Bonaparte", religion: "Catholic" },
            { name: "Martin-Michel-Charles Gaudin", religion: "Catholic" },
          ],
        },
        {
          name: "Bank of England",
          owners: [{ name: "Henry Thornton", religion: "Protestant" }],
        },
      ],
      financiers: [
        "Nathan Rothschild",
        "Ouvrard Banking House",
        "Hope & Co. Amsterdam",
        "Baring Brothers",
      ],
    },
  },
  {
    id: "crimean-war",
    year: 1853,
    title: "Guerra da Crimeia",
    description:
      "Conflito entre o Império Russo e uma aliança composta pelo Império Otomano, França, Reino Unido e Sardenha.",
    mediaPortrayal:
      "A primeira guerra fotografada extensivamente, as imagens de Roger Fenton influenciaram a percepção pública, embora muitas fossem encenadas.",
    theories: [
      "A teoria do 'Grande Jogo' sugere que a guerra foi parte de uma competição estratégica entre Grã-Bretanha e Rússia pelo controle da Ásia Central.",
      "Alguns historiadores argumentam que a guerra poderia ter sido evitada através de melhores canais diplomáticos.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "american-civil-war",
    year: 1861,
    title: "Guerra Civil Americana",
    description:
      "Conflito entre os estados do Norte (União) e os estados separatistas do Sul (Confederação).",
    mediaPortrayal:
      "A guerra é frequentemente simplificada como uma luta contra a escravidão, quando na realidade envolvia também questões de direitos dos estados e interesses econômicos.",
    theories: [
      "A teoria da 'causa perdida' retrata o Sul como nobre defensor de seus direitos contra o agressor nortenho, minimizando o papel da escravidão.",
      "Alguns propõem que Abraham Lincoln manipulou eventos para provocar o Sul a atacar primeiro.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "spanish-american-war",
    year: 1898,
    title: "Guerra Hispano-Americana",
    description:
      "Conflito entre os Estados Unidos e a Espanha que resultou na independência de Cuba e na aquisição americana de territórios no Pacífico.",
    mediaPortrayal:
      "Os jornais de 'imprensa amarela' de William Randolph Hearst e Joseph Pulitzer inflamaram o sentimento público com relatos sensacionalistas sobre atrocidades espanholas.",
    theories: [
      "A teoria da 'explosão deliberada' do USS Maine sugere que os americanos sabotaram seu próprio navio para justificar a guerra.",
      "Alguns argumentam que toda a guerra foi orquestrada para expandir o império americano.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "world-war-1",
    year: 1914,
    title: "Primeira Guerra Mundial",
    description:
      "Conflito global centrado na Europa que envolveu todas as grandes potências mundiais.",
    mediaPortrayal:
      "Inicialmente retratada como uma guerra cavalheiresca e heroica, a propaganda evoluiu para mostrar o horror das trincheiras conforme o conflito se prolongava.",
    theories: [
      "A teoria da 'culpa alemã' atribui toda a responsabilidade pela guerra à Alemanha, ignorando as tensões imperialistas mais amplas.",
      "Teorias revisionistas sugerem que banqueiros internacionais orquestraram a guerra para lucrar com empréstimos aos governos.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "russian-civil-war",
    year: 1917,
    title: "Guerra Civil Russa",
    description:
      "Conflito multi-faccional após a Revolução Russa entre o Exército Vermelho bolchevique e as forças anti-comunistas (Exército Branco).",
    mediaPortrayal:
      "A representação ocidental contemporânea era fortemente anti-bolchevique, enquanto a história soviética posterior glorificava os revolucionários.",
    theories: [
      "A teoria da 'conspiração judaico-bolchevique' foi promovida pelos opositores dos soviéticos, alegando que a revolução era parte de um complô judeu internacional.",
      "Historiadores debatem se a intervenção ocidental prolongou o conflito ou ajudou a consolidar o poder bolchevique ao criar um inimigo externo.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "world-war-2",
    year: 1939,
    title: "Segunda Guerra Mundial",
    description:
      "Conflito global que envolveu a maioria das nações do mundo, incluindo todas as grandes potências.",
    mediaPortrayal:
      "Frequentemente descrita como a 'guerra boa' contra o mal absoluto, a narrativa dominante simplifica as complexidades morais e as alianças pragmáticas do conflito.",
    theories: [
      "Teorias conspiratórias sugerem que Roosevelt sabia do ataque a Pearl Harbor antecipadamente e permitiu que acontecesse para justificar a entrada americana na guerra.",
      "Alguns historiadores revisionistas questionam se o bombardeio atômico do Japão foi necessário ou se foi mais uma demonstração de poder para a União Soviética.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "korean-war",
    year: 1950,
    title: "Guerra da Coreia",
    description:
      "Conflito entre a Coreia do Norte apoiada pelos soviéticos e chineses e a Coreia do Sul apoiada pelos EUA e ONU.",
    mediaPortrayal:
      "Às vezes chamada de 'guerra esquecida', recebeu menos atenção da mídia que a Segunda Guerra Mundial ou o Vietnã, apesar de sua importância na formação da Guerra Fria.",
    theories: [
      "Alguns argumentam que os EUA deliberadamente permitiram que a Coreia do Norte invadisse o Sul para justificar um aumento nos gastos militares após a Segunda Guerra Mundial.",
      "Historiadores debatem se a guerra poderia ter sido evitada através de uma diplomacia mais eficaz.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "vietnam-war",
    year: 1955,
    title: "Guerra do Vietnã",
    description:
      "Conflito prolongado no Vietnã, Laos e Camboja entre forças comunistas e anticomunistas.",
    mediaPortrayal:
      "A primeira 'guerra televisada', com imagens gráficas chegando às casas americanas, mudando a opinião pública contra o conflito.",
    theories: [
      "O incidente do Golfo de Tonkin, usado para justificar o envolvimento direto dos EUA, é considerado por muitos historiadores como fabricado ou exagerado.",
      "Alguns argumentam que a guerra foi prolongada deliberadamente para beneficiar o complexo industrial-militar.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "afghan-soviet-war",
    year: 1979,
    title: "Guerra Soviético-Afegã",
    description:
      "Conflito de nove anos entre forças soviéticas e insurgentes mujahideen no Afeganistão.",
    mediaPortrayal:
      "Os mujahideen foram retratados na mídia ocidental como 'lutadores pela liberdade', mas esta narrativa mudou drasticamente após o surgimento da Al-Qaeda e do Talibã.",
    theories: [
      "A teoria do 'armadilha afegã' sugere que os EUA deliberadamente encorajaram a URSS a invadir o Afeganistão para criar seu próprio 'Vietnã'.",
      "Alguns argumentam que a guerra acelerou o colapso da União Soviética devido ao custo financeiro e político.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "gulf-war",
    year: 1990,
    title: "Guerra do Golfo",
    description:
      "Conflito entre o Iraque e uma coalizão internacional liderada pelos EUA após a invasão do Kuwait pelo Iraque.",
    mediaPortrayal:
      "A primeira 'guerra em tempo real', com a CNN transmitindo 24 horas por dia, criando uma nova era de cobertura de guerra midiática.",
    theories: [
      "A teoria do 'bebê incubadora' refere-se a um relato fabricado sobre soldados iraquianos matando bebês em incubadoras no Kuwait, usado para ganhar apoio público para a guerra.",
      "Alguns argumentam que os EUA enganaram Saddam Hussein, sugerindo que não interviriam se ele invadisse o Kuwait.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "yugoslavia-wars",
    year: 1991,
    title: "Guerras Iugoslavas",
    description:
      "Série de conflitos étnicos e guerras de independência que levaram à dissolução da Iugoslávia.",
    mediaPortrayal:
      "A cobertura midiática frequentemente simplificou os conflitos em termos étnicos, omitindo os complexos fatores políticos e econômicos.",
    theories: [
      "Alguns argumentam que potências ocidentais deliberadamente encorajaram a desintegração da Iugoslávia para enfraquecer um estado socialista independente.",
      "Teorias contestam a natureza e escala de certos massacres, como Srebrenica, embora evidências substanciais os confirmem.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "war-on-terror",
    year: 2001,
    title: "Guerra ao Terror",
    description:
      "Campanha global liderada pelos EUA após os ataques de 11 de setembro, incluindo guerras no Afeganistão e Iraque.",
    mediaPortrayal:
      "A mídia ocidental adotou amplamente a narrativa oficial do 'choque de civilizações', enquanto mídias árabes frequentemente enquadraram como imperialismo americano.",
    theories: [
      "Teorias da conspiração sobre o 11 de setembro sugerem envolvimento ou conhecimento prévio do governo dos EUA, embora refutadas por evidências.",
      "A afirmação de que o Iraque possuía armas de destruição em massa, usada para justificar a invasão de 2003, provou-se falsa.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "arab-spring",
    year: 2010,
    title: "Primavera Árabe e Conflitos Resultantes",
    description:
      "Série de protestos, levantes e guerras civis no Oriente Médio e Norte da África, incluindo a Guerra Civil Síria.",
    mediaPortrayal:
      "Inicialmente retratada como uma onda democrática, a narrativa midiática tornou-se mais complexa conforme os conflitos evoluíram, especialmente na Síria e Líbia.",
    theories: [
      "Algumas narrativas sugerem que potências ocidentais orquestraram os levantes para reorganizar o Oriente Médio conforme seus interesses.",
      "Outros argumentam que redes sociais como Twitter e Facebook foram instrumentais em facilitar os protestos, levando à teoria da 'Revolução Twitter'.",
    ],
    image: "placeholder.svg",
  },
  {
    id: "titanic-conspiracy",
    year: 1912,
    title: "Naufrágio do Titanic e Morte de John Jacob Astor IV",
    description:
      "O naufrágio do Titanic resultou na morte de John Jacob Astor IV, um dos homens mais ricos do mundo e importante opositor à criação do Federal Reserve.",
    mediaPortrayal:
      "A mídia da época focou principalmente no aspecto trágico do naufrágio, mas pouca atenção foi dada às mortes específicas de figuras importantes que se opunham à criação do Federal Reserve americano.",
    theories: [
      "Teoria sugere que o naufrágio foi orquestrado para eliminar importantes opositores do Federal Reserve, incluindo John Jacob Astor IV, Benjamin Guggenheim e Isidor Straus.",
      "Alguns teóricos argumentam que o Titanic foi trocado por seu navio irmão Olympic em uma fraude de seguro elaborada.",
      "Documentos sugerem que JP Morgan, que cancelou sua viagem no último minuto, pode ter tido conhecimento prévio do desastre.",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "JP Morgan cancela viagem no Titanic no último momento",
      "Três importantes banqueiros opositores do Federal Reserve morrem no naufrágio",
      "Federal Reserve é estabelecido um ano após o naufrágio",
    ],
    financialInfo: {
      banks: [
        {
          name: "JP Morgan & Co.",
          owners: [{ name: "J.P. Morgan", religion: "Episcopal" }],
        },
        {
          name: "Astor Trust Company",
          owners: [{ name: "John Jacob Astor IV", religion: "Episcopal" }],
        },
      ],
      financiers: [
        "White Star Line",
        "International Mercantile Marine Co. (controlada por JP Morgan)",
        "Lloyd's of London (seguradora)",
      ],
    },
  },
  {
    id: "lincoln-assassination",
    year: 1865,
    title: "Assassinato de Abraham Lincoln",
    description:
      "O presidente Abraham Lincoln foi assassinado por John Wilkes Booth no Teatro Ford, durante um período crucial da reconstrução pós-Guerra Civil.",
    mediaPortrayal:
      "Os jornais da época retrataram o assassinato como um ato isolado de um ator sulista fanático, embora evidências posteriores sugiram uma conspiração mais ampla.",
    theories: [
      "Teoria sugere envolvimento de banqueiros internacionais devido à oposição de Lincoln ao sistema bancário centralizado",
      "Evidências apontam para uma conspiração maior envolvendo membros do governo confederado",
      "Alguns historiadores argumentam que Lincoln estava prestes a implementar um novo sistema monetário que ameaçava interesses bancários",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Vice-presidente Johnson assume presidência após assassinato",
      "Conspiradores são capturados e executados",
      "Booth é morto em perseguição policial",
    ],
    financialInfo: {
      banks: [
        {
          name: "Bank of the Republic",
          owners: [{ name: "Jay Cooke", religion: "Protestant" }],
        },
      ],
      financiers: ["Northern Banking interests", "European Banking Houses"],
    },
  },
  {
    id: "ukraine-conflict",
    year: 2014,
    title: "Conflito na Ucrânia",
    description:
      "Conflito em andamento que começou com a anexação da Crimeia pela Rússia e escalou para uma guerra em grande escala em 2022, resultando em significativas mudanças geopolíticas e mortes de importantes figuras.",
    mediaPortrayal:
      "A guerra de informação tornou-se tão crucial quanto o conflito físico, com narrativas vastamente diferentes apresentadas pela mídia ocidental e russa.",
    theories: [
      "Narrativas competitivas sobre as origens do conflito incluem teorias sobre expansão da OTAN e interesses energéticos",
      "Teorias sobre o papel dos oligarcas ucranianos e russos no conflito",
      "Especulações sobre mortes suspeitas de oligarcas russos durante o conflito",
      "Teorias sobre o envolvimento de potências ocidentais na mudança de regime de 2014",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Morte suspeita de vários oligarcas russos desde o início da guerra",
      "Mudanças significativas no controle de empresas energéticas ucranianas",
      "Sanções ocidentais afetam estrutura bancária russa",
    ],
    financialInfo: {
      banks: [
        {
          name: "Sberbank",
          owners: [{ name: "Governo Russo", religion: "Estado" }],
        },
        {
          name: "PrivatBank",
          owners: [{ name: "Estado Ucraniano", religion: "Estado" }],
        },
      ],
      financiers: [
        "Banco Mundial",
        "FMI",
        "Bancos de Desenvolvimento Europeus",
        "BRICS New Development Bank",
      ],
    },
  },
  {
    id: "ai-wars",
    year: 2023,
    title: "Conflitos Híbridos e Guerra de Informação",
    description:
      "Nova era de conflitos caracterizados por guerra cibernética, operações de informação e uso de IA em estratégias militares até 2025.",
    mediaPortrayal:
      "A cobertura midiática oscila entre alarmismo sobre 'guerras de IA' e ceticismo quanto ao impacto real da tecnologia nos conflitos modernos.",
    theories: [
      "Teoria sobre o desenvolvimento secreto de IAs militares autônomas",
      "Especulações sobre manipulação de mercados financeiros por IAs",
      "Teoria sobre o uso de deep fakes em operações de desestabilização global",
    ],
    image: "placeholder.svg",
    relatedNews: [
      "Vazamento de dados massivo afeta sistemas militares globais",
      "IA militar autônoma toma decisões sem supervisão humana",
      "Criptomoedas utilizadas para financiar operações secretas",
    ],
    financialInfo: {
      banks: [
        {
          name: "Digital Reserve Bank",
          owners: [{ name: "Consórcio de IA", religion: "N/A" }],
        },
        {
          name: "Global Cyber Bank",
          owners: [{ name: "Tech Consortium", religion: "N/A" }],
        },
      ],
      financiers: [
        "Empresas de tecnologia",
        "Fundos soberanos digitais",
        "Consórcios de IA",
        "Venture Capital em Defesa",
      ],
    },
  },
];
