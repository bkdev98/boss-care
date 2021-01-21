import {
  // withNextInputAutoFocusInput,
  withFormikControl,
} from 'react-native-formik';
import {compose} from 'recompose';

import GenderInput from '@components/GenderInput';
import {GenderInputProps} from '@components/GenderInput/GenderInput';

interface FormikGenderInputProps extends GenderInputProps {
  name: string;
}

export default compose<GenderInputProps, FormikGenderInputProps>(
  withFormikControl,
  // withNextInputAutoFocusInput,
)(GenderInput);
