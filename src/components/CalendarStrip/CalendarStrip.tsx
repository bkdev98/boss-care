import React from 'react';
import {StyleSheet} from 'react-native';
import RNCalendarStrip from 'react-native-calendar-strip';

import theme from '@theme';
import textStyles from '@components/Typography/styles';
import getScalableSize from '@utils/getScalableSize';

const CalendarStrip = () => {
  return (
    <RNCalendarStrip
      style={styles.wrapper}
      scrollable
      iconStyle={styles.navIcon}
      calendarHeaderStyle={styles.headerStyle}
      calendarHeaderContainerStyle={styles.headerContainer}
      dateNameStyle={styles.dateName}
      dateNumberStyle={styles.dateNumber}
      highlightDateNameStyle={styles.dateName}
      highlightDateNumberStyle={styles.dateNumber}
      dayContainerStyle={styles.dayContainer}
      styleWeekend={false}
      // innerStyle={[]}
      highlightDateContainerStyle={styles.highlightContainer}
    />
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    // height: getScalableSize.h(72),
    // paddingBottom: 0,
    borderRadius: 0,
    marginBottom: 0,
  },
  dateName: {
    ...textStyles.body3,
    fontSize: getScalableSize.f(11),
    transform: [{translateY: getScalableSize.h(23)}],
  },
  dateNumber: {
    ...textStyles.h3,
    color: theme.colors.violet,
    transform: [{translateY: -getScalableSize.h(15)}],
    // paddingTop: 10,
  },
  wrapper: {height: getScalableSize.h(114)},
  headerContainer: {
    paddingHorizontal: getScalableSize.w(16),
    paddingVertical: getScalableSize.h(26),
    borderBottomWidth: 1,
    textAlignVertical: 'center',
    borderBottomColor: theme.colors.lightGray2,
    flexDirection: 'row',
  },
  navIcon: {width: 0, height: 0},
  headerStyle: {
    ...textStyles.h5,
    alignSelf: 'flex-start',
  },
  highlightContainer: {
    // height: getScalableSize.h(72),
    borderRadius: 0,
    borderTopWidth: getScalableSize.h(4),
    borderTopColor: theme.colors.violet,
    backgroundColor: theme.colors.background_neutral_1,
  },
});

export default CalendarStrip;
