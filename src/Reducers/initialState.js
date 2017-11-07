import foodStock from './Reports/foodStock';
import kitchen from './Reports/kitchen';

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
    kitchen,
    kitchenObservation: '',
  },
  school: {
    schoolCode: '',
    schoolName: '',
    schoolPhone: '',
    schoolEmail: '',
    schoolLat: '',
    schoolLong: '',
  },
  list: {
    listOfCounselorsInAGroup: [],
  },
};

export default initialState;
