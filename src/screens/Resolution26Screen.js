import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Header from '../components/Header';
import {
  CONTENT,
  SELECTORS } from '../resolutionNumber26';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class Resolution26Screen extends Component {
  static renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  static renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }

  state = {
    activeSection: false,
    collapsed: true,
  };

  setSection(section) {
    this.setState({ activeSection: section });
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }


  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          title={'Legislação'}
          backButton
        />

        <View style={styles.selectors}>
          <Text style={styles.selectTitle}>Select:</Text>
          {SELECTORS.map(selector => (
            <TouchableHighlight
              key={selector.title}
              onPress={() => this.setSection(selector.value)}
            >
              <View style={styles.selector}>
                <Text style={selector.value === this.state.activeSection && styles.activeSelector}>
                  {selector.title}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>

        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          renderHeader={Resolution26Screen.renderHeader}
          renderContent={Resolution26Screen.renderContent}
          duration={400}
          onChange={section => this.setSection(section)}
        />

      </ScrollView>
    );
  }
}

// export default LegislationScreen;
