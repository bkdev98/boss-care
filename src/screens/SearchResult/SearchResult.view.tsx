import React, {useState} from 'react';
import {StyleSheet, View, Platform, StatusBar, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import theme from '@theme';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Button from '@components/Button';
import MapPinIcon from '@components/Icon/MapPin';
import SearchIcon from '@components/Icon/Search';
import CalendarIcon from '@components/Icon/Calendar';
import FilterIcon from '@components/Icon/Filter';
import SegmentedControl from '@components/SegmentedControl';
import {FinderPressable} from '@components/Finder';
import getScalableSize from '@utils/getScalableSize';
import ResultList from './components/ResultList';
import {SPECIALISTS} from './dump';

interface SearchResultViewProps {}

const initialLayout = {width: Dimensions.get('window').width};

const SearchResultView: React.FC<SearchResultViewProps> = ({}) => {
  const [segmentedIndex, setSegmentedIndex] = useState(0);
  const [routes] = useState([
    {key: 'specialists', title: 'Specialists'},
    {key: 'clinics', title: 'Clinics'},
  ]);

  const renderScene = SceneMap({
    specialists: () => <ResultList data={SPECIALISTS} />,
    clinics: () => <ResultList data={SPECIALISTS} />,
  });

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
    <Layout withInsets={Platform.OS === 'android'} style={styles.wrapper}>
      <StatusBar translucent={false} backgroundColor={theme.colors.background} />
      <Header
        showBack
        renderTitle={renderSegmentedControl()}
        rightButton={renderMapButton()}
        style={styles.header}
      />
      <View style={styles.finderWrapper}>
        <FinderPressable
          style={styles.finder}
          title="Veterinary"
          description="near me"
          renderIcon={<SearchIcon color={theme.colors.black} />}
        />
      </View>
      <View style={styles.filterWrapper}>
        <View style={styles.filterLeft}>
          <Button
            label="9 Sep"
            leftIcon={<CalendarIcon color={theme.colors.text_contrast} />}
            leftIconStyle={styles.filterIcon}
            variant="filter"
            style={styles.filterBtn}
          />
          <Button label="Dentist" variant="filter" />
        </View>
        <Button
          label="Filter"
          variant="filterGhost"
          leftIcon={<FilterIcon color={theme.colors.text_contrast} />}
          leftIconStyle={styles.filterIcon}
        />
      </View>
      <TabView
        navigationState={{index: segmentedIndex, routes}}
        renderScene={renderScene}
        onIndexChange={setSegmentedIndex}
        initialLayout={initialLayout}
        renderTabBar={() => null}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.lightGray,
  },
  header: {
    backgroundColor: theme.colors.background,
  },
  finderWrapper: {
    backgroundColor: theme.colors.background,
  },
  segmentedControl: {
    flex: 1,
    flexGrow: 3,
  },
  finder: {
    marginHorizontal: getScalableSize.w(20),
    marginTop: getScalableSize.h(10),
  },
  filterWrapper: {
    paddingVertical: getScalableSize.h(16),
    paddingHorizontal: getScalableSize.w(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: getScalableSize.w(34),
    borderBottomRightRadius: getScalableSize.w(34),
    backgroundColor: theme.colors.background,
    position: 'absolute',
    left: 0,
    right: 0,
    top: getScalableSize.h(48 + 44),
    zIndex: 1,
    ...theme.effects.plahaShadow,
    elevation: 0,
  },
  filterLeft: {
    flexDirection: 'row',
    flexGrow: 1,
    flex: 1,
  },
  filterBtn: {
    marginRight: getScalableSize.w(16),
  },
  filterIcon: {
    marginRight: getScalableSize.w(10),
  },
  scene: {
    flex: 1,
  },
});

export default SearchResultView;
