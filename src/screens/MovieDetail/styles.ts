import {StyleSheet, Dimensions} from 'react-native';

import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

const {width} = Dimensions.get('window');

const BACKDROP_WIDTH = width;
const BACKDROP_HEIGHT = width + getScalableSize.h(60);
const POSTER_HEIGHT = BACKDROP_HEIGHT - getScalableSize.h(100);
const POSTER_WIDTH = (POSTER_HEIGHT / 16) * 10;

export default StyleSheet.create({
  backBtn: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginHorizontal: getScalableSize.w(20),
    marginVertical: getScalableSize.h(20),
    zIndex: 1,
  },
  backdrop: {
    width: BACKDROP_WIDTH,
    height: BACKDROP_HEIGHT,
    resizeMode: 'cover',
    backgroundColor: theme.colors.background_neutral_2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: BACKDROP_WIDTH,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    backgroundColor: theme.colors.background_neutral_2,
    opacity: 0.5,
  },
  posterWrapper: {
    width: POSTER_WIDTH,
    height: POSTER_HEIGHT,
    overflow: 'visible',
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {width: 5, height: 5},
  },
  poster: {
    top: getScalableSize.h(20),
    width: POSTER_WIDTH,
    height: POSTER_HEIGHT,
    resizeMode: 'cover',
    backgroundColor: theme.colors.background_neutral_2,
    borderRadius: 10,
  },
  content: {
    paddingHorizontal: getScalableSize.w(20),
    paddingVertical: getScalableSize.h(20),
  },
  movieTitle: {
    color: theme.colors.text_title,
    fontSize: getScalableSize.f(24),
    marginBottom: getScalableSize.h(5),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  movieReleaseDate: {
    color: theme.colors.text_subTitle,
    fontSize: getScalableSize.f(20),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  actions: {
    marginVertical: getScalableSize.h(20),
    flexDirection: 'row',
  },
  actionBtn: {
    height: getScalableSize.h(42),
    borderRadius: getScalableSize.h(42 / 2),
    flexGrow: 1,
  },
  actionDivider: {
    width: getScalableSize.w(10),
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: getScalableSize.h(20),
    borderBottomWidth: getScalableSize.h(1),
    borderBottomColor: theme.colors.background_neutral_2,
  },
  voteWrapper: {
    borderColor: theme.colors.background_neutral_2,
    borderWidth: getScalableSize.w(4),
    width: getScalableSize.w(50),
    height: getScalableSize.w(50),
    borderRadius: getScalableSize.w(50 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaItemWrapper: {
    alignItems: 'center',
  },
  metaItemCount: {
    textAlign: 'center',
    marginBottom: getScalableSize.h(4),
  },
  metaItemLabel: {
    textAlign: 'center',
  },
  sectionTitle: {
    color: theme.colors.text_title,
    marginBottom: getScalableSize.h(10),
    marginTop: getScalableSize.h(20),
  },
  detail: {},
  genre: {
    marginEnd: getScalableSize.w(10),
  },
});
