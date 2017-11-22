import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap, TabBar } from 'react-native-tab-view';
import StartPendingInspectionContainer from '../Containers/StartPendingInspectionContainer';
import StartExpiredInspectionContainer from '../Containers/StartExpiredInspectionContainer';
import Header from '../components/Header';
import StartAlreadyInspectionedInspectionContainer from '../Containers/StartAlreadyInspectionedInspectionContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Principal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Pendentes' },
        { key: 'second', title: 'Fiscalizados' },
        { key: 'third', title: 'Expirados' },
      ],
    };
  }

  handleIndexChange = index => this.setState({ index });

  renderFooter = props => <TabBar style={{ backgroundColor: '#FF9500', borderTopWidth: 1, borderBottomColor: 'black' }} tabStyle={{ paddingHorizontal: -0 }} {...props} />;

  renderHeader = props => <Header title={'Visitas Agendadas'} backButton {...props} />

  renderScene = SceneMap({
    first: StartPendingInspectionContainer,
    second: StartAlreadyInspectionedInspectionContainer,
    third: StartExpiredInspectionContainer,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter}
        renderScene={this.renderScene}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}
