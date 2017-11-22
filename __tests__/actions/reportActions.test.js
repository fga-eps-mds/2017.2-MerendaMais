import { setDocReportPositive,
  setDocReportNegative,
  setDocObservation,
  setFoodQualityReportPositive,
  setFoodQualityReportNegative,
  setFoodQualityObservation,
  setStatusFoodQuality,
  setKitchenReportPositive, setKitchenReportNegative, setKitchenObservation,
  setRefectoryReportPositive, setRefectoryReportNegative, setRefectoryObservation,
  setReportObservation,
  setStatusDoc,
  setStatusKitchen,
  setStatusRefectory,
  setStatusReportObservation,
  setStatusSchoolSurroundings,
  setStatusFoodStock,
  setSchoolSurroundingsReportPositive, setSchoolSurroundingsReportNegative,
  setSchoolSurroundingsObservation,
  setStockFoodReportPositive, setStockFoodReportNegative, setFoodStockObservation,
  setAcceptedMenu, setRefusedMenu,
  setFoodHandlerReportPositive,
  setFoodHandlerReportNegative,
  setFoodHandlerObservation,
  setStatusFoodHandler,
  setFoodPreparationReportPositive,
  setFoodPreparationReportNegative, setFoodPreparationObservation, setStatusFoodPreparation,
  setWaterSewerSupplyReportPositive,
  setWaterSewerSupplyReportNegative,
  setWaterSewerSupplyObservation,
  setStatusWaterSewerSupply,
} from '../../src/actions/reportActions';

import { SET_STOCKFOODREPORT_NEGATIVE,
  SET_STOCKFOODOBSERVATION,
  SET_STOCKFOODREPORT_POSITIVE,
  SET_REFECTORYREPORT_POSITIVE,
  SET_REFECTORYREPORT_NEGATIVE,
  SET_REFECTORYOBSERVATION,
  SET_KITCHENREPORT_POSITIVE,
  SET_KITCHENREPORT_NEGATIVE,
  SET_KITCHENOBSERVATION,
  SET_FOODQUALITYOBSERVATION,
  SET_FOODQUALITYREPORT_NEGATIVE,
  SET_FOODQUALITYREPORT_POSITIVE,
  SET_DOCREPORT_POSITIVE,
  SET_DOCREPORT_NEGATIVE,
  SET_DOCOBSERVATION,
  SET_REPORTOBSERVATION,
  SET_STATUSFOODQUALITY,
  SET_STATUSDOC,
  SET_STATUSKITCHEN,
  SET_STATUSREFECTORY,
  SET_STATUSREPORTOBSERVATION,
  SET_STATUSSCHOOLSURROUNDINGS,
  SET_STATUSSTOCKFOOD,
  SET_SCHOOLSURROUNDINGSOBSERVATION,
  SET_SCHOOLSURROUNDINGSREPORT_NEGATIVE,
  SET_SCHOOLSURROUNDINGSREPORT_POSITIVE,
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

describe('Testing reportActions', () => {
  it('Testing setFoodStockObservation', () => {
    let actionReturn = setFoodStockObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_STOCKFOODOBSERVATION);

    actionReturn = setFoodStockObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_STOCKFOODOBSERVATION);
  });

  it('Testing setFoodStockReportPositive', () => {
    let actionReturn = setStockFoodReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_STOCKFOODREPORT_POSITIVE);

    actionReturn = setStockFoodReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_STOCKFOODREPORT_POSITIVE);
  });

  it('Testing setFoodStockReportNegative', () => {
    let actionReturn = setStockFoodReportNegative();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_STOCKFOODREPORT_NEGATIVE);

    actionReturn = setStockFoodReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_STOCKFOODREPORT_NEGATIVE);
  });

  it('Testing setDocObservation', () => {
    let actionReturn = setDocObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_DOCOBSERVATION);

    actionReturn = setDocObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_DOCOBSERVATION);
  });

  it('Testing setDocReportPositive', () => {
    let actionReturn = setDocReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_DOCREPORT_POSITIVE);

    actionReturn = setDocReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_DOCREPORT_POSITIVE);
  });

  it('Testing setDockReportNegative', () => {
    let actionReturn = setDocReportNegative();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_DOCREPORT_NEGATIVE);

    actionReturn = setDocReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_DOCREPORT_NEGATIVE);
  });


  it('Testing setFoodQualityObservation', () => {
    let actionReturn = setFoodQualityObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_FOODQUALITYOBSERVATION);

    actionReturn = setFoodQualityObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_FOODQUALITYOBSERVATION);
  });

  it('Testing setFoodQualityReportPositive', () => {
    let actionReturn = setFoodQualityReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_FOODQUALITYREPORT_POSITIVE);

    actionReturn = setFoodQualityReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_FOODQUALITYREPORT_POSITIVE);
  });

  it('Testing setFoodQualityReportNegative', () => {
    let actionReturn = setFoodQualityReportNegative();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_FOODQUALITYREPORT_NEGATIVE);

    actionReturn = setFoodQualityReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_FOODQUALITYREPORT_NEGATIVE);
  });

  it('Testing setStatusFoodQuality', () => {
    let actionReturn = setStatusFoodQuality();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSFOODQUALITY);

    actionReturn = setStatusFoodQuality({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSFOODQUALITY);
  });

  it('Testing setStatusDoc', () => {
    let actionReturn = setStatusDoc();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSDOC);

    actionReturn = setStatusDoc({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSDOC);
  });

  it('Testing setStatusKitchen', () => {
    let actionReturn = setStatusKitchen();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSKITCHEN);

    actionReturn = setStatusKitchen({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSKITCHEN);
  });

  it('Testing setStatusRefectory', () => {
    let actionReturn = setStatusRefectory();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSREFECTORY);

    actionReturn = setStatusRefectory({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSREFECTORY);
  });

  it('Testing setStatusReportObservation', () => {
    let actionReturn = setStatusReportObservation();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSREPORTOBSERVATION);

    actionReturn = setStatusReportObservation({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSREPORTOBSERVATION);
  });

  it('Testing setStatusSchoolSurroundings', () => {
    let actionReturn = setStatusSchoolSurroundings();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSSCHOOLSURROUNDINGS);

    actionReturn = setStatusSchoolSurroundings({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSSCHOOLSURROUNDINGS);
  });

  it('Testing setStatusFoodStock', () => {
    let actionReturn = setStatusFoodStock();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSSTOCKFOOD);

    actionReturn = setStatusFoodStock({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSSTOCKFOOD);
  });


  it('Testing setKitchenObservation', () => {
    let actionReturn = setKitchenObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_KITCHENOBSERVATION);

    actionReturn = setKitchenObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_KITCHENOBSERVATION);
  });

  it('Testing setKitchenReportPositive', () => {
    let actionReturn = setKitchenReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_KITCHENREPORT_POSITIVE);

    actionReturn = setKitchenReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_KITCHENREPORT_POSITIVE);
  });

  it('Testing setKitchenReportNegative', () => {
    let actionReturn = setKitchenReportNegative();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_KITCHENREPORT_NEGATIVE);

    actionReturn = setKitchenReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_KITCHENREPORT_NEGATIVE);
  });

  it('Testing setReportObservation', () => {
    let actionReturn = setReportObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_REPORTOBSERVATION);

    actionReturn = setReportObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_REPORTOBSERVATION);
  });


  it('Testing setSchoolSurroundingsObservation', () => {
    let actionReturn = setSchoolSurroundingsObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_SCHOOLSURROUNDINGSOBSERVATION);

    actionReturn = setSchoolSurroundingsObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_SCHOOLSURROUNDINGSOBSERVATION);
  });

  it('Testing setSchoolSurroundingsReportPositive', () => {
    let actionReturn = setSchoolSurroundingsReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_SCHOOLSURROUNDINGSREPORT_POSITIVE);

    actionReturn = setSchoolSurroundingsReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_SCHOOLSURROUNDINGSREPORT_POSITIVE);
  });

  it('Testing setSchoolSurroundingsReportNegative', () => {
    let actionReturn = setSchoolSurroundingsReportNegative();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_SCHOOLSURROUNDINGSREPORT_NEGATIVE);

    actionReturn = setSchoolSurroundingsReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_SCHOOLSURROUNDINGSREPORT_NEGATIVE);
  });

  it('Testing setRefectoryObservation', () => {
    let actionReturn = setRefectoryObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_REFECTORYOBSERVATION);

    actionReturn = setRefectoryObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_REFECTORYOBSERVATION);
  });

  it('Testing setRefectoryReportPositive', () => {
    let actionReturn = setRefectoryReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_REFECTORYREPORT_POSITIVE);

    actionReturn = setRefectoryReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_REFECTORYREPORT_POSITIVE);
  });

  it('Testing setRefectoryReportNegative', () => {
    let actionReturn = setRefectoryReportNegative();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_REFECTORYREPORT_NEGATIVE);

    actionReturn = setRefectoryReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_REFECTORYREPORT_NEGATIVE);
  });

  it('Testing setFoodHandlerObservation', () => {
    let actionReturn = setFoodHandlerObservation();

    expect(actionReturn.payload).not.toBe('Uniforme completo');
    expect(actionReturn.type).toBe(SET_FOODHANDLEROBSERVATION);

    actionReturn = setFoodHandlerObservation('Uniforme completo');

    expect(actionReturn.payload).toBe('Uniforme completo');
    expect(actionReturn.type).toBe(SET_FOODHANDLEROBSERVATION);
  });

  it('Testing setFoodHandlerReportPositive', () => {
    let actionReturn = setFoodHandlerReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_FOODHANDLERREPORT_POSITIVE);

    actionReturn = setFoodHandlerReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_FOODHANDLERREPORT_POSITIVE);
  });

  it('Testing setFoodHandlerReportNegative', () => {
    let actionReturn = setFoodHandlerReportNegative(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_FOODHANDLERREPORT_NEGATIVE);

    actionReturn = setFoodHandlerReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_FOODHANDLERREPORT_NEGATIVE);
  });

  it('Testing setFoodPreparationObservation', () => {
    let actionReturn = setFoodPreparationObservation();

    expect(actionReturn.payload).not.toBe('A água sanitária utilizada é própria para alimentos');
    expect(actionReturn.type).toBe(SET_FOODPREPARATIONOBSERVATION);

    actionReturn = setFoodPreparationObservation('A água sanitária utilizada é própria para alimentos');

    expect(actionReturn.payload).toBe('A água sanitária utilizada é própria para alimentos');
    expect(actionReturn.type).toBe(SET_FOODPREPARATIONOBSERVATION);
  });

  it('Testing setFoodPreparationReportPositive', () => {
    let actionReturn = setFoodPreparationReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_FOODPREPARATIONREPORT_POSITIVE);

    actionReturn = setFoodPreparationReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_FOODPREPARATIONREPORT_POSITIVE);
  });

  it('Testing setFoodPreparationReportNegative', () => {
    let actionReturn = setFoodPreparationReportNegative(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_FOODPREPARATIONREPORT_NEGATIVE);

    actionReturn = setFoodPreparationReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_FOODPREPARATIONREPORT_NEGATIVE);
  });

  it('Testing setWaterSewerSupplyObservation', () => {
    let actionReturn = setWaterSewerSupplyObservation();

    expect(actionReturn.payload).not.toBe('Fossas e esgotos conectados à rede pública');
    expect(actionReturn.type).toBe(SET_WATERSEWERSUPPLYOBSERVATION);

    actionReturn = setWaterSewerSupplyObservation('Fossas e esgotos conectados à rede pública');

    expect(actionReturn.payload).toBe('Fossas e esgotos conectados à rede pública');
    expect(actionReturn.type).toBe(SET_WATERSEWERSUPPLYOBSERVATION);
  });

  it('Testing setWaterSewerSupplyReportPositive', () => {
    let actionReturn = setWaterSewerSupplyReportPositive(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_WATERSEWERSUPPLYREPORT_POSITIVE);

    actionReturn = setWaterSewerSupplyReportPositive(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_WATERSEWERSUPPLYREPORT_POSITIVE);
  });

  it('Testing setWaterSewerSupplyReportNegative', () => {
    let actionReturn = setWaterSewerSupplyReportNegative(1);

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_WATERSEWERSUPPLYREPORT_NEGATIVE);

    actionReturn = setWaterSewerSupplyReportNegative(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_WATERSEWERSUPPLYREPORT_NEGATIVE);
  });

  it('Testing acceptedMenu', () => {
    let actionReturn = setAcceptedMenu();

    expect(actionReturn.payload).not.toBe('O cardápio mais aceito foi o que continha frango assado');
    expect(actionReturn.type).toBe(SET_ACCEPTEDMENU);

    actionReturn = setAcceptedMenu('O cardápio mais aceito foi o que continha frango assado');

    expect(actionReturn.payload).toBe('O cardápio mais aceito foi o que continha frango assado');
    expect(actionReturn.type).toBe(SET_ACCEPTEDMENU);
  });

  it('Testing refusedMenu', () => {
    let actionReturn = setRefusedMenu();

    expect(actionReturn.payload).not.toBe('O cardápio menos aceito foi o que continha frango assado');
    expect(actionReturn.type).toBe(SET_REFUSEDMENU);

    actionReturn = setRefusedMenu('O cardápio menos aceito foi o que continha frango assado');

    expect(actionReturn.payload).toBe('O cardápio menos aceito foi o que continha frango assado');
    expect(actionReturn.type).toBe(SET_REFUSEDMENU);
  });

  it('Testing setStatusFoodHandler', () => {
    let actionReturn = setStatusFoodHandler();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSFOODHANDLER);

    actionReturn = setStatusFoodHandler({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSFOODHANDLER);
  });

  it('Testing setStatusFoodPreparation', () => {
    let actionReturn = setStatusFoodPreparation();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSFOODPREPARATION);

    actionReturn = setStatusFoodPreparation({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSFOODPREPARATION);
  });

  it('Testing setStatusWaterSewerSupply', () => {
    let actionReturn = setStatusWaterSewerSupply();

    expect(actionReturn.payload).not.toBe({});
    expect(actionReturn.type).toBe(SET_STATUSWATERSEWERSUPPLY);

    actionReturn = setStatusWaterSewerSupply({});

    expect(actionReturn.payload).toEqual({ });
    expect(actionReturn.type).toBe(SET_STATUSWATERSEWERSUPPLY);
  });
});
