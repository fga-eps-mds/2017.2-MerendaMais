import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap, TabBar } from 'react-native-tab-view';
import StartPendingInspectionContainer from '../Containers/StartPendingInspectionContainer';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const ThirdRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

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
    second: FirstRoute,
    third: ThirdRoute,
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
