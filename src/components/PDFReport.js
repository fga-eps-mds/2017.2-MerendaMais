import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { CLOSE_TABLE, HEADER_DOC, HEADER_TABLE, CLOSE_BODY, OPEN_BODY, OPEN_TABLE, SECTIONS } from '../constants/reportPDF';

export default class PDFReport extends Component {
  constructor(props) {
    super(props);
  }

  async createPDF() {
    await this.getData();
    let options = {
      html: this.createDocument(),
      fileName: 'test',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
  }

  async getData() {
    let getData = {
      appToken : this.props.counselor.token,
      codPostagem : this.props.visitSchedule.codPostagem
    }
    await this.props.asyncGetCurrentPost(getData);
    console.log(this.props.reportResult);
  }

  createDocument() {

    let doc = HEADER_DOC + OPEN_BODY;

    Object.keys(this.props.reportResult).forEach((key) => {
      console.log(key);
      console.log(SECTIONS[key]);
      doc += this.generateSection(key);
    });

    doc += CLOSE_BODY;
    return doc;
  }

  generateSection(key) {
    let body = '';
    body += `<h2>${this.replaceDiacritics(SECTIONS[key])}</h2>`;
    if(key !== 'otherObservation'){
      body += this.generateTable(key);
    }
    body += this.generateObservation(key);
    body += '<br> <br>';
    return body;
  }

  generateObservation(key) {
    let observation = ''
    if (this.props.reportResult[key] !== '') {
      observation +='<b>Observacao:</b><br>'
      observation += this.props.reportResult.textObservation; 
    }
    return observation;
  }

  generateTable(key) {
    let table = OPEN_TABLE + HEADER_TABLE;
      this.props.reportResult[key].questions.map((item) => {
        const row = `
        <tr>
          <td>${item.question}</td>
          <td>${this.replaceDiacritics(item.label)}</td>
          <td>${this.replaceDiacritics(item.answer)}</td>
        </tr>`;
        table += row;
      });

    table+= CLOSE_TABLE;
    return table;
  }
  
  replaceDiacritics(str){

    var diacritics = [
      {char: 'A', base: /[\300-\306]/g},
      {char: 'a', base: /[\340-\346]/g},
      {char: 'E', base: /[\310-\313]/g},
      {char: 'e', base: /[\350-\353]/g},
      {char: 'I', base: /[\314-\317]/g},
      {char: 'i', base: /[\354-\357]/g},
      {char: 'O', base: /[\322-\330]/g},
      {char: 'o', base: /[\362-\370]/g},
      {char: 'U', base: /[\331-\334]/g},
      {char: 'u', base: /[\371-\374]/g},
      {char: 'N', base: /[\321]/g},
      {char: 'n', base: /[\361]/g},
      {char: 'C', base: /[\307]/g},
      {char: 'c', base: /[\347]/g}
    ]
  
    diacritics.map((letter) => {
      str = str.replace(letter.base, letter.char);
    });
  
    return str;
  };

  render() {
      return(
      <View>
        <TouchableOpacity 
          onPress={() => {this.createPDF()}}>
          <Text>Create PDF</Text>
        </TouchableOpacity>
      </View>
      );
  }
}


PDFReport.propTypes = {
  reportResult: PropTypes.shape({}).isRequired,
  asyncGetCurrentPost: PropTypes.func.isRequired,
  visitSchedule: PropTypes.shape({}).isRequired,
  counselor: PropTypes.shape({
  }).isRequired,
};