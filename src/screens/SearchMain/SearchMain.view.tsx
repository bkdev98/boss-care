import React, {useEffect} from 'react';
import {Text, FlatList, View, Pressable, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Layout from '@components/Layout';
import Button from '@components/Button';
import Typography from '@components/Typography';
import IconButton from '@components/IconButton';

import SearchIcon from '@components/Icon/Search';

import theme from '@theme';

import styles from './styles';

interface IService {
  id: number | string;
  title: string;
  icon: JSX.Element;
  action?: () => void;
}

interface SearchMainScreenProps {
  onShowAddPetModal: (content: JSX.Element) => void;
  onHideAddPetModal: () => void;
  onAddPetDetail: () => void;
  services: IService[];
}

const SearchMainScreen: React.FC<SearchMainScreenProps> = ({
  onShowAddPetModal,
  onHideAddPetModal,
  onAddPetDetail,
  services,
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

  function renderServiceItem({item}: {item: IService}) {
    return (
      <Pressable
        onPress={item.action}
        style={({pressed}) => [styles.serviceItem, pressed && styles.serviceItemPressed]}>
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
          data={services}
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
