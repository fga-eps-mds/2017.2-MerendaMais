import foodStock from '../constants/reports/foodStock';
import refectory from '../constants/reports/refectory';
import kitchen from '../constants/reports/kitchen';
import foodQuality from '../constants/reports/foodQuality';
import foodHandler from '../constants/reports/foodHandler';
import waterSewerSupply from '../constants/reports/waterSewerSupply';
import foodPreparation from '../constants/reports/foodPreparation';
import doc from '../constants/reports/doc';
import schoolSurroundings from '../constants/reports/schoolSurroundings';

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
    schoolStudents: '',
    schoolSelected: false,
    uf: '',
    city: '',
  },
  list: {
    listOfCounselorsInAGroup: [],
    listOfCheckedCounselors: [],
    listOfNotCheckedCounselors: [],
    listOfInviteesWithCounselorInformations: {},
    listOfPendingScheduleInAGroup: [],
    listOfExpiredScheduleInAGroup: [],
    listOfScheduleMeetingInAGroup: [],
    listOfAlreadyInpectionedSchedueInAGroup: [],
    visitListOfInviteesWithCounselorInformations: {},
    visitListOfInvitees: {},
    meetingListOfInviteesWithCounselorInformations: {},
    meetingListOfInvitees: {},
  },
  scheduleMeeting: {
    codSchool: 0,
    meetingLatitude: null,
    meetingLongitude: null,
  },
  scheduleVisit: {
    currentVisit: {},
  },
};


export default initialState;
