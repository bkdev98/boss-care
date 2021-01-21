import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Pressable} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import {Portal} from 'react-native-portalize';
import {Formik} from 'formik';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import {IReminder} from '@entities/reminder';
import {reminderValidationSchema} from '@utils/validationSchema';
import Modalization from '@components/Modalization';
import {
  FormikForm,
  FormikSelectInput,
  FormikTextInput,
  FormikSwitchInput,
} from '@components/Formik';
import Button from '@components/Button';

import Typography from '@components/Typography';
import PlusIcon from '@components/Icon/Plus';
import CalendarIcon from '@components/Icon/Calendar';

interface ReminderInputListProps {
  data: any[];
  onChange?: (event: any) => void;
}

const PERIOD_UNITS = [
  {
    key: 'day',
    label: 'Day',
  },
  {
    key: 'week',
    label: 'Week',
  },
  {
    key: 'month',
    label: 'Month',
  },
  {
    key: 'year',
    label: 'Year',
  },
];

const ReminderInputList: React.FC<ReminderInputListProps> = ({data, onChange}) => {
  const [selected, setSelected] = useState<IReminder | null | {}>(null);

  function renderReminderItem({item}: {item: IReminder}) {
    return (
      <Pressable onPress={() => setSelected(item)} style={styles.reminderItem}>
        <CalendarIcon
          width={getScalableSize.w(40)}
          height={getScalableSize.w(40)}
          color={theme.colors.violet}
        />
        <Typography variant="h5" style={styles.itemName}>
          {item.name}
        </Typography>
        <Typography variant="body3" style={styles.itemTime}>
          {moment(item.time).format('L')}
        </Typography>
      </Pressable>
    );
  }

  function renderAddReminder() {
    return (
      <Pressable
        onPress={() => setSelected({})}
        style={({pressed}) => [
          styles.reminderItem,
          styles.reminderAddItem,
          pressed && styles.remiderItemPressed,
        ]}>
        <View style={styles.plusIconWrapper}>
          <LinearGradient colors={theme.colors.blueViolet} style={styles.plusIcon}>
            <PlusIcon style={theme.effects.blueShadow} />
          </LinearGradient>
        </View>
        <Typography variant="h5">Add event</Typography>
      </Pressable>
    );
  }

  function handleSubmit(values: any) {
    if ((selected as IReminder).id) {
      onChange?.(
        data.map((item) =>
          item.id === (selected as IReminder)?.id
            ? {id: (selected as IReminder)?.id, ...values}
            : item,
        ),
      );
    } else {
      const newReminder = {id: Date.now(), ...values};
      onChange?.([...data, newReminder]);
    }
    setSelected(null);
  }

  function handleDelete() {
    onChange?.(data.filter((item) => item.id !== (selected as IReminder).id));
    setSelected(null);
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderReminderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderAddReminder}
        style={styles.reminderList}
        contentContainerStyle={styles.reminderListContainer}
      />
      <Portal>
        <Modalization
          useInternalProps
          open={selected !== null}
          title="Reminder event"
          onClose={() => setSelected(null)}
          content={
            <Formik
              initialValues={{
                name: (selected as IReminder)?.name || '',
                isOnce: (selected as IReminder)?.isOnce || true,
                time: (selected as IReminder)?.time || new Date(),
                periodNumber: (selected as IReminder)?.periodNumber || 1,
                periodUnit: (selected as IReminder)?.periodUnit || 'day',
              }}
              validationSchema={reminderValidationSchema}
              onSubmit={handleSubmit}>
              {(formikProps) => (
                <FormikForm style={styles.formWrapper}>
                  <FormikTextInput
                    name="name"
                    label="Event's name"
                    wrapperStyle={styles.formInput}
                    autoCapitalize="words"
                    autoFocus
                    returnKeyType="next"
                  />
                  <FormikSelectInput
                    name="time"
                    label="Date"
                    wrapperStyle={styles.formInput}
                    options="dates"
                  />
                  <FormikSwitchInput
                    label="One-time event"
                    name="isOnce"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  {!formikProps.values.isOnce && (
                    <View style={styles.row}>
                      <FormikTextInput
                        name="periodNumber"
                        label="Remind each"
                        wrapperStyle={styles.formInputInline}
                        keyboardType="number-pad"
                        returnKeyType="next"
                      />
                      <FormikSelectInput
                        name="periodUnit"
                        label="Period unit"
                        wrapperStyle={styles.formInputInline}
                        options={PERIOD_UNITS}
                      />
                    </View>
                  )}
                  <Button
                    label="Save"
                    variant="primary"
                    style={styles.saveBtn}
                    // disabled={loading}
                    onPress={formikProps.handleSubmit}
                  />
                  {(selected as IReminder)?.id && (
                    <Button
                      label="Delete"
                      variant="ghost"
                      style={styles.saveBtn}
                      onPress={handleDelete}
                      labelStyle={{color: theme.colors.text_danger}}
                    />
                  )}
                </FormikForm>
              )}
            </Formik>
          }
        />
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  reminderItem: {
    width: getScalableSize.w(120),
    height: getScalableSize.h(144),
    borderRadius: getScalableSize.w(16),
    backgroundColor: theme.colors.background,
    marginRight: getScalableSize.w(16),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getScalableSize.w(10),
    ...theme.effects.plahaShadow,
  },
  reminderAddItem: {
    backgroundColor: theme.colors.lightGray2,
  },
  reminderList: {
    marginHorizontal: -getScalableSize.w(20),
    paddingVertical: getScalableSize.h(24),
  },
  reminderListContainer: {
    paddingHorizontal: getScalableSize.w(20),
  },
  plusIcon: {
    width: getScalableSize.w(40),
    height: getScalableSize.w(40),
    borderRadius: getScalableSize.w(40 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
  plusIconWrapper: {
    shadowColor: 'rgba(69, 82, 203, 0.4)',
    shadowRadius: 7,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 15},
    elevation: 3,
    marginBottom: getScalableSize.h(15),
  },
  remiderItemPressed: {
    backgroundColor: theme.colors.lightGray,
  },
  formInput: {
    marginBottom: getScalableSize.h(5),
  },
  formInputInline: {
    marginBottom: getScalableSize.h(5),
    flexGrow: 1,
    flex: 1,
  },
  switchInput: {
    marginBottom: getScalableSize.h(24),
  },
  formWrapper: {
    paddingHorizontal: getScalableSize.w(10),
  },
  saveBtn: {
    marginHorizontal: getScalableSize.w(10),
    marginBottom: getScalableSize.h(16),
  },
  itemName: {textAlign: 'center', marginTop: getScalableSize.h(5)},
  itemTime: {color: theme.colors.gray, marginTop: getScalableSize.h(3), textAlign: 'center'},
});

export default ReminderInputList;
