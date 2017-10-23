const initialState = {
  counselor: {
    nuvemCode: 0,
    email: '',
    name: '',
    userName: '',
    password: '',
    token: '',
    profile: {
      cpf: '',
      phone: '',
      isPresident: false,
      segment: '',
      CAE_Type: '',
      CAE: '',
    },
  },
  application: {
    isLoading: false,
    message_erro: '',
  },
};

export default initialState;
