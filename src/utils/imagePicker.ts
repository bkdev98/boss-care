import {Alert /** Platform  */} from 'react-native';
import {launchImageLibrary, launchCamera, ImageLibraryOptions} from 'react-native-image-picker';

const OPTIONS: ImageLibraryOptions = {
  quality: 1,
  maxHeight: 600,
  maxWidth: 600,
  includeBase64: true,
  noData: true,
};

const handleResponse = (response: any, callback: any) => {
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    Alert.alert('Error:', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button:', response.customButton);
  } else {
    console.log(response);
    callback(`data:image/jpeg;base64,${response.base64}`);
    // const data = {
    //   name: response.fileName || 'photo',
    //   uri:
    //     Platform.OS === 'android'
    //       ? response.uri
    //       : response.uri.replace('file://', ''),
    //   type: response.type,
    // };
    // callback(data);
  }
};

export const selectPhoto = (callback: any) => {
  launchImageLibrary(OPTIONS, (response: any) => handleResponse(response, callback));
};

export const takePhoto = (callback: any) => {
  launchCamera(OPTIONS, (response: any) => handleResponse(response, callback));
};
