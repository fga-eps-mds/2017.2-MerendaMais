import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { POSTS_LINK_NUVEM_CIVICA, INSPECTION_POSTING_TYPE_CODE, APP_IDENTIFIER } from '../constants/generalConstants';
import { SET_CURRENT_REPORT_RESULT, SET_CURRENT_REPORT_RESULT_FOOD_STOCKS, SET_CURRENT_REPORT_RESULT_DOC, SET_CURRENT_REPORT_RESULT_FOOD_QUALITY, SET_CURRENT_REPORT_RESULT_FOOD_HANDLER, SET_CURRENT_REPORT_RESULT_WATER_SEWER_SUPPLY, SET_CURRENT_REPORT_RESULT_KITCHEN, SET_CURRENT_REPORT_RESULT_FOOD_PREPARATION, SET_CURRENT_REPORT_RESULT_OTHER_OBSERVATION } from './types';

const FILE_NAME = 'reportResultActions.js';

export const setCurrentReportResultSchoolSurroundings = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_SCHOOL_SURROUNDINGS,
    payload: reportResult,
});  

export const setCurrentReportResultFoodStocks = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_FOOD_STOCKS,
    payload: reportResult,
}); 

export const setCurrentReportResultDoc = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_DOC,
    payload: reportResult,
}); 

export const setCurrentReportResultFoodQuality = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_FOOD_QUALITY,
    payload: reportResult,
}); 

export const setCurrentReportResultFoodHandler = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_FOOD_HANDLER,
    payload: reportResult,
}); 

export const setCurrentReportResultWaterSewerSupply = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_WATER_SEWER_SUPPLY,
    payload: reportResult,
}); 

export const setCurrentReportResultKitchen = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_KITCHEN,
    payload: reportResult,
}); 

export const setCurrentReportResultFoodPreparation = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_FOOD_PREPARATION,
    payload: reportResult,
}); 

export const setCurrentReportResultOtherObservation = reportResult => ({
    type: SET_CURRENT_REPORT_RESULT_OTHER_OBSERVATION,
    payload: reportResult,
}); 

export const asyncGetCurrentPost = getData => async (dispatch) => {
    const header = {
      headers: {
        appToken: getData.appToken
      },
      params: {
        codPostagemRelacionada: getData.codPostagem,
        codTiposPostagem: INSPECTION_POSTING_TYPE_CODE,
        appIdentifier: APP_IDENTIFIER,
      }
    };
    
    console.log(header);
    
    axios.get(POSTS_LINK_NUVEM_CIVICA, header)
    .then((response) => {
  
      console.log(response.data[0].conteudos.length);
      response.data[0].conteudos.map((item) => {
        getContentInPost(getData ,item, dispatch);
      })
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);
        treatingPostsError(error);
    });
  }
  
  export const getContentInPost = (getData, item, dispatch) => {
    const header = {
      headers: {
        appToken: getData.appToken
      }
    };
  
    // console.log(item.content.links.first().href);
    console.log(`${POSTS_LINK_NUVEM_CIVICA}${getData.codPostagem}/conteudos/${item.codConteudoPostagem}`);
    console.log(item.links[0].href)
  
    axios.get(item.links[0].href, header)
    .then((response) => {
      console.log(";;;;;;;;;;;;;;;;;;");
      console.log(response.data.JSON);
      console.log("////////////////");
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);
  
      treatingPostsError(error);
    });
  }

