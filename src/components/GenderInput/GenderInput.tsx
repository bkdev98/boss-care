import React, {useState, useEffect, useImperativeHandle, forwardRef} from 'react';
import {View, ViewStyle, LayoutAnimation, FlatList, Pressable, StyleSheet} from 'react-native';

import theme from '@theme';
import Typography from '@components/Typography';
import Button from '@components/Button';
import GenderMaleIcon from '@components/Icon/GenderMale';
import GenderFemaleIcon from '@components/Icon/GenderFemale';
import getScalableSize from '@utils/getScalableSize';

export type TGender = 'male' | 'female';

export interface GenderInputProps {
  label?: string;
  name?: string;
  error?: string;
  wrapperStyle?: ViewStyle;
  style?: ViewStyle;
  setFieldValue?: any;
  isFocused?: boolean;
  value?: TGender;
}

const GenderInput: React.FC<GenderInputProps> = forwardRef(
  ({label, wrapperStyle, style, error, value, setFieldValue}, ref: any) => {
    useEffect(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }, [error]);

    return (
      <>
        <View style={[wrapperStyle, styles.wrapper]}>
          <Typography
            animated
            style={{
              color: error ? theme.colors.danger : theme.colors.gray,
              fontSize: getScalableSize.f(13),
              transform: [{translateY: getScalableSize.h(7)}],
              marginLeft: getScalableSize.w(10),
            }}
            variant="inputLabel">
            {label}
          </Typography>
          <View style={[styles.container, style]}>
            <Button
              variant={value === 'male' ? 'primary' : 'white'}
              onPress={() => setFieldValue('male')}
              label="Male"
              leftIcon={<GenderMaleIcon isActive={value === 'male'} />}
              style={styles.optionItem}
              labelStyle={[
                styles.optionItemLabel,
                value === 'male' && styles.optionItemLabelSelected,
              ]}
              leftIconStyle={styles.optionItemIcon}
            />
            <Button
              variant={value === 'female' ? 'primary' : 'ghost'}
              onPress={() => setFieldValue('female')}
              label="Female"
              leftIcon={<GenderFemaleIcon isActive={value === 'female'} />}
              style={[styles.optionItem, value === 'female' && styles.optionItemFemale]}
              labelStyle={[
                styles.optionItemLabel,
                value === 'female' && styles.optionItemLabelSelected,
              ]}
              leftIconStyle={styles.optionItemIcon}
            />
          </View>
          <Typography
            variant="caption"
            style={[styles.helper, Boolean(error) && styles.helperShow]}>
            {error}
          </Typography>
        </View>
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: getScalableSize.h(34),
    marginBottom: getScalableSize.h(5),
    marginTop: getScalableSize.h(13),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  active: {
    borderBottomWidth: getScalableSize.h(2),
    borderBottomColor: theme.colors.violet,
  },
  default: {
    fontSize: getScalableSize.f(16),
    textAlignVertical: 'center',
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
    letterSpacing: 0.1,
  },
  wrapper: {
    borderRadius: getScalableSize.w(20),
    paddingTop: getScalableSize.h(0),
    paddingBottom: getScalableSize.h(8),
  },
  rightIconWrapper: {
    position: 'absolute',
    top: getScalableSize.h(32),
    right: getScalableSize.w(10),
    justifyContent: 'center',
    alignItems: 'center',
    padding: getScalableSize.w(6),
    borderRadius: 20,
    zIndex: 1,
  },
  helper: {
    height: 0,
    color: theme.colors.danger,
    marginLeft: getScalableSize.w(10),
  },
  helperShow: {
    height: 'auto',
  },
  optionItem: {
    marginHorizontal: getScalableSize.w(10),
    height: getScalableSize.h(32),
    flexGrow: 1,
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.background_neutral_2,
  },
  optionItemPressed: {
    backgroundColor: theme.colors.background_neutral_1,
  },
  optionItemLabel: {
    fontSize: getScalableSize.f(13),
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.text_title,
  },
  optionItemLabelSelected: {
    color: theme.colors.text_contrast,
  },
  optionItemIcon: {
    marginRight: getScalableSize.w(5),
  },
  optionItemFemale: {
    backgroundColor: '#FD90AA',
  },
});

export default GenderInput;
