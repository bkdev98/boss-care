import {
  handleTextInput,
  withNextInputAutoFocusInput,
  // withFocus,
  // withFormikControl
} from 'react-native-formik';
import {compose} from 'recompose';

import TextInput from '@components/TextInput';
import {TextInputProps} from '@components/TextInput/TextInput';

interface FormikTextInputProps extends TextInputProps {
  name: string;
}

export default compose<TextInputProps, FormikTextInputProps>(
  handleTextInput,
  // withFocus,
  withNextInputAutoFocusInput,
  // withFormikControl,
)(TextInput);
