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
    clickableView: 'auto',
  },
  report: {
    // 1 - Arredores da Escola.
    schoolSurroundings,
    schoolSurroundingsObservation: '',
    statusSchoolSurroundings: false,
    // 2 - Estoque de Alimentos.
    foodStock,
    foodStockObservation: '',
    statusFoodStock: false,
    // 3 - Documentação.
    doc,
    docObservation: '',
    statusDoc: false,
    // 4 - Qualidade de Alimento.
    foodQuality,
    foodQualityObservation: '',
    acceptedMenu: '',
    refusedMenu: '',
    statusFoodQuality: false,
    // 5 - Manipuladores de Alimentos.
    foodHandler,
    foodHandlerObservation: '',
    statusFoodHandler: false,
    // 6 - Refeitório.
    refectory,
    refectoryObservation: '',
    statusRefectory: false,
    // 7 - Abastecimento de Água e Esgoto.
    waterSewerSupply,
    waterSewerSupplyObservation: '',
    statuSwaterSewerSupply: false,
    // 8 - Cozinha.
    kitchen,
    kitchenObservation: '',
    statusKitchen: false,
    // 9 - Preparação e Distribuição.
    foodPreparation,
    foodPreparationObservation: '',
    statusFoodPreparation: false,
    // 10 - Outras observações.
    statusReportObservation: false,
    otherObservation: '',
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
    listOfPendingScheduleInAGroup: [],
    listOfPendingInvitedScheduleList: [],
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
  reportResult: {
    schoolSurroundings: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    foodStock: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    doc: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    foodQuality: {
      questions: [],
      status: false,
      additionalData: {
        acceptedMenu: '',
        refusedMenu: '',
      },
      loading: true,
    },
    foodHandler: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    refectory: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    waterSewerSupply: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    kitchen: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    foodPreparation: {
      questions: [],
      status: false,
      textObservation: '',
      loading: true,
    },
    otherObservation: {
      status: false,
      textObservation: '',
      loading: true,
    },
    isLoadingResult: false,
  },
};


export default initialState;
