import React, {useState} from 'react';
import {View, FlatList, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import moment from 'moment';

import {SCREENS} from '@navigation';
import NavigationService from '@navigation/service';
import {RootState} from '@reducers';

import Layout from '@components/Layout';
import Header from '@components/Header';
import SegmentedControl from '@components/SegmentedControl';
import Button from '@components/Button';
import Typography from '@components/Typography';
import {IAppointment} from '@entities/appointment';

import AppointmentList from './components/AppointmentList';

import styles from './styles';

interface AppointmentsViewProps {}

const initialLayout = {width: Dimensions.get('window').width};

const AppointmentsView: React.FC<AppointmentsViewProps> = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const list = useSelector((state: RootState) => state.appointment.list);

  const [routes] = useState([
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'past', title: 'Past'},
  ]);

  const upcomingList = list.filter((item: IAppointment) =>
    moment(item.date).isSameOrAfter(moment()),
  );
  const pastList = list.filter((item: IAppointment) => moment(item.date).isBefore(moment()));

  const renderScene = SceneMap({
    upcoming: () => <AppointmentList data={upcomingList} />,
    past: () => <AppointmentList data={pastList} />,
  });

  return (
    <Layout style={styles.wrapper}>
      <StatusBar translucent={false} />
      <Header title="Appointments" style={styles.header} />
      <View style={styles.headerWrapper}>
        <SegmentedControl
          size="large"
          values={['Upcoming', 'Past']}
          selectedIndex={tabIndex}
          onChange={setTabIndex}
        />
      </View>
      <TabView
        navigationState={{index: tabIndex, routes}}
        renderScene={renderScene}
        onIndexChange={setTabIndex}
        initialLayout={initialLayout}
        renderTabBar={() => null}
      />
    </Layout>
  );
};

export default AppointmentsView;
