import initialState from "./initialState";
import { 
  RESET_CURRENT_REPORT_RESULT, 
  SET_CURRENT_REPORT_RESULT_FOOD_STOCKS, 
  SET_CURRENT_REPORT_RESULT_SCHOOL_SURROUNDINGS, 
  SET_CURRENT_REPORT_RESULT_DOC, 
  SET_CURRENT_REPORT_RESULT_FOOD_QUALITY, 
  SET_CURRENT_REPORT_RESULT_FOOD_HANDLER, 
  SET_CURRENT_REPORT_RESULT_REFECTORY, 
  SET_CURRENT_REPORT_RESULT_WATER_SEWER_SUPPLY, 
  SET_CURRENT_REPORT_RESULT_KITCHEN, 
  SET_CURRENT_REPORT_RESULT_FOOD_PREPARATION, 
  SET_CURRENT_REPORT_RESULT_OTHER_OBSERVATION 
} from "../actions/types";

const reportResultReducer = (state = initialState.currentReportResult, action) => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case SET_CURRENT_REPORT_RESULT_SCHOOL_SURROUNDINGS: {
      return {
        ...state,
        schoolSurroundings: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_FOOD_STOCKS: {
      return {
        ...state,
        foodStocks: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_DOC: {
      return {
        ...state,
        doc: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_FOOD_QUALITY: {
      return {
        ...state,
        foodQuality: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_FOOD_HANDLER: {
      return {
        ...state,
        foodHandler: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_REFECTORY: {
      return {
        ...state,
        refectory: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_WATER_SEWER_SUPPLY: {
      return {
        ...state,
        waterSewerSupply: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_KITCHEN: {
      return {
        ...state,
        schoolSurroundings: {
          kitchen: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_FOOD_PREPARATION: {
      return {
        ...state,
        foodPreparation: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case SET_CURRENT_REPORT_RESULT_OTHER_OBSERVATION: {
      return {
        ...state,
        otherObservation: {
          questions: action.payload,
          loading: true,
        }
      }
    }
    case RESET_CURRENT_REPORT_RESULT: {
      return initialState.currentReportResult;
    }
    default: {
      return state;
    }
  }
}

export default reportResultReducer;
