import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/actions/schedulingVisitActions';
import * as types from '../../src/actions/types';
import { POSTS_LINK_NUVEM_CIVICA, EDIT_SUCCEED } from '../../src/constants/generalConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const MASTER_TOKEN = 1;

const postData = {
  codConteudoPost: 0,
  codPostagem: 0,
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

describe('Testing schedulingVisit actions', () => {
  it('Test async updateSchedule succes', async () => {
    const mock = new MockAdapter(axios);
    mock.onPut(
      `${POSTS_LINK_NUVEM_CIVICA}${postData.codPostagem}/conteudos/${postData.codConteudoPost}`).reply(200);

    const actionReturn = await actions.asyncUpdateSchedule(postData, MASTER_TOKEN);
    expect(actionReturn).toBe(EDIT_SUCCEED);
  });
/*
  it('Test disableCounselorFromApp when disable fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onDelete(
      `${DEFAULT_USER_LINK_NUVEM_CIVICA}2/perfil`,
      disableAppHeader)
      .reply(200);

    try {
      await actions.disableCounselorFromApp(counselor, MASTER_TOKEN);
    } catch (e) {
      expect(e).toEqual(COUNSELOR_DISABLED_FAILED);
    }
  }); */
});
