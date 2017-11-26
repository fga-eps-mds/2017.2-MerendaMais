// appIdentifier number to use in Nuvem Cívica.
export const APP_IDENTIFIER = 463;

// Posting type code to use in Nuvem Cívica.
export const VISIT_POSTING_TYPE_CODE = 381;

// Posting type code to use in Nuvem Cívica.
export const MEETING_POSTING_TYPE_CODE = 386;

// Profile type code to use in Nuvem Cívica.
export const PROFILE_TYPE_CODE = 239;

// Link (GET) to authenticate user at Nuvem Cívica and get his Token.
export const AUTHENTICATE_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/autenticar';

// Default Link to manipulate users at Nuvem Cívica.
export const DEFAULT_USER_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/';

// Link to access posts at Nuvem Cívica.
export const POSTS_LINK_NUVEM_CIVICA = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/conteudos';

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
