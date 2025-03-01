import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {bookAppointment} from '@actions';
import theme from '@theme';
import NavigationService from '@navigation/service';
import {ISpecialist} from '@entities/specialist';
import getScalableSize from '@utils/getScalableSize';
import BackIcon from '@components/Icon/ArrowLeft';
import ShareIcon from '@components/Icon/Share';
import HeartIcon from '@components/Icon/Heart';
import IconButton from '@components/IconButton';
import Typography from '@components/Typography';
import CalendarStrip from '@components/CalendarStrip';
import Rating from '@components/Rating';
import TimeStrip from '@components/TimeStrip';
import WalletIcon from '@components/Icon/Wallet';
import MapPinIcon from '@components/Icon/MapPin';
import HintSuccessIcon from '@components/Icon/HintSuccess';
import WriteReviewIcon from '@components/Icon/WriteReview';
import ArrowRightIcon from '@components/Icon/ArrowRight';
import WorkIcon from '@components/Icon/Work';
import Button from '@components/Button';
import HTMLView from '@components/HTMLView';
import {IAppointment} from '@entities/appointment';
import {SCREENS} from '@navigation';

import NearbyList from './components/NearbyList';
import ReviewList from './components/ReviewList';
import BookModal from './components/BookModal';
import {SPECIALISTS} from '../SearchResult/dump';
import {DETAIL} from './dump';

export const TIMES = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
];

interface ServiceDetailViewProps {
  data: ISpecialist;
  detail?: any;
}

export interface IBookingData {
  date: Date | null;
  time: string | null;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({data}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [scrollY] = useState(new Animated.Value(0));
  const [bookingData, setBookingData] = useState<IBookingData>({date: null, time: null});

  function handleBook(appointment: IAppointment) {
    dispatch(bookAppointment(appointment));
    setBookingData({date: null, time: null});
    NavigationService.push(SCREENS.BOOK_RESULT, {appointment});
  }

  const headerOverlayOpacity = scrollY.interpolate({
    inputRange: [0, getScalableSize.h(100), getScalableSize.h(420 - 70 - 44)],
    outputRange: [0, 0, 0.4],
    extrapolate: 'clamp',
  });

  const avatarTranslateY = scrollY.interpolate({
    inputRange: [0, getScalableSize.h(420)],
    outputRange: [0, -getScalableSize.h(420)],
    extrapolate: 'clamp',
  });

  const avatarScale = scrollY.interpolate({
    inputRange: [-getScalableSize.h(420), 0],
    outputRange: [2, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Animated.ScrollView
        style={styles.listWrapper}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
          useNativeDriver: true,
        })}
        contentContainerStyle={styles.listContainer}>
        <View style={styles.metaWrapper}>
          <View>
            <Typography variant="h3" style={{marginVertical: getScalableSize.h(3)}}>
              {data.name}
            </Typography>
            <Typography variant="h5" style={{marginBottom: getScalableSize.h(3)}}>
              {data.specialities}
            </Typography>
            <Typography variant="body3" style={{color: theme.colors.gray}}>
              {data.experienceYears} years of experience
            </Typography>
            <View style={styles.extra}>
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
          </View>
          <View style={styles.metaRight}>
            <View style={styles.metaRatingWrapper}>
              <LinearGradient colors={theme.colors.blueViolet} style={styles.metaRating}>
                <Typography variant="h1" style={styles.ratingTxt}>
                  {data.rating}
                </Typography>
              </LinearGradient>
            </View>
            <Typography variant="caption">{data.totalReview} reviews</Typography>
          </View>
        </View>

        <View style={styles.reviewWrapper}>
          <Typography variant="body1" style={{marginBottom: getScalableSize.h(8)}}>
            “He was friendly and diligent in getting to the right diagnosis and presciption.”{' '}
          </Typography>
          <View style={[styles.inline, {marginBottom: getScalableSize.h(4)}]}>
            <Typography
              variant="body3"
              style={{color: theme.colors.gray, marginRight: getScalableSize.w(10)}}>
              a verified review
            </Typography>
            <HintSuccessIcon />
          </View>
          <View style={[styles.row]}>
            <Rating rating={5} />
            <Button size="small" label={`View all ${data.totalReview} reviews`} variant="ghost" />
          </View>
        </View>

        <View style={styles.infoCard}>
          <CalendarStrip
            selected={bookingData.date}
            onSelect={(date) => setBookingData({...bookingData, date})}
          />
          <TimeStrip
            selected={bookingData.time}
            onSelect={(time) => setBookingData({...bookingData, time})}
            times={TIMES}
            style={styles.timeStrip}
          />
        </View>

        <View
          style={[
            styles.infoCard,
            {paddingVertical: getScalableSize.h(5), paddingHorizontal: getScalableSize.w(5)},
          ]}>
          <View style={styles.addressHeader}>
            <View style={styles.workIconWrapper}>
              <WorkIcon />
            </View>
            <View style={styles.grow}>
              <Typography variant="h5">{DETAIL.address.name}</Typography>
              <Typography variant="body3">{DETAIL.address.location}</Typography>
            </View>
          </View>
          <View style={styles.mapWrapper} />
        </View>

        <Typography variant="h3" style={{marginBottom: getScalableSize.h(16)}}>
          Biography
        </Typography>
        <HTMLView htmlContent={DETAIL.biography} />

        <View style={[styles.row, {marginBottom: getScalableSize.h(16)}]}>
          <Typography variant="h3">Reviews</Typography>
          <Button
            label={`View all ${data.totalReview} reviews`}
            size="small"
            variant="ghost"
            rightIcon={<ArrowRightIcon />}
          />
        </View>
        <ReviewList data={DETAIL.reviews} style={styles.reviewList} />

        <Button
          label="Write a Review"
          variant="ghost"
          style={styles.writeReviewBtn}
          leftIcon={<WriteReviewIcon />}
        />

        <Typography variant="h3" style={{marginBottom: getScalableSize.h(16)}}>
          Nearby vet
        </Typography>
        <NearbyList data={SPECIALISTS} style={styles.nearbyList} />
      </Animated.ScrollView>
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top,
            height: getScalableSize.h(44) + insets.top,
          },
        ]}>
        <Animated.View style={[styles.headerOverlay, {opacity: headerOverlayOpacity}]} />
        <IconButton onPress={NavigationService.goBack}>
          <BackIcon />
        </IconButton>
        <View style={styles.inline}>
          <IconButton style={styles.actionBtn}>
            <ShareIcon />
          </IconButton>
          <IconButton style={styles.actionBtn}>
            <HeartIcon />
          </IconButton>
        </View>
      </View>
      <Animated.Image
        style={[styles.avatar, {transform: [{translateY: avatarTranslateY}, {scale: avatarScale}]}]}
        source={{uri: 'https://i.imgur.com/DRTfscA.png'}}
      />
      <BookModal
        data={data}
        detail={DETAIL}
        bookingData={bookingData}
        setBookingData={setBookingData}
        onBook={handleBook}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
  },
  header: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getScalableSize.w(8),
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.black,
    opacity: 0,
  },
  avatar: {
    height: getScalableSize.h(420),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.background_neutral_1,
  },
  listWrapper: {
    flex: 1,
    zIndex: 1,
  },
  listContainer: {
    paddingTop: getScalableSize.h(420 - 70),
    paddingHorizontal: getScalableSize.w(20),
    paddingBottom: getScalableSize.h(72 + 60),
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionBtn: {
    width: getScalableSize.w(40),
    height: getScalableSize.w(40),
    borderRadius: getScalableSize.w(40 / 2),
  },
  extraItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: getScalableSize.w(12),
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
  metaWrapper: {
    paddingLeft: getScalableSize.w(20),
    paddingRight: getScalableSize.w(16),
    paddingTop: getScalableSize.h(8),
    paddingBottom: getScalableSize.h(5),
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: getScalableSize.w(16),
    marginBottom: getScalableSize.h(32),
    ...theme.effects.plahaShadow,
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getScalableSize.h(8),
  },
  metaRating: {
    width: getScalableSize.w(64),
    height: getScalableSize.w(64),
    borderRadius: getScalableSize.w(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaRatingWrapper: {
    width: getScalableSize.w(64),
    height: getScalableSize.w(64),
    borderRadius: getScalableSize.w(20),
    marginBottom: getScalableSize.h(10),
    backgroundColor: theme.colors.background,
    overflow: 'visible',
    ...theme.effects.plahaShadow,
  },
  ratingTxt: {
    color: theme.colors.text_contrast,
    fontSize: getScalableSize.f(28),
    letterSpacing: 1,
  },
  metaRight: {
    alignItems: 'center',
  },
  reviewWrapper: {
    marginBottom: getScalableSize.h(32),
  },
  infoCard: {
    height: getScalableSize.h(202),
    borderRadius: getScalableSize.w(16),
    backgroundColor: theme.colors.background,
    marginBottom: getScalableSize.h(32),
    ...theme.effects.roundIconShadow,
  },
  timeStrip: {
    marginTop: getScalableSize.h(16),
  },
  nearbyList: {
    marginHorizontal: -getScalableSize.w(20),
  },
  reviewList: {
    marginHorizontal: -getScalableSize.w(20),
    marginBottom: getScalableSize.h(24),
  },
  writeReviewBtn: {
    backgroundColor: theme.colors.lightGray2,
    borderRadius: getScalableSize.w(9),
    marginBottom: getScalableSize.h(34),
  },
  addressHeader: {
    height: getScalableSize.h(59),
    flexDirection: 'row',
    alignItems: 'center',
  },
  workIconWrapper: {
    backgroundColor: theme.colors.lightGray2,
    width: getScalableSize.w(36),
    height: getScalableSize.w(36),
    borderRadius: getScalableSize.w(36 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: getScalableSize.w(11),
    marginRight: getScalableSize.w(16),
  },
  mapWrapper: {
    backgroundColor: theme.colors.lightGray2,
    flex: 1,
    flexGrow: 1,
    borderBottomLeftRadius: getScalableSize.w(10),
    borderBottomRightRadius: getScalableSize.w(10),
  },
  grow: {flex: 1, flexGrow: 1},
});

export default ServiceDetailView;
