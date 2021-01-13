import React, {forwardRef} from 'react';
import {StyleSheet, View, Switch, SwitchProps, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';

export interface SwitchInputProps extends SwitchProps {
  wrapperStyle?: ViewStyle | ViewStyle[];
  label?: string;
  value?: boolean;
  onSelect?: any;
  setFieldValue?: any;
  onSubmitEditing?: any;
}

const SwitchInput: React.FC<SwitchInputProps> = forwardRef(
  ({label, value, setFieldValue, wrapperStyle}, ref: any) => {
    return (
      <View style={[styles.wrapper, wrapperStyle]}>
        <Typography variant="body1">{label}</Typography>
        <Switch
          value={value}
          onValueChange={setFieldValue}
          trackColor={{true: theme.colors.violet, false: theme.colors.background}}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getScalableSize.w(10),
  },
});

export default SwitchInput;
