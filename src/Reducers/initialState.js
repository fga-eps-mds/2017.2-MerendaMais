import foodStock from './Reports/foodStock';
import refectory from './Reports/refectory';
import kitchen from './Reports/kitchen';
import foodQuality from './Reports/foodQuality';
import doc from './Reports/doc';
import schoolSurroundings from './Reports/schoolSurroundings';

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
    docObservation: '',
    documentationObservation: '',
    foodQuality,
    foodQualityObservation: '',
    statusFoodQuality: false,
    statusFoodStock: false,
    statusDoc: false,
    statusKitchen: false,
    statusRefectory: false,
    statusSchoolSurroundings: false,
    statusReportObservation: false,
    schoolSurroundings,
    schoolSurroundingsObservation: '',
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
