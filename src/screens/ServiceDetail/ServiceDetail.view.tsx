import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, StatusBar, Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

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
import Button from 'components/Button';

const TIMES = [
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

interface IBookingData {
  date: Date | null;
  time: string | null;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({data}) => {
  const insets = useSafeAreaInsets();
  const [scrollY] = useState(new Animated.Value(0));
  const [bookingData, setBookingData] = useState<IBookingData>({date: null, time: null});

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
          <CalendarStrip />
          <TimeStrip
            selected={bookingData.time}
            onSelect={(time) => setBookingData({...bookingData, time})}
            times={TIMES}
            style={styles.timeStrip}
          />
        </View>

        <Typography variant="h3" style={{marginBottom: getScalableSize.h(16)}}>
          Biography
        </Typography>
        <Typography variant="body3" style={{marginBottom: getScalableSize.h(24)}}>
          Alekseenko Vasily Vasilyevich, born in 1974 Master of Veterinary Medicine Leading doctor
          Veterinary clinic "Alden-Vet" Specialization: clinical diagnostics, surgery vet, dentist
        </Typography>
        <Typography variant="h4" style={{marginBottom: getScalableSize.h(16)}}>
          Education
        </Typography>
        <Typography variant="body3" style={{marginBottom: getScalableSize.h(24)}}>
          Before entering the agricultural Academy he worked at the department of surgery of the
          veterinary faculty (1991-1992). He graduated from the Faculty of Veterinary Medicine of
          NAU in 1997. He defended his thesis at the Department of Surgery on the topic: "Surgery on
          the urinary organs of cats." Scientific advisor prof. Borisevich V.B. In 1998 graduated
          from the Magistracy.
        </Typography>
        <Typography variant="h4" style={{marginBottom: getScalableSize.h(16)}}>
          Personal information
        </Typography>
        <Typography variant="body3" style={{marginBottom: getScalableSize.h(24)}}>
          Candidate master of sports in equestrian sport (dressage). Favorite breed of dog is German
          Shepherd. He is married, has two children: daughter Alika and son Timur.
        </Typography>
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
    paddingVertical: getScalableSize.h(72),
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
});

export default ServiceDetailView;
