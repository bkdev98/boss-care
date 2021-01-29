import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNCalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import theme from '@theme';
import textStyles from '@components/Typography/styles';
import getScalableSize from '@utils/getScalableSize';
import CalendarIcon from '@components/Icon/Calendar';

interface CalendarStripProps {
  selected?: Date | null;
  onSelect?: (date: Date) => void;
}

const CalendarStrip: React.FC<CalendarStripProps> = ({selected, onSelect}) => {
  return (
    <RNCalendarStrip
      style={styles.wrapper}
      scrollable
      selectedDate={selected ? moment(selected) : undefined}
      onDateSelected={(date) => onSelect?.(date.toDate())}
      iconStyle={styles.navIcon}
      calendarHeaderStyle={styles.headerStyle}
      calendarHeaderContainerStyle={styles.headerContainer}
      dateNameStyle={styles.dateName}
      dateNumberStyle={styles.dateNumber}
      markedDates={[
        {
          date: moment(),
          dots: [
            {
              color: theme.colors.violet,
            },
          ],
        },
      ]}
      markedDatesStyle={{top: getScalableSize.h(10)}}
      highlightDateNameStyle={styles.dateName}
      highlightDateNumberStyle={styles.dateNumber}
      dayContainerStyle={styles.dayContainer}
      styleWeekend={false}
      // innerStyle={[]}
      highlightDateContainerStyle={styles.highlightContainer}
      dayComponentHeight={getScalableSize.h(72)}
      renderCustomHeader={(text, style) => (
        <View style={styles.headerTextContainer}>
          <View style={styles.calendarIconWrapper}>
            <CalendarIcon color={theme.colors.black} />
          </View>
          <Text style={style}>{text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  calendarIconWrapper: {
    backgroundColor: theme.colors.lightGray2,
    width: getScalableSize.w(36),
    height: getScalableSize.w(36),
    borderRadius: getScalableSize.w(36 / 2),
    marginRight: getScalableSize.w(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    // paddingBottom: 0,
    height: getScalableSize.h(72),
    borderRadius: 0,
    marginBottom: 0,
    paddingTop: getScalableSize.h(4),
  },
  dateName: {
    ...textStyles.body3,
    fontSize: getScalableSize.f(11),
    transform: [{translateY: getScalableSize.h(25)}],
  },
  dateNumber: {
    ...textStyles.h3,
    color: theme.colors.violet,
    transform: [{translateY: -getScalableSize.h(20)}],
    // paddingTop: 10,
  },
  wrapper: {height: getScalableSize.h(72 + 67)},
  headerContainer: {
    paddingHorizontal: getScalableSize.w(16),
    height: getScalableSize.h(67),
    borderBottomWidth: 1,
    textAlignVertical: 'center',
    borderBottomColor: theme.colors.lightGray2,
    flexDirection: 'row',
  },
  navIcon: {width: 0, height: 0},
  headerStyle: {
    ...textStyles.h5,
    alignSelf: 'flex-start',
    lineHeight: getScalableSize.h(67),
  },
  highlightContainer: {
    borderRadius: 0,
    borderTopWidth: getScalableSize.h(4),
    borderTopColor: theme.colors.violet,
    // backgroundColor: theme.colors.background_neutral_1,
    paddingTop: 0,
  },
});

export default CalendarStrip;
