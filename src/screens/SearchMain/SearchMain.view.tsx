import React, {useEffect} from 'react';
import {Text, FlatList, View, Pressable, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Layout from '@components/Layout';
import Button from '@components/Button';
import Typography from '@components/Typography';
import IconButton from '@components/IconButton';

import SearchIcon from '@components/Icon/Search';
import VetIcon from '@components/Icon/Vet';
import GroomingIcon from '@components/Icon/Grooming';
import BoardingIcon from '@components/Icon/Boarding';
import AdoptionIcon from '@components/Icon/Adoption';
import DogWalkingIcon from '@components/Icon/DogWalking';
import TrainingIcon from '@components/Icon/Training';
import TaxiIcon from '@components/Icon/Taxi';
import DateIcon from '@components/Icon/Date';
import OtherServiceIcon from '@components/Icon/OtherService';

import theme from '@theme';

import styles from './styles';

interface SearchMainScreenProps {
  onShowAddPetModal: (content: JSX.Element) => void;
  onHideAddPetModal: () => void;
  onAddPetDetail: () => void;
}

const SERVICES = [
  {
    id: 1,
    title: 'Veterinary',
    icon: <VetIcon />,
  },
  {
    id: 2,
    title: 'Grooming',
    icon: <GroomingIcon />,
  },
  {
    id: 3,
    title: 'Pet boarding',
    icon: <BoardingIcon />,
  },
  {
    id: 4,
    title: 'Adoption',
    icon: <AdoptionIcon />,
  },
  {
    id: 5,
    title: 'Dog walking',
    icon: <DogWalkingIcon />,
  },
  {
    id: 6,
    title: 'Training',
    icon: <TrainingIcon />,
  },
  {
    id: 7,
    title: 'Pet taxi',
    icon: <TaxiIcon />,
  },
  {
    id: 8,
    title: 'Pet date',
    icon: <DateIcon />,
  },
  {
    id: 9,
    title: 'Other',
    icon: <OtherServiceIcon />,
  },
];

const SearchMainScreen: React.FC<SearchMainScreenProps> = ({
  onShowAddPetModal,
  onHideAddPetModal,
  onAddPetDetail,
}) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(
      () =>
        onShowAddPetModal(
          <>
            <View style={styles.modalContent}>
              <View style={styles.modalContentItem}>
                <View style={styles.modalContentItemMarker} />
                <Typography variant="body1">Faster check-in at appointment.</Typography>
              </View>
              <View style={styles.modalContentItem}>
                <View style={styles.modalContentItemMarker} />
                <Typography variant="body1">
                  Schedule of vaccination, haircuts, inspections etc.
                </Typography>
              </View>
              <View style={styles.modalContentItem}>
                <View style={styles.modalContentItemMarker} />
                <Typography variant="body1">
                  Reminder of the upcoming events with your pet.
                </Typography>
              </View>
            </View>
            <View style={styles.modalActions}>
              <Button
                label="+ Add"
                variant="primary"
                style={styles.modalAction}
                onPress={onAddPetDetail}
              />
              <Button label="No, later" onPress={onHideAddPetModal} style={styles.modalAction} />
            </View>
          </>,
        ),
      1000,
    );
  }, []);

  function renderServiceItem({item}: {item: any}) {
    return (
      <Pressable style={({pressed}) => [styles.serviceItem, pressed && styles.serviceItemPressed]}>
        {item.icon}
        <Typography variant="caption" style={styles.serviceItemTitle}>
          {item.title}
        </Typography>
      </Pressable>
    );
  }

  return (
    <Layout withoutSafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={theme.colors.gradientBg}
        style={[styles.linearBg, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        <View style={styles.header}>
          <IconButton pressedStyle={{backgroundColor: theme.colors.background}} onPress={() => {}}>
            <SearchIcon />
          </IconButton>
        </View>
        <FlatList
          data={SERVICES}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={() => (
            <Typography variant="h1" style={styles.greetingTxt}>
              What are you looking for, <Text style={styles.greetingName}>Quocs?</Text>
            </Typography>
          )}
          renderItem={renderServiceItem}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          columnWrapperStyle={styles.separator}
        />
      </LinearGradient>
    </Layout>
  );
};

export default SearchMainScreen;
