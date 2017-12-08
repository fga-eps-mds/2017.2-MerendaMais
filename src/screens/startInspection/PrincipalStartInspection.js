import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap, TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import StartPendingInspectionContainer from '../../Containers/startInspection/StartPendingInspectionContainer';
import StartExpiredInspectionContainer from '../../Containers/startInspection/StartExpiredInspectionContainer';
import Header from '../../components/Header';
import StartAlreadyInspectionedInspectionContainer from '../../Containers/startInspection/StartAlreadyInspectionedInspectionContainer';

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

  renderHeader = props => <Header title={'Visitas Agendadas'} backButton {...props} backTo={() => Actions.mainScreen()} />

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
