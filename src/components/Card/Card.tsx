import React from 'react';
import {StyleSheet, View, TouchableOpacity, ViewStyle} from 'react-native';

import Typography from '@components/Typography';
import Avatar from '@components/Avatar';
import Rating from '@components/Rating';
import WalletIcon from '@components/Icon/Wallet';
import MapPinIcon from '@components/Icon/MapPin';
import {ISpecialist} from '@entities/specialist';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import NavigationService from '@navigation/service';
import {SCREENS} from '@navigation';

interface CardProps {
  data: ISpecialist;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({data, style}) => {
  function handlePress() {
    NavigationService.push(SCREENS.SERVICE_DETAIL, {data});
  }

  return (
    <TouchableOpacity activeOpacity={1} style={[styles.wrapper, style]} onPress={handlePress}>
      <View style={styles.container}>
        <Avatar uri={data.avatar} variant="smoothMedium" />
        <View style={styles.meta}>
          <Typography variant="h3">{data.name}</Typography>
          <Typography variant="h5">{data.specialities}</Typography>
          <View style={styles.ratingWrapper}>
            <Rating rating={data.rating} totalReview={data.totalReview} />
          </View>
        </View>
      </View>
      <View style={styles.extra}>
        <Typography variant="h5" style={styles.caption}>
          {data.experienceYears}
        </Typography>
        <Typography variant="caption" style={styles.caption}>
          {' years of experience'}
        </Typography>
        <View style={styles.extraItem}>
          <View style={styles.extraIcon}>
            <MapPinIcon color={theme.colors.black} width={18} height={18} />
          </View>
          <Typography variant="caption" style={styles.extraTxt}>
            {data.meterFromHere} km
          </Typography>
        </View>
        <View style={styles.extraItem}>
          <View style={styles.extraIcon}>
            <WalletIcon />
          </View>
          <Typography variant="caption" style={styles.extraTxt}>
            ${data.startPrice}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: getScalableSize.w(16),
    paddingTop: getScalableSize.h(16),
    paddingBottom: getScalableSize.h(8),
    backgroundColor: theme.colors.background,
    borderRadius: getScalableSize.w(16),
  },
  container: {
    flexDirection: 'row',
  },
  extraItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getScalableSize.w(12),
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
  caption: {
    color: theme.colors.gray,
  },
});

export default Card;
