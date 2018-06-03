import { SCHOOL_SURROUNDINGS, WATER_SEWER_SUPPLY, FOOD_STOCK, DOCUMENTATION, FOOD_QUALITY, FOOD_HANDLER, REFECTORY, KITCHEN, FOOD_PREPARATION, OTHER_OBSERVATION } from "./generalConstants";

export const STYLE = `
    <style type="text/css" >
    table {
    border-collapse: collapse;
    }
    th {
    background-color: #C7C7C7;
    color: black;
    }
    </style>`;

export const HEADER_DOC = `<!DOCTYPE html><head>${STYLE}</head>`;

export const OPEN_TABLE = `<table style="width:100%;" border="1 solid">`;

export const CLOSE_TABLE = `</table>`;

export const HEADER_TABLE = `
    <tr>
    <th>ID</th>
    <th>Questao</th>
    <th>Situacao</th>
    </tr>
    `
export const OPEN_BODY = '<body>';
export const CLOSE_BODY = '</body>';

export const SECTIONS = {
    schoolSurroundings: SCHOOL_SURROUNDINGS,
    foodStock: FOOD_STOCK,
    doc: DOCUMENTATION,
    foodQuality: FOOD_QUALITY,
    foodHandler: FOOD_HANDLER,
    refectory: REFECTORY,
    waterSewerSupply: WATER_SEWER_SUPPLY,
    kitchen: KITCHEN,
    foodPreparation: FOOD_PREPARATION,
    otherObservation: OTHER_OBSERVATION,
};



 

