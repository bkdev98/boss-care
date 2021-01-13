import {withNextInputAutoFocusInput, withFormikControl} from 'react-native-formik';
import {compose} from 'recompose';

import SwitchInput from '@components/SwitchInput';
import {SwitchInputProps} from '@components/SwitchInput/SwitchInput';

interface FormikSwitchInputProps extends SwitchInputProps {
  name: string;
}

export default compose<SwitchInputProps, FormikSwitchInputProps>(
  withFormikControl,
  withNextInputAutoFocusInput,
)(SwitchInput);
