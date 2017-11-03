import React from 'react';
import { View, Text } from 'react-native';

const SchoolData = school => (
  <View>
    <Text>
      Nome Escola: {school.schoolName}
    </Text>
    <Text>
      Email: {school.schoolEmail}
    </Text>
    <Text>
      Telefone: {school.schoolPhone}
    </Text>
  </View>
);

export default SchoolData;
