import reportReducer from '../../src/Reducers/reportReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_STOCKFOODREPORT_POSITIVE,
  SET_STOCKFOODREPORT_NEGATIVE,
  SET_STOCKFOODOBSERVATION,
  SET_REFECTORYREPORT_POSITIVE,
  SET_REFECTORYREPORT_NEGATIVE,
  SET_REFECTORYOBSERVATION,
  SET_KITCHENREPORT_POSITIVE,
  SET_KITCHENREPORT_NEGATIVE,
  SET_KITCHENOBSERVATION,
  SET_DOCREPORT_POSITIVE,
  SET_DOCREPORT_NEGATIVE,
  SET_DOCOBSERVATION,
  SET_REPORTOBSERVATION,
  SET_FOODQUALITYOBSERVATION,
  SET_FOODQUALITYREPORT_NEGATIVE,
  SET_FOODQUALITYREPORT_POSITIVE,
  SET_STATUSFOODQUALITY,
  SET_SCHOOLSURROUNDINGSOBSERVATION,
  SET_SCHOOLSURROUNDINGSREPORT_NEGATIVE,
  SET_SCHOOLSURROUNDINGSREPORT_POSITIVE,
  SET_STATUSDOC,
  SET_STATUSKITCHEN,
  SET_STATUSREFECTORY,
  SET_STATUSREPORTOBSERVATION,
  SET_STATUSSCHOOLSURROUNDINGS,
  SET_STATUSSTOCKFOOD,
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

  it('sets kitchen report observation', () => {
    let report = { ...initialState.report };

    expect(report.kitchenObservation).not.toBe('Escola possui Cozinha');

    report = reportReducer(report, {
      type: SET_KITCHENOBSERVATION,
      payload: 'Escola possui Cozinha',
    });

    expect(report.kitchenObservation).toBe('Escola possui Cozinha');
  });

  it('sets kitchen report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      kitchen: [
        { label: 'Escola possui Cozinha', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Merendeiras com esmalte nas unhas', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const kitchenNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_KITCHENREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(kitchenNegativeBefore);
  });

  it('sets kitchen report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      kitchen: [
        { label: 'Escola possui Cozinha', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Merendeiras com esmalte nas unhas', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const kitchenPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_KITCHENREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(kitchenPositiveBefore);
  });

  it('sets refectory report observation', () => {
    let report = { ...initialState.report };

    expect(report.refectoryObservation).not.toBe('Escola possui Refeitório');

    report = reportReducer(report, {
      type: SET_REFECTORYOBSERVATION,
      payload: 'Escola possui Refeitório',
    });

    expect(report.refectoryObservation).toBe('Escola possui Refeitório');
  });

  it('sets refectory report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      refectory: [
        { label: 'Escola possui Refeitório', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Alimentos prontos sem proteção', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const refectoryPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_REFECTORYREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(refectoryPositiveBefore);
  });

  it('sets refectory report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      refectory: [
        { label: 'Escola possui Refeitório', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Alimentos prontos sem proteção', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const refectoryNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_REFECTORYREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(refectoryNegativeBefore);
  });

  it('sets schoolSurroundings report observation', () => {
    let report = { ...initialState.report };

    expect(report.schoolSurroundingsObservation).not.toBe('Lixo a céu aberto');

    report = reportReducer(report, {
      type: SET_SCHOOLSURROUNDINGSOBSERVATION,
      payload: 'Lixo a céu aberto',
    });

    expect(report.schoolSurroundingsObservation).toBe('Lixo a céu aberto');
  });

  it('sets schoolSurroundings report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      schoolSurroundings: [
        { label: 'Lixo a céu aberto', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Água parada', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const schoolSurroundingsNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_SCHOOLSURROUNDINGSREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(schoolSurroundingsNegativeBefore);
  });

  it('sets schoolSurroundings report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      schoolSurroundings: [
        { label: 'Lixo a céu aberto', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Água parada', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const schoolSurroundingsPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_SCHOOLSURROUNDINGSREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(schoolSurroundingsPositiveBefore);
  });

  it('sets report observation', () => {
    let report = { ...initialState.report };

    expect(report.otherObservation).not.toBe('Escola tem refeitório');

    report = reportReducer(report, {
      type: SET_REPORTOBSERVATION,
      payload: 'Escola tem refeitório',
    });

    expect(report.otherObservation).toBe('Escola tem refeitório');
  });

  it('sets status foodQuality', () => {
    let report = { ...initialState.report };

    expect(report.statusFoodQuality).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSFOODQUALITY,
      payload: true,
    });

    expect(report.statusFoodQuality).toBe(true);
  });

  it('sets status doc', () => {
    let report = { ...initialState.report };

    expect(report.statusDoc).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSDOC,
      payload: true,
    });

    expect(report.statusDoc).toBe(true);
  });

  it('sets status kitchen', () => {
    let report = { ...initialState.report };

    expect(report.statusKitchen).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSKITCHEN,
      payload: true,
    });

    expect(report.statusKitchen).toBe(true);
  });

  it('sets status refectory', () => {
    let report = { ...initialState.report };

    expect(report.statusRefectory).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSREFECTORY,
      payload: true,
    });

    expect(report.statusRefectory).toBe(true);
  });

  it('sets status report observation', () => {
    let report = { ...initialState.report };

    expect(report.statusReportObservation).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSREPORTOBSERVATION,
      payload: true,
    });

    expect(report.statusReportObservation).toBe(true);
  });

  it('sets status school surroundings', () => {
    let report = { ...initialState.report };

    expect(report.statusSchoolSurroundings).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSSCHOOLSURROUNDINGS,
      payload: true,
    });

    expect(report.statusSchoolSurroundings).toBe(true);
  });

  it('sets status food stock', () => {
    let report = { ...initialState.report };

    expect(report.statusFoodStock).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSSTOCKFOOD,
      payload: true,
    });

    expect(report.statusFoodStock).toBe(true);
  });
});
