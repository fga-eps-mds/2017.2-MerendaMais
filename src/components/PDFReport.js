import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { CLOSE_TABLE, HEADER_DOC, HEADER_TABLE, CLOSE_BODY, OPEN_BODY, OPEN_TABLE, SECTIONS } from '../constants/reportPDF';


const buttonBoxStyle = StyleSheet.create({
  design: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: '#4cd964',
    padding: 8,
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },

  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default class PDFReport extends Component {
  constructor(props) {
    super(props);
  }

  async createPDF() {
    await this.getData();
    const doc = await this.createDocument();
    console.log(doc);
    let options = {
      html: doc,
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
  }

  async createDocument() {

    let doc = HEADER_DOC + OPEN_BODY;

    doc += this.generateHeader();

    await Object.keys(this.props.reportResult).forEach((key) => {
      console.log(key);
      doc += this.generateSection(key);
    });

    doc += CLOSE_BODY;
    return doc;
  }

  generateHeader () {
    let header = OPEN_TABLE; 
    header += `<tr><td><b>Escola:</b></td> <td>${this.replaceDiacritics(this.props.visitSchedule.content.schoolName)}</td></tr>`;
    header += `<tr><td><b>Data:</b></td> <td>${this.props.visitSchedule.content.date.replace('-', '//')}</td></tr>`;
    header += `<tr><td><b>Conselheiro:</b></td> <td>${this.props.counselor.name}</td></tr>`;
    header += CLOSE_TABLE;
    return header;
  }

  generateSection(key) {
    let body = '';
    if(key !== 'otherObservation'){
      body += `<h2>${this.replaceDiacritics(SECTIONS[key])}</h2>`;
      body += `<b>${this.props.reportResult[key].status ? 'Concluido' : 'Nao Concluido'}</b>`
      body += this.generateTable(key)
      body += this.generateObservation(key);
      if(key === 'foodQuality') {
        if(this.props.reportResult[key].additionalData.acceptedMenu !== '' &&
           this.props.reportResult[key].additionalData.acceptedMenu !== undefined) {
             body += "<h4>Menu Aceito<h4>"
             body += `<p align="justify">${this.props.reportResult[key].additionalData.acceptedMenu}</p>`
        } else if(this.props.reportResult[key].additionalData.refusedMenu !== '' &&
                  this.props.reportResult[key].additionalData.refusedMenu !== undefined) {
          body += "<h4>Menu Recusado<h4>"
          body += `<p align="justify">${this.props.reportResult[key].additionalData.refusedMenu}</p>`
        }
      }
    } else {
      if(this.props.reportResult[key].textObservation !== '' &&
         this.props.reportResult[key].textObservation !== undefined) {
        body += `<h2>${this.replaceDiacritics(SECTIONS[key])}</h2>`;
        body += `<b>${this.props.reportResult[key].status ? 'Concluido' : 'Nao Concluido'}</b>`
        body += this.generateObservation(key);
      }
    }
    body += '<br> <br>';
    return body;
  }

  generateObservation(key) {
    let observation = '';
    if (this.props.reportResult[key].textObservation !== '' && 
        this.props.reportResult[key].textObservation !== undefined) {
      observation +='<h4>Observacoes:</h4><br>'
      observation += '<div text-align="justify">' + this.props.reportResult[key].textObservation + '</div>'; 
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
          style={buttonBoxStyle.design}
          onPress={() => {this.createPDF()}}>
          <Text style={buttonBoxStyle.text}>Gerar PDF</Text>
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