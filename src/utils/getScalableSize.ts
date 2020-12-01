import {Dimensions} from 'react-native';

const {width: DEVICE_SCREEN_WIDTH, height: DEVICE_SCREEN_HEIGHT} = Dimensions.get('screen');

const DESIGN_SCREEN_WIDTH = 375;
const DESIGN_SCREEN_HEIGHT = 812;

const widthPercent = DEVICE_SCREEN_WIDTH / DESIGN_SCREEN_WIDTH;
const heightPercent = DEVICE_SCREEN_HEIGHT / DESIGN_SCREEN_HEIGHT;

function getWidth(designWidth: number): number {
  const result = designWidth * widthPercent;
  return Number(result.toFixed(1));
}

function getHeight(designHeight: number): number {
  const result = designHeight * heightPercent;
  return Number(result.toFixed(1));
}

function getFontSize(designSize: number): number {
  return getWidth(designSize);
}

export default {
  w: getWidth,
  h: getHeight,
  f: getFontSize,
};
