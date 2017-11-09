import reportReducer from '../../src/Reducers/reportReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_STOCKFOODOBSERVATION,
  SET_STOCKFOODREPORT_POSITIVE,
  SET_STOCKFOODREPORT_NEGATIVE,
  SET_DOCOBSERVATION,
  SET_DOCREPORT_NEGATIVE,
  SET_DOCREPORT_POSITIVE,
  SET_FOODQUALITYOBSERVATION,
  SET_FOODQUALITYREPORT_POSITIVE,
  SET_FOODQUALITYREPORT_NEGATIVE,
} from '../../src/actions/types';

describe('Testing reportReducer', () => {
  it('sets food stock report observation', () => {
    let report = { ...initialState.report };

    expect(report.foodStockObservation).not.toBe('Estoque de Alimentos sujo.');

    report = reportReducer(report, {
      type: SET_STOCKFOODOBSERVATION,
      payload: 'Estoque de Alimentos sujo.',
    });

    expect(report.foodStockObservation).toBe('Estoque de Alimentos sujo.');
  });

  it('sets food stock report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      foodStock: [
        { label: 'Escola não possui Estoque de Alimentos', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Alimentos vencidos', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodStockReportPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_STOCKFOODREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(foodStockReportPositiveBefore);
  });

  it('sets food stock report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      foodStock: [
        { label: 'Escola não possui Estoque de Alimentos', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Alimentos vencidos', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodStockReportNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_STOCKFOODREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(foodStockReportNegativeBefore);
  });

  it('sets doc report observation', () => {
    let report = { ...initialState.report };

    expect(report.docObservation).not.toBe('Ausência de registros de imunização');

    report = reportReducer(report, {
      type: SET_DOCOBSERVATION,
      payload: 'Ausência de registros de imunização',
    });

    expect(report.docObservation).toBe('Ausência de registros de imunização');
  });

  it('sets doc report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      doc: [
        { label: 'Ausência de registros de imunização', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Ausência de registro de higienização dos utensílios', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const docNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_DOCREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(docNegativeBefore);
  });

  it('sets doc report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      doc: [
        { label: 'Ausência de registros de imunização', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Ausência de registro de higienização dos utensílios', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const docPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_DOCREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(docPositiveBefore);
  });

  it('sets foodQuality report observation', () => {
    let report = { ...initialState.report };

    expect(report.foodQualityObservation).not.toBe('As refeições são frescas');

    report = reportReducer(report, {
      type: SET_FOODQUALITYOBSERVATION,
      payload: 'As refeições são frescas',
    });

    expect(report.foodQualityObservation).toBe('As refeições são frescas');
  });

  it('sets foodQuality report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      foodQuality: [
        { label: 'As refeições são frescas', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'As refeições são saudáveis', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodQualityPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_FOODQUALITYREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(foodQualityPositiveBefore);
  });

  it('sets foodQuality report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      foodQuality: [
        { label: 'As refeições são frescas', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'As refeições são saudáveis', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodQualityNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_FOODQUALITYREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(foodQualityNegativeBefore);
  });
});
