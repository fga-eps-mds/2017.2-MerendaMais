import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/actions/schedulingVisitActions';
import * as types from '../../src/actions/types';
import { POSTS_LINK_NUVEM_CIVICA } from '../../src/constants/generalConstants';
import { convertingJSONToString } from '../../src/actions/counselorActions';
import * as mockActions from '../../src/actions/ManagerRegisterActions';
import {
  GET_CURRENT_SCHEDULE_ERROR,
  UPDATE_CURRENT_SCHEDULE_ERROR,
} from '../../src/constants/errorConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const MASTER_TOKEN = 1;

const postData = {
  codConteudoPost: 1,
  codPostagem: 1,
  content: {
    agentEmail: 'email@email.com',
    codSchool: 0,
    date: '0-0-0000',
    invitedAgent: false,
    schoolName: 'Nome da escola',
    time: '00:00',
    visitListOfInvitees: {},
  },
};

describe('Testing schedulingVisit updateSchedule', () => {
  const putScheduleHeader = {
    headers: {
      appToken: MASTER_TOKEN,
    },
  };

  const putScheduleBody = {
    JSON: convertingJSONToString(postData.content),
    texto: 'Agendamento',
  };

  const store = mockStore({});

  mockActions.authenticatingMasterCounselor = jest.fn(() => 1);

  it('Test async updateSchedule succes', async () => {
    const mock = new MockAdapter(axios);

    mock.onPut(
      `${POSTS_LINK_NUVEM_CIVICA}${postData.codPostagem}/conteudos/${postData.codConteudoPost}`,
      putScheduleBody).reply(200);


    console.log('THere');
    console.log(`${POSTS_LINK_NUVEM_CIVICA}${postData.codPostagem}/conteudos/${postData.codConteudoPost}`);
    console.log(`${JSON.stringify(putScheduleHeader)}`);

    console.log(`${JSON.stringify(putScheduleBody)}`);

    await store.dispatch(actions.asyncUpdateSchedule(postData));

    const expectedPayload = [
      { type: types.IS_LOADING },
      { type: types.IS_NOT_LOADING },
    ];

    expect(store.getActions()).toEqual(expectedPayload);
  });

  it('Test async updateSchedule failure', async () => {
    const mock = new MockAdapter(axios);

    mock.onPut(
      `${POSTS_LINK_NUVEM_CIVICA}${postData.codPostagem}/conteudos/${postData.codConteudoPost}`,
      putScheduleBody,
      putScheduleHeader).reply(400);

    try {
      await store.dispatch(actions.asyncUpdateSchedule(postData));
    } catch (error) {
      const errorJson = JSON.parse(error.message);
      expect(errorJson.name).toBe(UPDATE_CURRENT_SCHEDULE_ERROR);
      expect(errorJson.status).toBe(400);
    }
  });
});

describe('Testing scheduleVisit asyncGetCurrentSchedule', () => {
  const getData = {
    appToken: 1,
    codPostagem: 2,
    codConteudoPost: 3,
  };

  const header = {
    headers: {
      appToken: getData.appToken,
    },
  };


  const response = {
    postagem: {
      codPostagem: getData.codPostagem,
    },
    codConteudoPost: getData.codConteudoPost,
    JSON: "{'chave': 'valor'}",
  };

  const store = mockStore({});

  it('Testing asyncGetCurrentSchedule sucess', async () => {
    const mock = new MockAdapter(axios);

    mock
      .onGet(`${POSTS_LINK_NUVEM_CIVICA}${getData.codPostagem}/conteudos/${getData.codConteudoPost}`, header)
      .reply(200, { ...response });

    await store.dispatch(actions.asyncGetCurrentSchedule(getData));

    const possiblePayload = {
      codConteudoPost: getData.codConteudoPost,
      codPostagem: getData.codPostagem,
      content: {
        chave: 'valor',
      },
    };

    const expectedPayload = {
      type: types.SET_CURRENT_INSPECTION,
      payload: { ...possiblePayload },
    };

    expect(store.getActions()).toEqual([expectedPayload]);
  });
  it('Testing asyncGetCurrentSchedule failure', async () => {
    const mock = new MockAdapter(axios);

    mock
      .onGet(`${POSTS_LINK_NUVEM_CIVICA}${getData.codPostagem}/conteudos/${getData.codConteudoPost}`, header)
      .reply(400, { ...response });

    try {
      await store.dispatch(actions.asyncGetCurrentSchedule(getData));
    } catch (error) {
      const errorJson = JSON.parse(error.message);
      expect(errorJson.name).toBe(GET_CURRENT_SCHEDULE_ERROR);
      expect(errorJson.status).toBe(400);
    }
  });
});
