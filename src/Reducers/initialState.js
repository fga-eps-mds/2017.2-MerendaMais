import foodStock from './Reports/foodStock';
import refectory from './Reports/refectory';
import kitchen from './Reports/kitchen';
import doc from './Reports/doc';

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
    refectory,
    refectoryObservation: '',
    kitchen,
    kitchenObservation: '',
    doc,
    documentationObservation: '',
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
