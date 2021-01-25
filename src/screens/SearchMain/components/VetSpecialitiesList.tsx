import React from 'react';
import {SectionList, Pressable, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import theme from '@theme';
import Typography from '@components/Typography';
import {RootState} from '@reducers';
import {hideModalize} from '@actions';
import getScalableSize from '@utils/getScalableSize';
import NavigationService from '@navigation/service';
import {SCREENS} from '@navigation';

interface VetSpecialitiesListProps {}

const VetSpecialitiesList: React.FC<VetSpecialitiesListProps> = ({}) => {
  const vetSpecialties = useSelector((state: RootState) => state.app.vetSpecialties);
  const dispatch = useDispatch();

  const listData = [
    {
      title: 'Popular Specialties',
      data: vetSpecialties.filter((item) => item.isPopular),
    },
    {
      title: 'All Specialties',
      data: vetSpecialties.filter((item) => !item.isPopular),
    },
  ];

  return (
    <SectionList
      sections={listData}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item) => item.key}
      renderItem={({item}) => (
        <Pressable
          onPress={() => {
            dispatch(hideModalize());
            NavigationService.navigate(SCREENS.SEARCH_RESULT);
          }}
          style={({pressed}) => [styles.itemWrapper, pressed && styles.itemWrapperPressed]}>
          <Typography variant="body2">{item.label}</Typography>
        </Pressable>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Typography variant="overline" style={styles.title}>
          {title}
        </Typography>
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.orange,
    marginVertical: getScalableSize.h(6),
    marginHorizontal: getScalableSize.w(20),
  },
  listContainer: {},
  itemWrapper: {
    paddingHorizontal: getScalableSize.w(20),
    height: getScalableSize.h(30),
    justifyContent: 'center',
  },
  itemWrapperPressed: {
    backgroundColor: theme.colors.background_neutral_1,
  },
});

export default VetSpecialitiesList;
