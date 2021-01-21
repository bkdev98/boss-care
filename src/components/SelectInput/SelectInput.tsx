import React, {useState, useEffect, useImperativeHandle, forwardRef} from 'react';
import {View, ViewStyle, LayoutAnimation, FlatList, Pressable, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {Portal} from 'react-native-portalize';

import theme from '@theme';
import Typography from '@components/Typography';
import Button from '@components/Button';
import Modalization from '@components/Modalization';
import SelectArrowIcon from '@components/Icon/SelectArrow';
import CheckIcon from '@components/Icon/Check';
import getScalableSize from '@utils/getScalableSize';

import styles from './styles';

export interface ISelectOption {
  key: string;
  label: string;
}

export interface SelectInputProps {
  label?: string;
  name?: string;
  error?: string;
  wrapperStyle?: ViewStyle;
  style?: ViewStyle;
  setFieldValue?: any;
  isFocused?: boolean;
  value?: ISelectOption | Date;
  placeholder?: string;
  options?: ISelectOption[] | 'dates';
  onSelect?: any;
  onSubmitEditing?: any;
}

const SelectInput: React.FC<SelectInputProps> = forwardRef(
  (
    {
      label,
      wrapperStyle,
      style,
      error,
      value,
      setFieldValue,
      placeholder = 'Select',
      options = [],
      onSelect,
      onSubmitEditing,
      isFocused,
    },
    ref: any,
  ) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }, [error]);

    useEffect(() => {
      isFocused && onShowOptions();
    }, [isFocused]);

    useImperativeHandle(ref, () => ({
      focus: () => {
        !value && setTimeout(() => onShowOptions(), 1000);
      },
    }));

    function renderOption({item}: {item: ISelectOption}) {
      const isSelected = value?.key === item.key;

      function onSelectItem() {
        onSelect?.(item);
        setFieldValue(item);
        setIsActive(false);
        onSubmitEditing?.();
      }

      return (
        <Pressable
          onPress={onSelectItem}
          style={({pressed}) => [
            styles.optionItem,
            (pressed || isSelected) && styles.optionItemPressed,
          ]}>
          <Typography>{item.label}</Typography>
          {isSelected && <CheckIcon color={theme.colors.violet} />}
        </Pressable>
      );
    }

    function onShowOptions() {
      setIsActive(true);
    }

    function renderRightIcon() {
      return (
        <View style={styles.rightIconWrapper}>
          <SelectArrowIcon width={getScalableSize.w(10)} height={getScalableSize.w(10)} />
        </View>
      );
    }

    return (
      <>
        <Pressable
          onPress={onShowOptions}
          style={({pressed}) => [
            wrapperStyle,
            (pressed || isActive) && {backgroundColor: theme.colors.palegray},
            styles.wrapper,
          ]}>
          <Typography
            animated
            style={{
              color: error
                ? theme.colors.danger
                : isActive
                ? theme.colors.violet
                : theme.colors.gray,
              fontSize: getScalableSize.f(13),
              transform: [{translateY: getScalableSize.h(7)}],
            }}
            variant="inputLabel">
            {label}
          </Typography>
          <View style={[styles.container, style, (isActive || Boolean(value)) && styles.active]}>
            <Typography style={[styles.default, style]}>
              {(options === 'dates' && !!value ? moment(value).format('ll') : value?.label) ||
                placeholder}
            </Typography>
          </View>
          {renderRightIcon()}
          <Typography
            variant="caption"
            style={[styles.helper, Boolean(error) && styles.helperShow]}>
            {error}
          </Typography>
        </Pressable>
        <Portal>
          {Platform.OS === 'ios' || options !== 'dates' ? (
            <Modalization
              useInternalProps
              open={isActive}
              title={label}
              onClose={() => setIsActive(false)}
              content={
                options === 'dates' ? (
                  <View>
                    {isActive && (
                      <DateTimePicker
                        value={value || new Date()}
                        mode="date"
                        display="spinner"
                        onChange={(_, newDate) => {
                          setFieldValue(newDate || value);
                        }}
                        onTouchCancel={() => setIsActive(false)}
                      />
                    )}
                    <Button
                      label="Done"
                      variant="primary"
                      style={styles.doneBtn}
                      onPress={() => {
                        setIsActive(false);
                        onSubmitEditing?.();
                      }}
                    />
                  </View>
                ) : (
                  <FlatList data={options} renderItem={renderOption} />
                )
              }
            />
          ) : (
            <View>
              {isActive && (
                <DateTimePicker
                  value={value || new Date()}
                  mode="date"
                  display="default"
                  onChange={(_, newDate) => {
                    setFieldValue(newDate || value);
                    setIsActive(false);
                    onSubmitEditing?.();
                  }}
                  onTouchCancel={() => setIsActive(false)}
                />
              )}
            </View>
          )}
        </Portal>
      </>
    );
  },
);

export default SelectInput;
