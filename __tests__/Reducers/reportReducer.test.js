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
  SET_ACCEPTEDMENU,
  SET_REFUSEDMENU,
  SET_FOODHANDLEROBSERVATION,
  SET_FOODHANDLERREPORT_POSITIVE,
  SET_FOODHANDLERREPORT_NEGATIVE,
  SET_STATUSFOODHANDLER,
  SET_WATERSEWERSUPPLYOBSERVATION,
  SET_WATERSEWERSUPPLYREPORT_POSITIVE,
  SET_WATERSEWERSUPPLYREPORT_NEGATIVE,
  SET_STATUSWATERSEWERSUPPLY,
  SET_FOODPREPARATIONOBSERVATION,
  SET_FOODPREPARATIONREPORT_POSITIVE,
  SET_FOODPREPARATIONREPORT_NEGATIVE,
  SET_STATUSFOODPREPARATION,
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

  it('sets acceptedMenu', () => {
    let report = { ...initialState.report };

    expect(report.acceptedMenu).not.toBe('O cardápio mais aceito foi o que continha frango assado.');

    report = reportReducer(report, {
      type: SET_ACCEPTEDMENU,
      payload: 'O cardápio mais aceito foi o que continha frango assado.',
    });

    expect(report.acceptedMenu).toBe('O cardápio mais aceito foi o que continha frango assado.');
  });

  it('sets refusedMenu', () => {
    let report = { ...initialState.report };

    expect(report.refusedMenu).not.toBe('O cardápio menos aceito foi o que continha frango assado.');

    report = reportReducer(report, {
      type: SET_REFUSEDMENU,
      payload: 'O cardápio menos aceito foi o que continha frango assado.',
    });

    expect(report.refusedMenu).toBe('O cardápio menos aceito foi o que continha frango assado.');
  });

  it('sets food handler report observation', () => {
    let report = { ...initialState.report };

    expect(report.foodHandlerObservation).not.toBe('Uniforme completo');

    report = reportReducer(report, {
      type: SET_FOODHANDLEROBSERVATION,
      payload: 'Uniforme completo',
    });

    expect(report.foodHandlerObservation).toBe('Uniforme completo');
  });

  it('sets food handler report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      foodHandler: [
        { label: 'Uniforme completo', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Merendeiras doentes', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodHanlderReportPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_FOODHANDLERREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(foodHanlderReportPositiveBefore);
  });

  it('sets food handler report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      foodHandler: [
        { label: 'Uniforme completo', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Merendeiras doentes', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodHanlderReportNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_FOODHANDLERREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(foodHanlderReportNegativeBefore);
  });

  it('sets food preparation report observation', () => {
    let report = { ...initialState.report };

    expect(report.foodPreparationObservation).not.toBe('Higienização de frutas e verduras é realizada de maneira adequada');

    report = reportReducer(report, {
      type: SET_FOODPREPARATIONOBSERVATION,
      payload: 'Higienização de frutas e verduras é realizada de maneira adequada',
    });

    expect(report.foodPreparationObservation).toBe('Higienização de frutas e verduras é realizada de maneira adequada');
  });

  it('sets food preparation report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      foodPreparation: [
        { label: 'Higienização de frutas e verduras é realizada de maneira adequada', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'A água sanitária utilizada é própria para alimentos', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodPreparationReportPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_FOODPREPARATIONREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(foodPreparationReportPositiveBefore);
  });

  it('sets food preparation report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      foodPreparation: [
        { label: 'Higienização de frutas e verduras é realizada de maneira adequada', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'A água sanitária utilizada é própria para alimentos', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const foodPreparationReportNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_FOODPREPARATIONREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(foodPreparationReportNegativeBefore);
  });

  it('sets water sewer supply report observation', () => {
    let report = { ...initialState.report };

    expect(report.waterSewerSupplyObservation).not.toBe('Fossas e esgotos conectados à rede pública');

    report = reportReducer(report, {
      type: SET_WATERSEWERSUPPLYOBSERVATION,
      payload: 'Fossas e esgotos conectados à rede pública',
    });

    expect(report.waterSewerSupplyObservation).toBe('Fossas e esgotos conectados à rede pública');
  });

  it('sets water sewer supply report positive', () => {
    // let report = { ...initialState.report };
    let report = {
      waterSewerSupply: [
        { label: 'Fossas e esgotos conectados à rede pública', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Caixas de gordura em adequado estado de conservação e funcionamento', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const waterSewerSupplyReportPositiveBefore = report;

    report = reportReducer(report, {
      type: SET_WATERSEWERSUPPLYREPORT_POSITIVE,
      payload: 0,
    });

    expect(report).toEqual(waterSewerSupplyReportPositiveBefore);
  });

  it('sets water sewer supply report negative', () => {
    // let report = { ...initialState.report };
    let report = {
      waterSewerSupply: [
        { label: 'Fossas e esgotos conectados à rede pública', markedYes: false, markedNo: false, status: false, key: 0 },
        { label: 'Caixas de gordura em adequado estado de conservação e funcionamento', markedYes: false, markedNo: false, status: false, key: 1 },
      ],
    };

    const waterSewerSupplyReportNegativeBefore = report;

    report = reportReducer(report, {
      type: SET_WATERSEWERSUPPLYREPORT_NEGATIVE,
      payload: 0,
    });

    expect(report).toEqual(waterSewerSupplyReportNegativeBefore);
  });

  it('sets status food handler', () => {
    let report = { ...initialState.report };

    expect(report.statusFoodHandler).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSFOODHANDLER,
      payload: true,
    });

    expect(report.statusFoodHandler).toBe(true);
  });

  it('sets status food preparation', () => {
    let report = { ...initialState.report };

    expect(report.statusFoodPreparation).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSFOODPREPARATION,
      payload: true,
    });

    expect(report.statusFoodPreparation).toBe(true);
  });

  it('sets status water sewer supply', () => {
    let report = { ...initialState.report };

    expect(report.statusWaterSewerSupply).not.toBe(true);

    report = reportReducer(report, {
      type: SET_STATUSWATERSEWERSUPPLY,
      payload: true,
    });

    expect(report.statusWaterSewerSupply).toBe(true);
  });
});
