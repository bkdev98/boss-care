import React from 'react';
import {StyleSheet, View, TouchableOpacity, ViewStyle} from 'react-native';
import moment from 'moment';

import Typography from '@components/Typography';
import Avatar from '@components/Avatar';
import Rating from '@components/Rating';
import HintSuccessIcon from '@components/Icon/HintSuccess';
import {IReview} from '@entities/specialist';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
// import NavigationService from '@navigation/service';
// import {SCREENS} from '@navigation';

interface ReviewCardProps {
  data: IReview;
  style?: ViewStyle;
}

const ReviewCard: React.FC<ReviewCardProps> = ({data, style}) => {
  function handlePress() {
    // NavigationService.push(SCREENS.SERVICE_DETAIL, {data});
  }

  return (
    <TouchableOpacity activeOpacity={1} style={[styles.wrapper, style]} onPress={handlePress}>
      <View style={styles.container}>
        <Avatar uri={data.user.avatar} variant="smoothMedium" wrapperStyle={styles.avatar} />
        <View style={styles.meta}>
          <Typography variant="h4" numberOfLines={1}>
            {data.user.name}
          </Typography>
          <View style={styles.ratingWrapper}>
            <Rating rating={data.rating} />
          </View>
        </View>
      </View>
      <Typography variant="body3" numberOfLines={4}>
        {data.comment}
      </Typography>
      <View style={[styles.row, {marginTop: getScalableSize.h(8)}]}>
        <View style={styles.inline}>
          <Typography variant="h6" style={{marginRight: getScalableSize.w(7)}}>
            a verified review
          </Typography>
          <HintSuccessIcon />
        </View>
        <Typography variant="h6" style={styles.caption}>
          {moment(data.createdAt).format('DD.MM.YYYY')}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginTop: -getScalableSize.h(20 + 12),
  },
  wrapper: {
    width: getScalableSize.w(260),
    marginTop: getScalableSize.h(20),
    paddingHorizontal: getScalableSize.w(20),
    paddingTop: getScalableSize.h(12),
    paddingBottom: getScalableSize.h(16),
    backgroundColor: theme.colors.background,
    borderRadius: getScalableSize.w(16),
    ...theme.effects.roundIconShadow,
  },
  meta: {
    marginLeft: getScalableSize.w(10),
    flex: 1,
    flexGrow: 1,
  },
  ratingWrapper: {
    marginTop: getScalableSize.h(4),
  },
  caption: {
    color: theme.colors.gray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    marginBottom: getScalableSize.h(16),
  },
});

export default ReviewCard;
