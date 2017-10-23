import foodStock from './Reports/foodStock';

const initialState = {
  counselor: {
    id: 0,
    token: '',
    url: '',
    cpf: '',
    email: '',
    phone: '',
    isPresident: false,
    segment: '',
    name: '',
    password: '',
    CAE_Type: '',
    CAE: '',
    isLoading: false,
    message_erro: '',
  },
  report: {
    foodStock,
  },
};

export default initialState;
