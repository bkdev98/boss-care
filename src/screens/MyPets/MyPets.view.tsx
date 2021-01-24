import React from 'react';
import {StyleSheet, StatusBar, FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

import Layout from '@components/Layout';
import Header from '@components/Header';
import IconButton from '@components/IconButton';
import Typography from '@components/Typography';
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import PlusIcon from '@components/Icon/Plus';
import EditIcon from '@components/Icon/Edit';
import theme from '@theme';
import getScalableSize from 'utils/getScalableSize';
import {RootState} from 'reducers';

interface MyPetsViewProps {
  list: any[];
  onAddPet: () => void;
}

const MyPetsView: React.FC<MyPetsViewProps> = ({list, onAddPet}) => {
  const BREEDS = useSelector((state: RootState) => state.app.breeds);

  function renderPetItem({item}: {item: any}) {
    const breed = (BREEDS as any)[item.species]?.find((i: any) => i.key === item.breed)?.label;
    return (
      <Pressable style={({pressed}) => [styles.itemWrapper]}>
        <Button
          size="small"
          variant="ghost"
          leftIcon={<EditIcon />}
          label="Edit"
          style={styles.editBtn}
        />
        <Avatar boss wrapperStyle={styles.avatar} uri={item.avatar} />
        <Typography variant="h2">{item.name}</Typography>
        <Typography variant="body1" style={styles.breed}>
          {breed}
        </Typography>
      </Pressable>
    );
  }

  return (
    <Layout style={styles.wrapper} safeAreaViewStyle={styles.wrapper}>
      <StatusBar backgroundColor={theme.colors.lightGray} translucent={false} />
      <Header
        showBack
        title="My pets"
        rightButton={
          <IconButton onPress={onAddPet}>
            <PlusIcon color={theme.colors.violet} />
          </IconButton>
        }
      />
      <FlatList
        data={list}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderPetItem}
        ListFooterComponent={
          <Button
            label="+ Add another pet"
            variant="white"
            style={styles.addBtn}
            onPress={onAddPet}
          />
        }
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.lightGray,
  },
  listContainer: {
    paddingHorizontal: getScalableSize.w(16),
    paddingVertical: getScalableSize.h(16),
  },
  itemWrapper: {
    borderRadius: getScalableSize.w(18),
    paddingTop: getScalableSize.h(40),
    paddingBottom: getScalableSize.h(40),
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    ...theme.effects.plahaShadow,
  },
  avatar: {
    marginBottom: getScalableSize.h(24),
  },
  breed: {
    color: theme.colors.gray,
    marginTop: getScalableSize.h(4),
  },
  editBtn: {
    position: 'absolute',
    top: getScalableSize.h(16),
    right: getScalableSize.w(16),
  },
  addBtn: {
    marginTop: getScalableSize.h(32),
    backgroundColor: theme.colors.lightGray2,
    borderRadius: 9,
  },
});

export default MyPetsView;
