import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ImageInput from './ImageInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../../../config/colors';
import { useFormikContext } from 'formik';

const SubmitFormTopSection = ({ isModalVisible, toggleModal }) => {
  const { handleSubmit } = useFormikContext();

  // blow are event handler

  const handleCancelEdit = () => {
    toggleModal();
  };

  return (
    <View style={styles.buttonImageContainer}>
      {/* only when modal is open the cancel button is pressable */}
      <TouchableOpacity disabled={!isModalVisible} onPress={handleCancelEdit}>
        <MaterialCommunityIcons name='close' size={30} color={colors.primary} />
      </TouchableOpacity>

      {/* Form Field for image */}
      <ImageInput name='image' />

      {/* only when modal is open the save button is pressable */}
      <TouchableOpacity onPress={handleSubmit} disabled={!isModalVisible}>
        <MaterialCommunityIcons name='check' size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonImageContainer: {
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    height: '45%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width,
  },
});

export default SubmitFormTopSection;
