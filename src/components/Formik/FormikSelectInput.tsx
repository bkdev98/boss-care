import {
  // withNextInputAutoFocusInput,
  withFormikControl,
} from 'react-native-formik';
import {compose} from 'recompose';

import SelectInput from '@components/SelectInput';
import {SelectInputProps} from '@components/SelectInput/SelectInput';

interface FormikSelectInputProps extends SelectInputProps {
  name: string;
}

export default compose<SelectInputProps, FormikSelectInputProps>(
  withFormikControl,
  // withNextInputAutoFocusInput,
)(SelectInput);
