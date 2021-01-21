import React from 'react';
import {StyleSheet} from 'react-native';

import {takePhoto, selectPhoto} from '@utils/imagePicker';

import SelectInput from '@components/SelectInput';
import {ISelectOption} from 'components/SelectInput/SelectInput';

const OPTIONS = [
  {
    key: 'takePhoto',
    label: 'Take a photo',
  },
  {
    key: 'selectPhoto',
    label: 'Select from gallery',
  },
];

interface ImagePickerProps {
  open: boolean;
  label?: string;
  onSelect: (uri: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({label, onSelect, open}) => {
  function handleResponse(uri: string) {
    onSelect(uri);
  }

  function handleSelect(selected: ISelectOption) {
    if (selected.key === 'takePhoto') {
      takePhoto(handleResponse);
    } else if (selected.key === 'selectPhoto') {
      selectPhoto(handleResponse);
    }
  }

  return (
    <SelectInput
      isFocused={open}
      label={label || 'Select photo'}
      options={OPTIONS}
      onSelect={handleSelect}
      wrapperStyle={styles.hidden}
    />
  );
};

const styles = StyleSheet.create({
  hidden: {height: 0, overflow: 'hidden'},
});

export default ImagePicker;
