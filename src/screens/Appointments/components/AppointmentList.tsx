import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {IAppointment} from '@entities/appointment';
import {AppointmentCard} from '@components/Card';
import Typography from '@components/Typography';
import Button from '@components/Button';
import ClockIcon from '@components/Icon/Clock';
import getScalableSize from '@utils/getScalableSize';
import theme from '@theme';
import NavigationService from '@navigation/service';
import {SCREENS} from '@navigation';

interface AppointmentListProps {
  data: IAppointment[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({data}) => {
  function renderListEmpty() {
    return (
      <View style={styles.emptyWrapper}>
        <ClockIcon
          color={theme.colors.gray}
          width={getScalableSize.w(102)}
          height={getScalableSize.w(102)}
          style={{marginTop: getScalableSize.h(94)}}
        />
        <Typography
          variant="body1"
          style={{color: theme.colors.gray, marginTop: getScalableSize.h(30)}}>
          No appointments yet
        </Typography>
        <Button
          style={{marginTop: getScalableSize.h(200)}}
          variant="primary"
          label="Find a specialist"
          onPress={() => NavigationService.navigate(SCREENS.SEARCH_MAIN)}
        />
      </View>
    );
  }

  function renderAppointmentItem({item}: {item: IAppointment}) {
    return <AppointmentCard data={item} />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderAppointmentItem}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={renderListEmpty()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getScalableSize.w(20),
    paddingVertical: getScalableSize.h(20),
  },
  separator: {
    height: getScalableSize.h(20),
  },
  emptyWrapper: {
    paddingHorizontal: getScalableSize.w(68),
    alignItems: 'center',
  },
});

export default AppointmentList;
