import React, { Component } from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

class PDFReport extends Component {
  async createPDF() {
    let options = {
      html: `<h1>PDF TEST</h1>
      <table style="width:100%">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </table>
    `,
      fileName: 'test',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
  }

  render() {
      return(
    <View>
      <TouchableHighlight onPress={this.createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
      );
  }
}

export default PDFReport;