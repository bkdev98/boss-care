import React from 'react';
import {StyleSheet} from 'react-native';

import Layout from '@components/Layout';
import Typography from '@components/Typography';

const WIP = () => {
  return (
    <Layout style={styles.wrapper}>
      <Typography variant="h2" style={styles.title}>
        WORKING IN PROGRESS
      </Typography>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    opacity: 0.2,
    transform: [
      {
        rotate: '-30deg',
      },
    ],
  },
});

export default WIP;
