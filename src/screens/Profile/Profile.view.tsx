import React from 'react';
import {View, FlatList, Pressable, StatusBar} from 'react-native';

import Layout from '@components/Layout';
import Header from '@components/Header';
import Button from '@components/Button';
import Avatar from '@components/Avatar';
import EditIcon from '@components/Icon/Edit';
import Typography from '@components/Typography';

import PetIcon from '@components/Icon/Pet';
import FavouriteIcon from '@components/Icon/Favourite';
import AddServiceIcon from '@components/Icon/AddService';
import InviteIcon from '@components/Icon/Invite';
import HelpIcon from '@components/Icon/Help';
import SettingIcon from '@components/Icon/Setting';
import MenuArrowIcon from '@components/Icon/MenuArrow';

import styles from './styles';

interface ProfileViewProps {}

const MENU_ITEMS = [
  {
    title: 'My pets',
    icon: <PetIcon />,
  },
  {
    title: 'My favourites',
    icon: <FavouriteIcon />,
  },
  {
    title: 'Add pet service',
    icon: <AddServiceIcon />,
  },
  {
    title: 'Invite friends',
    icon: <InviteIcon />,
  },
  {
    title: 'Help',
    icon: <HelpIcon />,
  },
  {
    title: 'Settings',
    icon: <SettingIcon />,
  },
];

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  function renderProfile() {
    return (
      <View style={styles.profileWrapper}>
        <Avatar variant="circleFull" wrapperStyle={styles.profileAvatar} />
        <Typography variant="h2">Quocs Mikkelsen</Typography>
        <Typography variant="body1" style={styles.locationTxt}>
          Ho Chi Minh City
        </Typography>
      </View>
    );
  }

  function renderMenuItem({item}) {
    return (
      <Pressable style={({pressed}) => [styles.menuItemWrapper, pressed && styles.menuItemPressed]}>
        <View style={styles.menuItemIcon}>{item.icon}</View>
        <View style={styles.menuItemContainer}>
          <Typography variant={'body1'}>{item.title}</Typography>
          <MenuArrowIcon />
        </View>
      </Pressable>
    );
  }

  return (
    <Layout>
      <StatusBar translucent={false} />
      <Header
        title="Profile"
        rightButton={<Button size="small" variant="ghost" leftIcon={<EditIcon />} label="Edit" />}
      />
      <FlatList
        data={MENU_ITEMS}
        style={styles.menuList}
        keyExtractor={(item) => item.title}
        renderItem={renderMenuItem}
        ListHeaderComponent={renderProfile()}
      />
    </Layout>
  );
};

export default ProfileView;
