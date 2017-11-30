import foodStock from './Reports/foodStock';
import refectory from './Reports/refectory';
import kitchen from './Reports/kitchen';
import foodQuality from './Reports/foodQuality';
import foodHandler from './Reports/foodHandler';
import waterSewerSupply from './Reports/waterSewerSupply';
import foodPreparation from './Reports/foodPreparation';
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
      counselorType: '',
      segment: '',
      CAE_Type: '',
      CAE: '',
      codGroup: '',
      presidentChecked: false,
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
    otherObservation: '',
    foodQuality,
    foodQualityObservation: '',
    acceptedMenu: '',
    refusedMenu: '',
    foodHandler,
    foodHandlerObservation: '',
    statusFoodHandler: false,
    foodPreparation,
    foodPreparationObservation: '',
    statusFoodPreparation: false,
    waterSewerSupply,
    waterSewerSupplyObservation: '',
    statuSwaterSewerSupply: false,
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
    schoolCode: 0,
    schoolName: '',
    schoolPhone: '',
    schoolEmail: '',
    schoolLat: '',
    schoolLong: '',
    schoolSelected: false,
    uf: '',
    city: '',
  },
  list: {
    listOfCounselorsInAGroup: [],
    listOfCheckedCounselors: [],
    listOfNotCheckedCounselors: [],
    listOfInviteesWithCounselorInformations: {},
    listOfInvitees: {},
    listOfPendingScheduleInAGroup: [],
    listOfExpiredScheduleInAGroup: [],
    listOfAlreadyInpectionedSchedueInAGroup: [],
    visitListOfInviteesWithCounselorInformations: {},
    visitListOfInvitees: {},
    meetingListOfInviteesWithCounselorInformations: {},
    meetingListOfInvitees: {},
  },
  schedule: {
    codSchool: 0,
    meetingLatitude: null,
    meetingLongitude: null,
  },
};


export default initialState;
