import { setFoodStockObservation, setStockFoodReport } from '../../src/actions/reportActions';
import { SET_STOCKFOODOBSERVATION, SET_STOCKFOODREPORT } from '../../src/actions/types';

describe('Testing reportActions', () => {
  it('Testing setFoodStockObservation', () => {
    let actionReturn = setFoodStockObservation();

    expect(actionReturn.payload).not.toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_STOCKFOODOBSERVATION);

    actionReturn = setFoodStockObservation('Estoque sujo.');

    expect(actionReturn.payload).toBe('Estoque sujo.');
    expect(actionReturn.type).toBe(SET_STOCKFOODOBSERVATION);
  });

  it('Testing setFoodStockReport', () => {
    let actionReturn = setStockFoodReport();

    expect(actionReturn.payload).not.toBe(1);
    expect(actionReturn.type).toBe(SET_STOCKFOODREPORT);

    actionReturn = setStockFoodReport(1);

    expect(actionReturn.payload).toEqual({ key: 1 });
    expect(actionReturn.type).toBe(SET_STOCKFOODREPORT);
  });
});
