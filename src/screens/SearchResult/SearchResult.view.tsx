import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import theme from '@theme';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Typography from '@components/Typography';
import Button from '@components/Button';
import MapPinIcon from '@components/Icon/MapPin';
import SegmentedControl from '@components/SegmentedControl';

interface SearchResultViewProps {}

const SearchResultView: React.FC<SearchResultViewProps> = ({}) => {
  const [segmentedIndex, setSegmentedIndex] = useState(0);

  function renderSegmentedControl() {
    return (
      <SegmentedControl
        style={styles.segmentedControl}
        values={['Specialists', 'Clinics']}
        selectedIndex={segmentedIndex}
        onChange={(index) => setSegmentedIndex(index)}
      />
    );
  }

  function renderMapButton() {
    return <Button size="small" variant="ghost" leftIcon={<MapPinIcon />} label="Map" />;
  }

  return (
    <Layout>
      <Header showBack renderTitle={renderSegmentedControl()} rightButton={renderMapButton()} />
      <Typography>Search result</Typography>
    </Layout>
  );
};

const styles = StyleSheet.create({
  segmentedControl: {
    flex: 1,
    flexGrow: 3,
  },
});

export default SearchResultView;
