import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../components/Header';
import ManageNotAcceptedRegistersScreenContainer from '../../Containers/manageCounselors/ManageNotAcceptedRegistersScreenContainer';
import ManageAcceptedRegistersScreenContainer from '../../Containers/manageCounselors/ManageAcceptedRegistersScreenContainer';

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
        { key: 'first', title: 'Não gerenciados' },
        { key: 'second', title: 'Validados' },
      ],
    };
  }

  handleIndexChange = index => this.setState({ index });

  renderFooter = props => <TabBar style={{ backgroundColor: '#FF9500', borderTopWidth: 1, borderBottomColor: 'black' }} tabStyle={{ paddingHorizontal: -0 }} {...props} />;

  renderHeader = props => <Header title={'Gerenciar Registro'} backButton {...props} />

  renderScene = SceneMap({
    first: ManageNotAcceptedRegistersScreenContainer,
    second: ManageAcceptedRegistersScreenContainer,
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
