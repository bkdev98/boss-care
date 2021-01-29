import React from 'react';
import {StyleSheet, View, TouchableOpacity, ViewStyle} from 'react-native';
import moment from 'moment';

import Typography from '@components/Typography';
import Avatar from '@components/Avatar';
import Rating from '@components/Rating';
import Button from '@components/Button';
import WalletIcon from '@components/Icon/Wallet';
import WorkIcon from '@components/Icon/Work';
import ClockIcon from '@components/Icon/Clock';
import MapPinIcon from '@components/Icon/MapPin';
import {IAppointment} from '@entities/appointment';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import NavigationService from '@navigation/service';
import {SCREENS} from '@navigation';

interface AppointmentCardProps {
  data: IAppointment;
  style?: ViewStyle;
  disabled?: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({data, style, disabled}) => {
  function handlePress() {
    NavigationService.push(SCREENS.SERVICE_DETAIL, {data: data.specialist});
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.wrapper, style]}
      onPress={handlePress}
      disabled={disabled}>
      <View style={styles.container}>
        <Avatar uri={data.specialist.avatar} variant="smoothFull" />
        <View style={styles.meta}>
          <Typography variant="h3">{data.specialist.name}</Typography>
          <Typography variant="h5">{data.specialist.specialities}</Typography>
          <View style={styles.ratingWrapper}>
            <Rating rating={data.specialist.rating} totalReview={data.specialist.totalReview} />
          </View>
          <View style={styles.extra}>
            <View style={styles.extraItem}>
              <View style={styles.extraIcon}>
                <MapPinIcon color={theme.colors.black} width={18} height={18} />
              </View>
              <Typography variant="caption" style={styles.extraTxt}>
                {data.specialist.meterFromHere} km
              </Typography>
            </View>
            <View style={styles.extraItem}>
              <View style={styles.extraIcon}>
                <WalletIcon />
              </View>
              <Typography variant="caption" style={styles.extraTxt}>
                ${data.specialist.startPrice}
              </Typography>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.detailWrapper}>
        <View style={styles.addressWrapper}>
          <View style={styles.detailIconWrapper}>
            <WorkIcon width={22} height={22} />
          </View>
          <View style={styles.grow}>
            <Typography variant="h5">{data.specialist.address?.name}</Typography>
            <Typography variant="body3">{data.specialist.address?.location}</Typography>
          </View>
        </View>
        <View style={styles.dateWrapper}>
          <View style={styles.detailIconWrapper}>
            <ClockIcon width={24} height={24} opacity={1} color={theme.colors.black} />
          </View>
          <View>
            <Typography variant="h5" style={{fontFamily: theme.fonts.regular}}>
              {moment(data.date).format('ddd D MMM [at] hh:mm a')}
            </Typography>
          </View>
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <Button label="Edit" variant="primary" style={styles.actionBtn} />
        <View style={{width: getScalableSize.w(15)}} />
        <Button label="Cancel" style={styles.actionBtn} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: getScalableSize.w(20),
    paddingTop: getScalableSize.h(20),
    paddingBottom: getScalableSize.h(24),
    backgroundColor: theme.colors.background,
    borderRadius: getScalableSize.w(16),
  },
  container: {
    flexDirection: 'row',
  },
  extraItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: getScalableSize.w(12),
  },
  detailWrapper: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: getScalableSize.w(16),
    paddingHorizontal: getScalableSize.w(16),
    paddingVertical: getScalableSize.h(16),
    marginTop: getScalableSize.h(14),
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getScalableSize.h(8),
  },
  extraIcon: {
    width: getScalableSize.w(24),
    height: getScalableSize.w(24),
    borderRadius: getScalableSize.w(24 / 2),
    backgroundColor: theme.colors.lightGray2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraTxt: {
    fontFamily: theme.fonts.medium,
    marginLeft: getScalableSize.w(6),
  },
  meta: {
    marginLeft: getScalableSize.w(20),
  },
  ratingWrapper: {
    marginTop: getScalableSize.h(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionWrapper: {
    marginTop: getScalableSize.h(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    color: theme.colors.gray,
  },
  actionBtn: {
    flex: 1,
    flexGrow: 1,
  },
  addressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getScalableSize.h(8),
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIconWrapper: {
    backgroundColor: theme.colors.lightGray2,
    width: getScalableSize.w(36),
    height: getScalableSize.w(36),
    borderRadius: getScalableSize.w(36 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: getScalableSize.w(16),
  },
  grow: {flex: 1, flexGrow: 1},
});

export default AppointmentCard;
