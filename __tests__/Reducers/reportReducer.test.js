import reportReducer from '../../src/Reducers/reportReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_STOCKFOODOBSERVATION,
  SET_STOCKFOODREPORT,
} from '../../src/actions/types';

describe('Testing reportReducer', () => {
  it('sets report observation', () => {
    let report = { ...initialState.report };

    expect(report.foodStockObservation).not.toBe('Estoque de Alimentos sujo.');

    report = reportReducer(report, {
      type: SET_STOCKFOODOBSERVATION,
      payload: 'Estoque de Alimentos sujo.',
    });

    expect(report.foodStockObservation).toBe('Estoque de Alimentos sujo.');
  });
  it('sets report', () => {
    // let report = { ...initialState.report };
    let report = {
      foodStock: [
        { label: 'Escola não possui Estoque de Alimentos', status: false, key: 0 },
        { label: 'Alimentos vencidos', status: false, key: 1 },
      ],
    };

    const reportBefore = report;

    report = reportReducer(report, {
      type: SET_STOCKFOODREPORT,
      payload: 0,
    });

    expect(report).not.toBe(reportBefore);
  });
});
