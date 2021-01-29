import React from 'react';
import {View, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

import textStyles from '@components/Typography/styles';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';

const HTMLView = ({htmlContent}: {htmlContent: string}) => {
  return (
    <HTML
      source={{html: htmlContent}}
      listsPrefixesRenderers={{
        ul: () => {
          return <View style={styles.bullet} />;
        },
      }}
      tagsStyles={{
        h4: {
          ...textStyles.h4,
          marginBottom: getScalableSize.h(16),
        },
        p: {
          ...textStyles.body3,
          marginBottom: getScalableSize.h(24),
          letterSpacing: 0.2,
          lineHeight: getScalableSize.h(18),
        },
        li: {
          ...textStyles.body3,
          letterSpacing: 0.2,
          lineHeight: getScalableSize.h(18),
          marginBottom: getScalableSize.h(12),
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  bullet: {
    width: getScalableSize.h(8),
    height: getScalableSize.h(8),
    borderRadius: getScalableSize.h(8 / 2),
    backgroundColor: theme.colors.orange,
    marginRight: getScalableSize.w(8),
    marginTop: getScalableSize.h(6),
    marginLeft: -getScalableSize.w(18),
  },
});

export default HTMLView;
