// appIdentifier number to use in Nuvem Cívica.
export const APP_IDENTIFIER = 463;

export const APP_TOKEN = 'v1_8841323707E44F8131B11AF90E417AA5732CACA7AD8A8842D3492C6C76F9DEAF7CCC9398BDE13AD7CE493A87821514E64B8E43DF383711C4B61165B7CD867C5314764244486CBF5BEFC37F2A73822583904BE3615B6CE11AD56192C83965F1E0EA45E94B32B0176B57705CFDC21DBDF677C05B583F5D6883501605CE45C66AEB30FD7FBB65BADF6B7E5B595753E8836C894FCE8184739D9EC3EE889CFBA4E039223A30AFEC658C9A6E0EE6966142F52C5AE3F9746B4258FE78ABD518EA28F5387746F6166D3CE302C5A6667335FF269E997A106B2C93110146F624B279EBFBA00F51D91F868CF095DE2FA73730845D285B8701EAD7D4366F81040E89D14B71821E6C967BF843F245E8425C382F7D6571840E69985B4CAED67E5B595753E8836C';

// Visit posting type code to use in Nuvem Cívica.
export const VISIT_POSTING_TYPE_CODE = 381;

// Meeting posting type code to use in Nuvem Cívica.
export const MEETING_POSTING_TYPE_CODE = 386;

// Inspection posting type code to use in Nuvem Cívica.
export const INSPECTION_POSTING_TYPE_CODE = 388;

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
