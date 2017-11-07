import foodStock from './Reports/foodStock';

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
  report: {
    foodStock,
    foodStockObservation: '',
  },
  school: {
    schoolCode: 0,
    schoolName: '',
    schoolPhone: '',
    schoolEmail: '',
    schoolLat: '',
    schoolLong: '',
    schoolSelected: false,
  },
  list: {
    listOfCounselorsInAGroup: [],
  },
  schedule: {
    codSchool: 0,
    date: '',
    time: '',
  },
};

export default initialState;
