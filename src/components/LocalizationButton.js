import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import openMap from 'react-native-open-maps';
import styles from '../Styles';

class LocalizationButton extends React.PureComponent {
  goToMap = () => {
    openMap({ latitude: this.props.visit.visitLat, longitude: this.props.visit.visitLong });
  }

  render() {
    return (
      <View key="localizationButton">
        <Text style={{ color: '#95a5a6', fontSize: 20 }}>Localização: </Text>
        <TouchableOpacity
          onPress={() => this.goToMaps()}
          style={styles.buttonMap}
          activeOpacity={0.7}
        // <Image source={Location} />
        >
          <Text style={styles.buttonText}>Ver no Mapa</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LocalizationButton.propTypes = {
  visit: PropTypes.shape({
    visitLat: PropTypes.number.isRequired,
    visitLong: PropTypes.number.isRequired,
  }).isRequired,
};

export default LocalizationButton;
