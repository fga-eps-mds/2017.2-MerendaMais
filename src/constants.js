// appIdentifier number to use in Nuvem Cívica.
export const APP_IDENTIFIER = 463;

export const APP_TOKEN = 'v1_8841323707E44F8131B11AF90E417AA5732CACA7AD8A8842D3492C6C76F9DEAF7CCC9398BDE13AD7CE493A87821514E64B8E43DF383711C4B61165B7CD867C5314764244486CBF5BEFC37F2A73822583904BE3615B6CE11AD56192C83965F1E0EA45E94B32B0176B57705CFDC21DBDF677C05B583F5D6883501605CE45C66AEB30FD7FBB65BADF6B7E5B595753E8836C894FCE8184739D9EC3EE889CFBA4E039223A30AFEC658C9A6E0EE6966142F52C5AE3F9746B4258FE78ABD518EA28F5387746F6166D3CE302C5A6667335FF269E997A106B2C93110146F624B279EBFBA00F51D91F868CF095DE2FA73730845D285B8701EAD7D4366F81040E89D14B71821E6C967BF843F245E8425C382F7D6571840E69985B4CAED67E5B595753E8836C';


// Posting type code to use in Nuvem Cívica.
export const POSTING_TYPE_CODE = 381;

// Profile type code to use in Nuvem Cívica.
export const PROFILE_TYPE_CODE = 239;

// Link (GET) to authenticate user at Nuvem Cívica and get his Token.
export const AUTHENTICATE_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/autenticar';

// Default Link to manipulate users at Nuvem Cívica.
export const DEFAULT_USER_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/';

// Link to access posts at Nuvem Cívica.
export const POSTS_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/';

// Link to get schools at Nuvem Cívica.
export const SCHOOL_ENDPOINT = 'http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas';

// Default Link to manipulate a group at Nuvem Cívica.
export const DEFAULT_GROUP_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos/';

// Counselor segment options.
export const EXECUTIVE_POWER = 'Poder executivo';
export const EDUCATION_WORKERS = 'Trabalhadores da educação';
export const STUDENT_PARENTS = 'Pais de alunos';
export const CIVILIAN_ENTITIES = 'Entidades civis';

// Counselor type options.
export const TITULAR_COUNSELOR = 'Titular';
export const SURROGATE_COUNSELOR = 'Suplente';

// Counselor CAE_Type options.
export const MUNICIPAL_COUNSELOR_CAE = 'Municipal';
export const STATE_COUNSELOR_CAE = 'Estadual';

// Counselor role options.
export const PRESIDENT_COUNSELOR = 'Presidente';
export const COMMON_COUNSELOR = 'Conselheiro';

// Alert messages and titles
export const REGISTER_FAIL_TITLE = 'FALHA NO CADASTRO';
export const USER_ALREADY_REGISTER_IN_APPLICATION = '\nUsuário já cadastrado na Aplicação.';
export const USER_JUST_ALREADY_REGISTER_IN_NUVEM = '\nUsuário já possui um cadastro na Nuvem Cívica ou em alguma aplicação que a utiliza.\n\nCaso queira utilizar esse e-mail, insira a senha utilizada para realizar o Login na Nuvem Cívica com o e-mail informado.\n\nCaso contrário cadastre-se com o outro e-mail não vinculado a Nuvem Cívica ainda.';
export const SEND_EMAIL_ALERT_TITLE = 'Agendamento Realizado';
export const SEND_EMAIL_ALERT_BODY = 'Deseja convidar um agente para essa visita? Se a resposta for sim, seu aplicativo de email padrão será aberto com as informações já preenchidas. Caso não tenha um aplicativo de email, será necessário baixar algum.';

// Toast messages
export const LOGIN_PASSWORD_ERROR = 'Usuário não cadastrado na aplicação ou a senha está errada.';
export const LOGIN_PROFILE_ERROR = 'Usuário não cadastrado na aplicação ou perfil não encontrado.';
export const LOGIN_SUCCEED = 'Login realizado com sucesso!';
export const REGISTER_SUCCEED = 'Cadastro realizado com sucesso!';
export const REGISTER_NUVEM_ERROR = 'Usuário não cadastrado na Nuvem ou perfil não existe.';
export const EDIT_SUCCEED = 'Dados alterados com sucesso!';
export const INTERNAL_ERROR = 'Erro interno. Tente novamente mais tarde!';

export const SCHOOL_NOT_FOUND = 'Nenhuma escola encontrada! Verifique se foi digitado corretamente.';
export const ERROR_FIND_SCHOOL = 'Erro ao procurar escola. Tente novamente mais tarde.';
export const COUNSELOR_DISABLED_SUCCESS = 'Conselheiro desassociado com sucesso!';
export const COUNSELOR_DISABLED_FAILED = 'Erro ao desassociar conselheiro da aplicação!';
export const COUNSELOR_GROUP_DISABLED_SUCCESS = 'Conselheiro apagado do grupo (CAE) com sucesso!';
export const COUNSELOR_GROUP_DISABLED_FAILED = 'Não foi possível apagar conselheiro do grup (CAE).';

// Chapters of Legislation from Resolução n°26
export const CHAPTER_I = 'DAS DIRETRIZES E DO OBJETIVO DO PROGRAMA\n ' +
                         '\nArt. 2º São diretrizes da Alimentação Escolar:\n ' +
                         '\nI - o emprego da alimentação saudável e adequada, compreendendo o uso de alimentos variados, seguros, que respeitem a cultura, as tradições e os hábitos alimentares saudáveis, contribuindo para o crescimento e o desenvolvimento dos alunos e para a melhoria do rendimento escolar, em conformidade com a sua faixa etária e seu estado de saúde, inclusive dos que necessitam de atenção específica;\n ' +
                         '\nII - a inclusão da educação alimentar e nutricional no processo de ensino e aprendizagem, que perpassa pelo currículo escolar, abordando o tema alimentação e nutrição e o desenvolvimento de práticas saudáveis de vida na perspectiva da segurança alimentar e nutricional;\n ' +
                         '\nIII - a universalidade do atendimento aos alunos matriculados na rede pública de educação básica;\n ' +
                         '\nIV - a participação da comunidade no controle social, no acompanhamento das ações realizadas pelos Estados, pelo Distrito Federal e pelos Municípios para garantir a oferta da alimentação escolar saudável e adequada;\n ' +
                         '\nV - o apoio ao desenvolvimento sustentável, com incentivos para a aquisição de gêneros alimentícios diversificados, produzidos em âmbito local e preferencialmente pela agricultura familiar e pelos empreendedores familiares rurais, priorizando as comunidades tradicionais indígenas e de remanescentes de quilombos; e\n ' +
                         '\nVI - o direito à alimentação escolar, visando garantir a segurança alimentar e nutricional dos alunos, com acesso de forma igualitária, respeitando as diferenças biológicas entre idades e condições de saúde dos alunos que necessitem de atenção específica e aqueles que se encontrem em vulnerabilidade social.\n ' +
                         '\nArt. 3º O PNAE tem por objetivo contribuir para o crescimento e o desenvolvimento biopsicossocial, a aprendizagem, o rendimento escolar e a formação de práticas alimentares saudáveis dos alunos, por meio de ações de educação alimentar e nutricional e da oferta de refeições que cubram as suas necessidades nutricionais durante o período letivo.\n ' +
                         '\nParágrafo único. As ações de educação alimentar e nutricional serão de responsabilidade do ente público educacional.\n';

export const CHAPTER_II = 'DOS USUÁRIOS DO PROGRAMA\n ' +
                          '\nArt. 4º Serão atendidos pelo PNAE os alunos matriculados na educação básica das redes públicas federal, estadual, distrital e municipal, em conformidade com o Censo Escolar do exercício anterior realizado pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira do Ministério da Educação - INEP/MEC.\n ' +
                          '\n§1º Para os fins deste artigo, serão considerados como integrantes das redes estadual, municipal e distrital os alunos cadastrados no Censo Escolar do ano anterior ao do atendimento e matriculados na:\n ' +
                          '\nI - educação básica das entidades filantrópicas ou por elas mantidas, inclusive as de educação especial e confessionais;\n ' +
                          '\nII - educação básica das entidades comunitárias, conveniadas com o poder público.\n ' +
                          '\n§2º Os alunos de que trata o inciso I do parágrafo anterior, matriculados na educação básica, serão atendidos pelo PNAE, mediante a comprovação da certificação da entidade como beneficente de assistência social da área de educação, conforme dispõe o art. 24 do Decreto nº 7.237, de 20 de julho de 2010.\n ' +
                          '\n§3º As entidades de que tratam os incisos I e II serão atendidas pelo PNAE mediante a declaração, no Censo Escolar, do interesse de oferecer a alimentação escolar gratuita.\n ' +
                          '\n§4º Serão atendidos duplamente, no âmbito do PNAE, os alunos matriculados no ensino regular público que tiverem matrícula concomitante em instituição de Atendimento Educacional Especializado- AEE, desde que em turno distinto.\n ';

export const CHAPTER_III = 'DOS PARTICIPANTES DO PROGRAMA\n ' +
                          '\nArt. 5º Participam do PNAE:\n ' +
                          '\nI - o Fundo Nacional de Desenvolvimento da Educação - FNDE: autarquia vinculada ao Ministério da Educação - MEC, responsável pela coordenação do PNAE, pelo estabelecimento das normas gerais de planejamento, execução, controle, monitoramento e avaliação do Programa, bem como pela transferência dos recursos financeiros;\n ' +
                          '\nII - a Entidade Executora - EEx.: Estado, Município, Distrito Federal e escolas federais, como responsável pela execução do PNAE, inclusive pela utilização e complementação dos recursos financeiros transferidos pelo FNDE, pela prestação de contas do Programa, pela oferta de alimentação nas escolas por, no mínimo 800 horas/aula, distribuídas em, no mínimo, 200 (duzentos) dias de efetivo trabalho escolar, e pelas ações de educação alimentar e nutricional a todos os alunos matriculados;\n ' +
                          '\nIII - o Conselho de Alimentação Escolar - CAE: órgão colegiado de caráter fiscalizador, permanente, deliberativo e de assessoramento, instituído no âmbito dos Estados, do Distrito Federal e dos Municípios; e\n ' +
                          '\nIV - a Unidade Executora - UEx: entidade privada sem fins lucrativos, representativa da comunidade escolar, responsável pelo recebimento dos recursos financeiros transferidos pela EEx. em favor da escola que representa, bem como pela prestação de contas do Programa ao órgão que a delegou.\n ' +
                          '\na) considera-se, também, como UEx. aquela constituída para execução do Programa Dinheiro Direto na Escola - PDDE, de que trata a Lei nº11.947, de 16 de junho de 2009.\n ';

export const CHAPTER_IV = 'DAS FORMAS DE GESTÃO\n ' +
                          '\nArt. 6º Entende-se como delegação de rede a transferência da responsabilidade do Estado aos Municípios pelo atendimento aos alunos matriculados nos estabelecimentos estaduais de ensino localizados nas suas respectivas áreas de jurisdição no âmbito do PNAE.\n ' +
                          '\nNo caso dessa delegação, o Estado autoriza expressamente o repasse direto ao Município, por parte do FNDE, da correspondente parcela de recursos financeiros para a oferta de alimentação nas escolas.\n ' +
                          '\n§1º A autorização de que trata o caput será encaminhada pelo Estado ao FNDE, com a devida anuência do Município (Anexo I), no mês de janeiro do mesmo ano em que se der o atendimento.\n ' +
                          '\n§2º Em casos excepcionais, é facultado ao FNDE revisar as delegações de rede fora do prazo acima estipulado.\n ' +
                          '\n§3º A Secretaria Estadual de Educação que delegar a rede permanece responsável:\n ' +
                          '\nI - pelas ações de educação alimentar e nutricional;\n ' +
                          '\nII - pela estrutura física das escolas;\n ' +
                          '\nIII - pelos recursos humanos da unidade de alimentação escolar; e\n ' +
                          '\nIV - por assegurar que a oferta da alimentação nas escolas se dê em conformidade com as necessidades nutricionais dos alunos, inclusive complementando a aquisição de gêneros alimentícios com recursos financeiros próprios, caso necessário.\n ' +
                          '\n§4º É de competência do CAE do município exercer suas atribuições nas escolas de educação básica estadual, localizadas em seu limite territorial, permanecendo o CAE estadual responsável pelo acompanhamento das atividades previstas nos incisos I, II e III do parágrafo anterior.\n ' +
                          '\n§5º Para atender aos parâmetros numéricos e às demais ações previstas na Resolução do Conselho Federal de Nutrição - CFN nº 465, de 23 de agosto de 2010, o Estado e o Município poderão atuar em regime de colaboração.\n ' +
                          '\nArt. 7º A EEx. que atender aos alunos de que trata o art. 4º desta Resolução e que transferir as suas escolas para outra rede de ensino, após a publicação do Censo Escolar do ano anterior ao do atendimento, fica obrigada a repassar os recursos financeiros recebidos à conta do PNAE para a EEx. que a receber, em valor correspondente ao número de alunos transferidos, mediante convênio, no prazo de até cinco dias úteis após a efetivação do crédito pelo FNDE, tomando-se como base para esse cálculo o Censo Escolar do ano anterior ao do atendimento.\n ' +
                          '\nParágrafo único. A transferência dos recursos financeiros a que se refere o caput deste artigo não desonera a EEx. transferidora da obrigação de prestar contas, observando-se o disposto nesta Resolução e na Lei nº 11.947/2009.\n ' +
                          '\nArt. 8º É facultado aos Estados, ao Distrito Federal e aos Municípios repassar os recursos financeiros recebidos à conta do PNAE, no valor per capita fixado no art. 38, inciso II desta Resolução, às UEx. das escolas de educação básica pertencente à sua rede de ensino, observado o disposto nesta Resolução.\n ' +
                          '\n§1º No caso da operacionalização do programa na forma prevista no caput, o Estado, Município e Distrito Federal deverão assegurar a estrutura necessária para:\n ' +
                          '\nI - a realização do devido processo licitatório e/ou aquisição de gêneros alimentícios da Agricultura Familiar e/ou do Empreendedor Familiar Rural, conforme a Lei nº 8.666, de 21 de junho de 1993 e art.14 da Lei nº 11.947/2009;\n ' +
                          '\nII - a ordenação de despesas, gestão e execução dos contratos administrativos;\n ' +
                          '\nIII - o controle de estoque e armazenamento dos gêneros alimentícios; e\n ' +
                          '\nIV - a prestação de contas e demais atos relacionados à correta utilização dos recursos financeiros.\n ' +
                          '\n§3º A transferência de recursos realizada na forma deste artigo deverá ocorrer em até dez parcelas por ano, no prazo máximo de até cinco dias úteis, a contar da efetivação do crédito realizado pelo FNDE.\n ' +
                          '\n§4º Os recursos financeiros repassados na forma deste artigo deverão ser creditados pela EEx. diretamente às UEx. em conta específica, aberta pela EEx. para tal fim, observado, no que couber, o disposto no art. 38.\n ' +
                          '\n§5º Compete à EEx. comunicar ao FNDE a adoção do procedimento previsto neste artigo, informando também a razão social e o número do respectivo Cadastro Nacional de Pessoa Jurídica - CNPJ da UEx.\n ' +
                          '\nArt. 9º Os recursos financeiros destinados à alimentação escolar dos alunos matriculados em entidades filantrópicas, escolas comunitárias e escolas confessionais, na forma prevista no §1º do art. 4º desta Resolução, serão transferidos para o respectivo Estado, Distrito Federal e Município, que deverão atendê-las mediante o fornecimento de gêneros alimentícios e/ou repasse dos correspondentes recursos financeiros.\n ' +
                          '\nParágrafo único. No caso de a EEx. optar em repassar os recursos financeiros recebidos à conta do PNAE às escolas de que trata este artigo, somente poderá fazê-lo mediante formalização de termo de convênio, na forma estabelecida na Portaria Interministerial MPOG/MF/CGU nº 507, de 24 de novembro de 2011, no prazo máximo de cinco dias úteis, a contar da efetivação do crédito realizado pelo FNDE.\n ' +
                          '\nArt. 10 A operacionalização do Programa na forma prevista nos artigos 8º e 9º não afasta a responsabilidade da EEx. de responder pela regular aplicação dos recursos financeiros e da prestação de contas ao FNDE.\n ' +
                          '\nArt. 11 A transferência dos recursos financeiros destinados ao atendimento das escolas federais de educação básica, mantidas pela União, será feita diretamente pelo FNDE. Estas deverão informar os números do CNPJ, da Unidade Gestora e da Gestão.\n ';

export const CHAPTER_V = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';

export const CHAPTER_VI = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';


export const CHAPTER_VII = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';

export const CHAPTER_VIII = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';

export const CHAPTER_IX = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';

export const CHAPTER_X = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';


export const CHAPTER_XI = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';

export const CHAPTER_XII = '\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ' +
                          '\n\n ';

export const CONTENT = [
  {
    title: 'Capitulo I',
    content: CHAPTER_I,
  },
  {
    title: 'Capitulo II',
    content: CHAPTER_II,
  },
  {
    title: 'Capitulo III',
    content: CHAPTER_III,
  },
  {
    title: 'Capitulo IV',
    content: CHAPTER_IV,
  },
  {
    title: 'Capitulo V',
    content: CHAPTER_V,
  },
];

export const SELECTORS = [
  {
    title: 'Capitulo I',
    value: 0,
  },
  {
    title: 'Capitulo II',
    value: 1,
  },
  {
    title: 'Capitulo III',
    value: 2,
  },
  {
    title: 'Capitulo IV',
    value: 3,
  },
  {
    title: 'None',
    value: false,
  },
];
