import React from 'react';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import moment from 'moment';

import {IAppointment} from '@entities/appointment';
import Layout from '@components/Layout';
import ClockIcon from '@components/Icon/Clock';
import CheckIcon from '@components/Icon/BookSuccess';
import Typography from '@components/Typography';
import Button from '@components/Button';
import theme from '@theme';
import getScalableSize from '@utils/getScalableSize';
import NavigationService from '@navigation/service';
import {SCREENS} from '@navigation';

interface BookResultViewProps {
  appointment: IAppointment;
}

const BookResultView: React.FC<BookResultViewProps> = ({appointment}) => {
  const insets = useSafeAreaInsets();

  return (
    <Layout withoutSafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={theme.colors.blueViolet}
        start={{x: 0, y: 0}}
        end={{x: 0.9, y: 0.5}}
        style={[styles.wrapper]}>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            },
          ]}>
          <View style={styles.checkWrapper}>
            <CheckIcon />
          </View>
          <Typography variant="h2" style={styles.title}>
            Your appointment has been booked
          </Typography>
          <Typography variant="body1" style={styles.description}>
            {appointment.specialist.name} will be waiting for you and your pet
          </Typography>
          <View style={styles.dateWrapper}>
            <ClockIcon />
            <Typography variant="h5" style={styles.dateTxt}>
              {moment(appointment.date).format('ddd D MMM [at] hh:mm a')}
            </Typography>
          </View>
          <Button
            label="+ Add appointment to calendar"
            variant="ghostWhite"
            size="small"
            labelStyle={styles.addToCalendarLabel}
            style={styles.addToCalendarBtn}
          />
          <Button
            label="Go to my appointments"
            variant="primary"
            style={styles.goToAppointmentBtn}
            onPress={() => NavigationService.navigate(SCREENS.APPOINTMENTS)}
          />
        </ScrollView>
      </LinearGradient>
    </Layout>
  );
};

const styles = StyleSheet.create({
  checkWrapper: {
    width: getScalableSize.w(114),
    height: getScalableSize.w(114),
    borderRadius: getScalableSize.w(114 / 2),
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: getScalableSize.h(80),
  },
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(62),
  },
  title: {
    color: theme.colors.text_contrast,
    marginBottom: getScalableSize.h(16),
    textAlign: 'center',
  },
  description: {
    color: theme.colors.text_contrast,
    marginBottom: getScalableSize.h(32),
    textAlign: 'center',
  },
  dateWrapper: {
    height: getScalableSize.h(32),
    borderRadius: getScalableSize.h(32 / 2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getScalableSize.w(16),
    marginBottom: getScalableSize.h(8),
    backgroundColor: 'rgba(71, 45, 164, 0.6)',
  },
  dateTxt: {color: theme.colors.text_contrast, marginLeft: getScalableSize.w(8)},
  addToCalendarBtn: {
    marginBottom: getScalableSize.h(80),
  },
  addToCalendarLabel: {opacity: 0.8, fontFamily: theme.fonts.regular},
  goToAppointmentBtn: {
    borderWidth: 2,
    borderColor: theme.colors.background,
  },
});

export default BookResultView;
