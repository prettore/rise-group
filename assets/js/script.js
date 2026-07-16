// ============================================
// RISE Group Website - JavaScript
// ============================================

// Translations
const translations = {
    'pt-BR': {
        'hero.title': 'Sistemas Inteligentes e Resilientes para Ambientes Inteligentes',
        'hero.subtitle': 'Pesquisa de Excelência em IA, Comunicação, Cibersegurança e Sistemas Adaptativos',
        'btn.learn': 'Saiba Mais',
        'nav.about': 'Sobre',
        'nav.approach': 'Abordagem',
        'nav.competencies': 'Competências',
        'nav.team': 'Equipe',
        'nav.projects': 'Projetos',
        'nav.portfolio': 'Portfólio',
        'nav.contact': 'Contato',
        'btn.learn': 'Saiba Mais',
        'btn.projects': 'Projetos',
        'about.title': 'Sobre o RISE Group',
        'about.origin': 'Origem do Grupo',
        'about.origin_text': 'O RISE Group nasceu da ambição de seus líderes em conectar melhor a pesquisa de ponta com as necessidades e demandas das indústrias locais e nacionais. A ideia de criar um grupo de pesquisa com essa missão tornou-se realidade através do projeto SiR.AI (Sistemas Resilientes para Ambientes Inteligentes), aceito no Programa Conhecimento Brasil – Atração e Fixação de Talentos (CNPq/MCTI/FNDCT nº 21/2024).',
        'about.mission': 'Missão',
        'about.mission_text': 'Projetar sistemas inteligentes que compreendem seu contexto, adaptam seu comportamento e permanecem resilientes em ambientes dinâmicos, promovendo a transformação digital em setores estratégicos.',
        'about.vision': 'Visão',
        'about.vision_text': 'Ser referência em pesquisa e inovação em sistemas ciberfísicos inteligentes, contribuindo para soluções que aumentem a segurança, eficiência e sustentabilidade de infraestruturas críticas.',
        'about.members': 'Membros',
        'about.projects': 'Projetos Financiados',
        'about.funding': 'Financiamento',
        'about.institutions': 'Instituições',
        'about.publications': 'Artigos Científicos',
        'about.publications_title': 'Produção Científica',
        'about.publications_detail': '39 conferências internacionais e 6 periódicos científicos, totalizando 45 artigos científicos que demonstram o impacto e visibilidade da pesquisa do grupo na comunidade científica global.',
        'approach.title': 'Nossa Abordagem',
        'approach.subtitle': 'Como desenvolvemos soluções para os desafios da sociedade e da indústria',
        'approach.intro': 'O nome <strong>RISE</strong> reflete três conceitos fundamentais: <strong>Inteligência</strong>, <strong>Resiliência</strong> e <strong>Ambientes Inteligentes</strong>. Nossa abordagem organiza-se em quatro eixos que refletem como sistemas inteligentes realmente funcionam:',
        'approach.perception': 'Percepção e Contexto',
        'approach.perception_desc': 'Compreender o ambiente através de sensores, dados e análise contextual',
        'approach.decision': 'Decisão e Inteligência',
        'approach.decision_desc': 'Tomar decisões autônomas através de IA e aprendizado de máquina',
        'approach.connectivity': 'Conectividade e Resiliência',
        'approach.connectivity_desc': 'Comunicar e operar de forma resiliente em redes distribuídas',
        'approach.applications': 'Aplicações e Transformação Digital',
        'approach.applications_desc': 'Gerar impacto em aplicações reais e transformação digital',
        'approach.note': 'Esta organização acomoda naturalmente mobilidade, ciência de contexto, IA, segurança, comunicações e aplicações, sem tratar nenhuma tecnologia específica como um fim em si mesma. As tecnologias se transformam ou são substituídas, mas nossa missão continua.',
        'competencies.title': 'Competências, Tecnologias e Domínios',
        'competencies.subtitle': 'Uma abordagem híbrida para classificação e colaboração',
        'competencies.scientific': 'Competências Científicas',
        'competencies.ai': 'Inteligência Artificial e Sistemas Adaptativos',
        'competencies.communications': 'Comunicações e Sistemas Distribuídos',
        'competencies.cybersecurity': 'Cibersegurança e Sistemas Resilientes',
        'competencies.context': 'Ciência de Contexto e Computação Pervasiva',
        'competencies.technologies': 'Tecnologias Habilitadoras',
        'competencies.llm': 'LLMs e IA Generativa',
        'competencies.ml': 'Aprendizado de Máquina e Aprendizado por Reforço',
        'competencies.iot': 'IoT e Sistemas Ciberfísicos',
        'competencies.edge': 'Edge/Cloud Computing',
        'competencies.5g': '5G/6G e Redes Inteligentes',
        'competencies.digital_twins': 'Gêmeos Digitais',
        'competencies.vision': 'Visão Computacional',
        'competencies.agents': 'Agentes Inteligentes',
        'competencies.domains': 'Domínios de Aplicação',
        'competencies.agriculture': 'Agronegócio',
        'competencies.industry': 'Indústria 4.0',
        'competencies.mobility': 'Mobilidade Inteligente',
        'competencies.smart_cities': 'Cidades Inteligentes',
        'competencies.health': 'Saúde Digital',
        'competencies.energy': 'Energia e Infraestruturas Críticas',
        'competencies.logistics': 'Logística',
        'competencies.defense': 'Defesa',
        'competencies.example_title': 'Exemplo de Classificação',
        'competencies.example_project': 'Projeto: LLMs para automação e manutenção preditiva em fábricas inteligentes',
        'competencies.competencies_label': 'Competências:',
        'competencies.example_comp': 'IA e Sistemas Adaptativos; Ciência de Contexto',
        'competencies.technologies_label': 'Tecnologias:',
        'competencies.example_tech': 'LLMs, Edge Computing, Visão Computacional',
        'competencies.domains_label': 'Domínio:',
        'competencies.example_domain': 'Indústria 4.0',
        'team.title': 'Equipe',
        'team.subtitle': 'Pesquisadores e colaboradores',
        'team.leaders': 'Líderes',
        'team.paulo_expertise': 'Sistemas Distribuídos, Redes Inteligentes, Resiliência',
        'team.bruno_expertise': 'Redes, IoT, Sistemas Distribuídos',
        'team.clayson_expertise': 'Mobilidade Urbana, Sistemas Ciberfísicos, IA',
        'team.jose_expertise': 'Redes 5G, Orquestração, Programabilidade',
        'team.daniel_expertise': 'Redes Confiáveis, Segurança, Resiliência',
        'team.students': 'Estudantes e Pesquisadores',
        'team.students_count': '30+ membros entre doutores, mestrandos e graduandos',
        'team.students_desc': 'Nosso grupo conta com uma equipe diversa de pesquisadores em diferentes estágios de formação, com forte bolsificação (43% com bolsas CNPq/CAPES) e colaborações internacionais.',
        'team.institutions': 'Instituições Parceiras',
        'team.ufla': 'Universidade Federal de Lavras',
        'team.ufmg': 'Universidade Federal de Minas Gerais',
        'team.ufba': 'Universidade Federal da Bahia',
        'team.ita': 'Instituto Tecnológico de Aeronáutica',
        'team.usp': 'Universidade de São Paulo',
        'team.unibonn': 'Universidade de Bonn, Alemanha',
        'team.fraunhofer': 'Sociedade Fraunhofer, Alemanha',

        'portfolio.title': 'Casos de Uso e Portfólio',
        'portfolio.subtitle': 'Demonstrações práticas da nossa capacidade de desenvolver soluções inteligentes e resilientes',
        'portfolio.tag_mobility': 'Mobilidade',
        'portfolio.tag_ai': 'Inteligência Artificial',
        'portfolio.tag_sdn': 'SDN',
        'portfolio.tag_resilience': 'Resiliência',
        'portfolio.tag_iot': 'IoT',
        'portfolio.tag_cybersecurity': 'Cibersegurança',
        'portfolio.tag_llm': 'LLMs / IA Generativa',
        'portfolio.tag_networks': 'Redes',
        'portfolio.case1_title': 'Mobilidade Urbana e Tática',
        'portfolio.case1_desc': 'Modelagem e predição de padrões de mobilidade em ambientes urbanos e táticos utilizando dados espaço-temporais e semânticos. Nossas soluções permitem antecipar movimentos, otimizar rotas e melhorar a resiliência de sistemas de transporte e operações críticas em cenários dinâmicos.',
        'portfolio.case2_title': 'Redes Táticas Definidas por Software (SDTN)',
        'portfolio.case2_desc': 'Arquiteturas hierárquicas de controle para redes táticas utilizando o paradigma SDN (Software-Defined Networking). A solução permite gerenciamento dinâmico em múltiplos níveis (Global, Local e Operacional), garantindo resiliência, adaptabilidade e eficiência em ambientes de comunicação hostis e intermitentes.',
        'portfolio.case3_title': 'Internet das Coisas em Ambientes Críticos (IoMT)',
        'portfolio.case3_desc': 'Integração de dispositivos IoT em cenários críticos através de uma arquitetura em camadas (Percepção, Comunicação e Aplicação). O modelo suporta desde sensores veiculares e drones até sistemas de comando, focando em interoperabilidade, segurança em ambientes federados e consciência situacional avançada.',
        'portfolio.case4_title': 'Treinamento e Fine-Tuning de LLMs para Redes (GeNetE)',
        'portfolio.case4_desc': 'Desenvolvimento do framework GeNetE (Generative Network Environments) para especialização de Small Language Models (SLMs). A metodologia envolve três fases: Auto-instrução para extração de tarefas, Validação via emuladores de rede e Fine-tuning final. O resultado é um modelo especializado capaz de gerar configurações e gerenciar redes complexas com alta precisão.',
        'portfolio.paper_ref': 'Trabalho Relacionado:',
        'projects.title': 'Projetos Financiados',
        'projects.subtitle': 'Pesquisa em execução com financiamento de agências nacionais e internacionais',
        'projects.sirai_title': 'Sistemas Resilientes para Ambientes Inteligentes',
        'projects.sirai_desc': 'Abordando a Qualidade dos Dados e a Consciência de Contexto para ambientes inteligentes (cidades, transportes, indústria 5.0, agricultura).',
        'projects.porvir_title': 'Programmability, Orchestration, and Virtualization on 5G Networks',
        'projects.porvir_desc': 'Desenvolvimento de tecnologias para programabilidade, orquestração e virtualização em redes 5G, com vigência até janeiro de 2027.',
        'projects.rica_title': 'Redes Inteligentes Confiáveis e Adaptáveis',
        'projects.rica_desc': 'Pesquisa em confiabilidade e segurança em redes, incluindo redes TSN como mecanismo para prover confiabilidade.',
        'projects.mobility_short': 'Mobilidade',
        'projects.mobility_title': 'Caracterização, Modelagem e Predição da Mobilidade Urbana',
        'projects.mobility_desc': 'Utilizando dados espaço-temporais e semânticos para entender e prever movimentos humanos em contexto urbano.',
        'projects.sfi2_title': 'Fatiamento de Infraestruturas de Internet do Futuro',
        'projects.sfi2_desc': 'Integração de tecnologias emergentes (SDN, NFV, Cloud, IoT, 5G) com a Internet legada.',
        'projects.learn_more': 'Saiba Mais →',
        'projects.total_projects': 'Projetos em Execução',
        'projects.total_funding': 'Financiamento Total',
        'projects.funding_agencies': 'Agências de Fomento',
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Tem um desafio tecnológico? Traga seu problema. Juntos, podemos transformá-lo em um projeto de pesquisa e inovação.',
        'contact.email': 'Email',
        'contact.location': 'Localização',
        'contact.address': 'Departamento de Ciência da Computação<br>Universidade Federal de Lavras (UFLA)<br>Lavras, MG, Brasil',
        'contact.web': 'Website',
        'contact.name': 'Nome',
        'contact.email_input': 'Email',
        'contact.message': 'Mensagem',
        'contact.send': 'Enviar',
        'footer.desc': 'Sistemas Inteligentes e Resilientes para Ambientes Inteligentes',
        'footer.quick_links': 'Links Rápidos',
        'footer.about': 'Sobre',
        'footer.competencies': 'Competências',
        'footer.team': 'Equipe',
        'footer.projects': 'Projetos',
        'footer.follow': 'Siga-nos',
        'footer.copyright': '© 2024 RISE Group. Todos os direitos reservados.',
    },
    'en': {
        'hero.title': 'Resilient and Intelligent Systems for Smart Environments',
        'hero.subtitle': 'Excellence in Research on AI, Communication, Cybersecurity and Adaptive Systems',
        'btn.learn': 'Learn More',
        'nav.about': 'About',
        'nav.approach': 'Approach',
        'nav.competencies': 'Competencies',
        'nav.team': 'Team',
        'nav.projects': 'Projects',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'btn.learn': 'Learn More',
        'btn.projects': 'Projects',
        'about.title': 'About RISE Group',
        'about.origin': 'Group Origin',
        'about.origin_text': 'The RISE Group was born from the ambition of its leaders to better connect cutting-edge research with the needs and demands of local and national industries. The idea of creating a research group with this mission became reality through the SiR.AI project (Resilient Systems for Intelligent Environments), accepted in the Knowledge Brazil Program - Talent Attraction and Retention (CNPq/MCTI/FNDCT No. 21/2024).',
        'about.mission': 'Mission',
        'about.mission_text': 'To design intelligent systems that understand their context, adapt their behavior, and remain resilient in dynamic environments, promoting digital transformation in strategic sectors.',
        'about.vision': 'Vision',
        'about.vision_text': 'To be a reference in research and innovation in intelligent cyber-physical systems, contributing to solutions that increase the security, efficiency and sustainability of critical infrastructures.',
        'about.members': 'Members',
        'about.projects': 'Funded Projects',
        'about.funding': 'Funding',
        'about.institutions': 'Institutions',
        'about.publications': 'Scientific Articles',
        'about.publications_title': 'Scientific Production',
        'about.publications_detail': '39 international conferences and 6 scientific journals, totaling 45 scientific articles that demonstrate the impact and visibility of the group\'s research in the global scientific community.',
        'approach.title': 'Our Approach',
        'approach.subtitle': 'How we develop solutions for society and industry challenges',
        'approach.intro': 'The name <strong>RISE</strong> reflects three fundamental concepts: <strong>Intelligence</strong>, <strong>Resilience</strong>, and <strong>Smart Environments</strong>. Our approach is organized into four axes that reflect how intelligent systems actually work:',
        'approach.perception': 'Perception & Context',
        'approach.perception_desc': 'Understanding the environment through sensors, data and contextual analysis',
        'approach.decision': 'Decision & Intelligence',
        'approach.decision_desc': 'Making autonomous decisions through AI and machine learning',
        'approach.connectivity': 'Connectivity & Resilience',
        'approach.connectivity_desc': 'Communicating and operating resiliently in distributed networks',
        'approach.applications': 'Applications & Digital Transformation',
        'approach.applications_desc': 'Generating impact in real applications and digital transformation',
        'approach.note': 'This organization naturally accommodates mobility, context science, AI, security, communications and applications, without treating any specific technology as an end in itself. Technologies transform or are replaced, but our mission continues.',
        'competencies.title': 'Competencies, Technologies and Domains',
        'competencies.subtitle': 'A hybrid approach to classification and collaboration',
        'competencies.scientific': 'Scientific Competencies',
        'competencies.ai': 'Artificial Intelligence and Adaptive Systems',
        'competencies.communications': 'Communications and Distributed Systems',
        'competencies.cybersecurity': 'Cybersecurity and Resilient Systems',
        'competencies.context': 'Context Awareness and Pervasive Computing',
        'competencies.technologies': 'Enabling Technologies',
        'competencies.llm': 'LLMs and Generative AI',
        'competencies.ml': 'Machine Learning and Reinforcement Learning',
        'competencies.iot': 'IoT and Cyber-Physical Systems',
        'competencies.edge': 'Edge/Cloud Computing',
        'competencies.5g': '5G/6G and Intelligent Networks',
        'competencies.digital_twins': 'Digital Twins',
        'competencies.vision': 'Computer Vision',
        'competencies.agents': 'Intelligent Agents',
        'competencies.domains': 'Application Domains',
        'competencies.agriculture': 'Agribusiness',
        'competencies.industry': 'Industry 4.0',
        'competencies.mobility': 'Intelligent Mobility',
        'competencies.smart_cities': 'Smart Cities',
        'competencies.health': 'Digital Health',
        'competencies.energy': 'Energy and Critical Infrastructures',
        'competencies.logistics': 'Logistics',
        'competencies.defense': 'Defense',
        'competencies.example_title': 'Classification Example',
        'competencies.example_project': 'Project: LLMs for automation and predictive maintenance in smart factories',
        'competencies.competencies_label': 'Competencies:',
        'competencies.example_comp': 'AI and Adaptive Systems; Context Awareness',
        'competencies.technologies_label': 'Technologies:',
        'competencies.example_tech': 'LLMs, Edge Computing, Computer Vision',
        'competencies.domains_label': 'Domain:',
        'competencies.example_domain': 'Industry 4.0',
        'team.title': 'Team',
        'team.subtitle': 'Researchers and collaborators',
        'team.leaders': 'Leaders',
        'team.paulo_expertise': 'Distributed Systems, Intelligent Networks, Resilience',
        'team.bruno_expertise': 'Networks, IoT, Distributed Systems',
        'team.clayson_expertise': 'Urban Mobility, Cyber-Physical Systems, AI',
        'team.jose_expertise': '5G Networks, Orchestration, Programmability',
        'team.daniel_expertise': 'Reliable Networks, Security, Resilience',
        'team.students': 'Students and Researchers',
        'team.students_count': '30+ members including PhDs, master\'s students and undergraduates',
        'team.students_desc': 'Our group has a diverse team of researchers at different stages of training, with strong scholarship funding (43% with CNPq/CAPES scholarships) and international collaborations.',
        'team.institutions': 'Partner Institutions',
        'team.ufla': 'Federal University of Lavras',
        'team.ufmg': 'Federal University of Minas Gerais',
        'team.ufba': 'Federal University of Bahia',
        'team.ita': 'Aeronautics Institute of Technology',
        'team.usp': 'University of São Paulo',
        'team.unibonn': 'University of Bonn, Germany',
        'team.fraunhofer': 'Fraunhofer Society, Germany',

        'portfolio.title': 'Casos de Uso e Portfólio',
        'portfolio.subtitle': 'Demonstrações práticas da nossa capacidade de desenvolver soluções inteligentes e resilientes',
        'portfolio.tag_mobility': 'Mobilidade',
        'portfolio.tag_ai': 'Inteligência Artificial',
        'portfolio.tag_sdn': 'SDN',
        'portfolio.tag_resilience': 'Resiliência',
        'portfolio.tag_iot': 'IoT',
        'portfolio.tag_cybersecurity': 'Cibersegurança',
        'portfolio.tag_llm': 'LLMs / IA Generativa',
        'portfolio.tag_networks': 'Redes',
        'portfolio.case1_title': 'Mobilidade Urbana e Tática',
        'portfolio.case1_desc': 'Modelagem e predição de padrões de mobilidade em ambientes urbanos e táticos utilizando dados espaço-temporais e semânticos. Nossas soluções permitem antecipar movimentos, otimizar rotas e melhorar a resiliência de sistemas de transporte e operações críticas em cenários dinâmicos.',
        'portfolio.case2_title': 'Redes Táticas Definidas por Software (SDTN)',
        'portfolio.case2_desc': 'Arquiteturas hierárquicas de controle para redes táticas utilizando o paradigma SDN (Software-Defined Networking). A solução permite gerenciamento dinâmico em múltiplos níveis (Global, Local e Operacional), garantindo resiliência, adaptabilidade e eficiência em ambientes de comunicação hostis e intermitentes.',
        'portfolio.case3_title': 'Internet das Coisas em Ambientes Críticos (IoMT)',
        'portfolio.case3_desc': 'Integração de dispositivos IoT em cenários críticos através de uma arquitetura em camadas (Percepção, Comunicação e Aplicação). O modelo suporta desde sensores veiculares e drones até sistemas de comando, focando em interoperabilidade, segurança em ambientes federados e consciência situacional avançada.',
        'portfolio.case4_title': 'Treinamento e Fine-Tuning de LLMs para Redes (GeNetE)',
        'portfolio.case4_desc': 'Desenvolvimento do framework GeNetE (Generative Network Environments) para especialização de Small Language Models (SLMs). A metodologia envolve três fases: Auto-instrução para extração de tarefas, Validação via emuladores de rede e Fine-tuning final. O resultado é um modelo especializado capaz de gerar configurações e gerenciar redes complexas com alta precisão.',
        'portfolio.paper_ref': 'Trabalho Relacionado:',

        'portfolio.title': 'Use Cases and Portfolio',
        'portfolio.subtitle': 'Practical demonstrations of our ability to develop intelligent and resilient solutions',
        'portfolio.tag_mobility': 'Mobility',
        'portfolio.tag_ai': 'Artificial Intelligence',
        'portfolio.tag_sdn': 'SDN',
        'portfolio.tag_resilience': 'Resilience',
        'portfolio.tag_iot': 'IoT',
        'portfolio.tag_cybersecurity': 'Cybersecurity',
        'portfolio.tag_llm': 'LLMs / Generative AI',
        'portfolio.tag_networks': 'Networks',
        'portfolio.case1_title': 'Urban and Tactical Mobility',
        'portfolio.case1_desc': 'Modeling and prediction of mobility patterns in urban and tactical environments using spatiotemporal and semantic data. Our solutions allow anticipating movements, optimizing routes, and improving the resilience of transport systems and critical operations in dynamic scenarios.',
        'portfolio.case2_title': 'Software-Defined Tactical Networks (SDTN)',
        'portfolio.case2_desc': 'Hierarchical control architectures for tactical networks using the SDN (Software-Defined Networking) paradigm. The solution allows dynamic management at multiple levels (Global, Local, and Operational), ensuring resilience, adaptability, and efficiency in hostile and intermittent communication environments.',
        'portfolio.case3_title': 'Internet of Things in Critical Environments (IoMT)',
        'portfolio.case3_desc': 'Integration of IoT devices in critical scenarios through a layered architecture (Perception, Communication, and Application). The model supports everything from vehicular sensors and drones to command systems, focusing on interoperability, security in federated environments, and advanced situational awareness.',
        'portfolio.case4_title': 'Training and Fine-Tuning of LLMs for Networks (GeNetE)',
        'portfolio.case4_desc': 'Development of the GeNetE (Generative Network Environments) framework for specializing Small Language Models (SLMs). The methodology involves three phases: Self-instruction for task extraction, Validation via network emulators, and final Fine-tuning. The result is a specialized model capable of generating configurations and managing complex networks with high accuracy.',
        'portfolio.paper_ref': 'Related Work:',
        'projects.title': 'Funded Projects',
        'projects.subtitle': 'Research in progress with funding from national and international agencies',
        'projects.sirai_title': 'Resilient Systems for Intelligent Environments',
        'projects.sirai_desc': 'Addressing Data Quality and Context Awareness for intelligent environments (cities, transportation, Industry 5.0, agriculture).',
        'projects.porvir_title': 'Programmability, Orchestration, and Virtualization on 5G Networks',
        'projects.porvir_desc': 'Development of technologies for programmability, orchestration and virtualization in 5G networks, valid until January 2027.',
        'projects.rica_title': 'Intelligent Reliable and Adaptable Networks',
        'projects.rica_desc': 'Research on reliability and security in networks, including TSN networks as a mechanism to provide reliability.',
        'projects.mobility_short': 'Mobility',
        'projects.mobility_title': 'Characterization, Modeling and Prediction of Urban Mobility',
        'projects.mobility_desc': 'Using spatio-temporal and semantic data to understand and predict human movements in urban context.',
        'projects.sfi2_title': 'Slicing of Future Internet Infrastructures',
        'projects.sfi2_desc': 'Integration of emerging technologies (SDN, NFV, Cloud, IoT, 5G) with legacy Internet.',
        'projects.learn_more': 'Learn More →',
        'projects.total_projects': 'Projects in Progress',
        'projects.total_funding': 'Total Funding',
        'projects.funding_agencies': 'Funding Agencies',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Have a technological challenge? Bring your problem. Together, we can transform it into a research and innovation project.',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.address': 'Department of Computer Science<br>Federal University of Lavras (UFLA)<br>Lavras, MG, Brazil',
        'contact.web': 'Website',
        'contact.name': 'Name',
        'contact.email_input': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send',
        'footer.desc': 'Resilient and Intelligent Systems for Smart Environments',
        'footer.quick_links': 'Quick Links',
        'footer.about': 'About',
        'footer.competencies': 'Competencies',
        'footer.team': 'Team',
        'footer.projects': 'Projects',
        'footer.follow': 'Follow Us',
        'footer.copyright': '© 2024 RISE Group. All rights reserved.',
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'pt-BR';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    setupNavigation();
    setupFormSubmission();
    setupScrollAnimations();
});

// Language Management
function initializeLanguage() {
    updateLanguage(currentLanguage);
    updateLanguageButton();
}

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[lang][key];
        if (translation) {
            element.placeholder = translation;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateLanguageButton() {
    const langBtn = document.getElementById('langBtn');
    langBtn.textContent = currentLanguage === 'pt-BR' ? 'EN' : 'PT';
}

document.getElementById('langBtn').addEventListener('click', function() {
    const newLang = currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';
    updateLanguage(newLang);
    updateLanguageButton();
});

// Navigation
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
        }
    });
}

// Form Submission - Removed (no server backend for GitHub Pages)

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.stat-card, .team-member, .project-card, .competency-card').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event for navbar shadow
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});
