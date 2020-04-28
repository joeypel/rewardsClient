import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons
        name={props.name}
        // size={34}
        style={{ fontSize: 40, marginLeft: 10, }}
        color='black'
      />
    </TouchableOpacity>
  );
};

export default CustomHeaderButton;
