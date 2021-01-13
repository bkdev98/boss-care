import React from 'react';
import {View, FlatList, Pressable, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Formik} from 'formik';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import theme from '@theme';

import Layout from '@components/Layout';
import Header from '@components/Header';
import Button from '@components/Button';
import Avatar from '@components/Avatar';
import Typography from '@components/Typography';
import PlusIcon from '@components/Icon/Plus';

import {petValidationSchema} from '@utils/validationSchema';
import {
  FormikForm,
  FormikTextInput,
  FormikSelectInput,
  FormikGenderInput,
  FormikSwitchInput,
} from '@components/Formik';

import styles from './styles';

const SPECIES = [
  {
    key: 'dog',
    label: 'Dog',
  },
  {
    key: 'cat',
    label: 'Cat',
  },
  {
    key: 'bird',
    label: 'Bird',
  },
];

const BREEDS = {
  dog: [
    {
      key: '1',
      label: 'Labrador Retrievers',
    },
    {
      key: '2',
      label: 'German Shepherds',
    },
    {
      key: '3',
      label: 'Golden Retrievers',
    },
    {
      key: '4',
      label: 'French Bulldogs',
    },
    {
      key: '5',
      label: 'Beagles',
    },
    {
      key: '6',
      label: 'Poodles',
    },
    {
      key: '7',
      label: 'Rottweilers',
    },
  ],
  cat: [
    {
      key: '8',
      label: 'Siamese',
    },
    {
      key: '9',
      label: 'Persian',
    },
    {
      key: '10',
      label: 'Maine Coon',
    },
    {
      key: '11',
      label: 'Ragdoll',
    },
    {
      key: '12',
      label: 'Bengal',
    },
    {
      key: '13',
      label: 'Sphynx',
    },
  ],
  bird: [
    {
      key: '14',
      label: 'Parakeet/Budgie',
    },
    {
      key: '15',
      label: 'Cockatiel',
    },
    {
      key: '16',
      label: 'Finch',
    },
    {
      key: '17',
      label: 'Lovebird',
    },
    {
      key: '18',
      label: 'Dove',
    },
    {
      key: '19',
      label: 'Parrotlet',
    },
  ],
};

interface IReminder {
  id: string;
  name: string;
  isOnce?: boolean;
  time?: Date;
  periodNumber?: number;
  periodUnit?: 'day' | 'week' | 'month' | 'year';
}

interface AddPetDetailViewProps {
  loading?: boolean;
}

const AddPetDetailView: React.FC<AddPetDetailViewProps> = ({loading}) => {
  function handleSubmit(values) {
    console.log(values);
  }

  function renderReminderItem({item}: {item: IReminder}) {
    return (
      <Pressable style={styles.reminderItem}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="body3">{moment(item.time).calendar()}</Typography>
      </Pressable>
    );
  }

  function renderAddReminder() {
    return (
      <Pressable
        style={({pressed}) => [
          styles.reminderItem,
          styles.reminderAddItem,
          pressed && styles.remiderItemPressed,
        ]}>
        <View style={styles.plusIconWrapper}>
          <LinearGradient colors={theme.colors.blueViolet} style={styles.plusIcon}>
            <PlusIcon style={theme.effects.blueShadow} />
          </LinearGradient>
        </View>
        <Typography variant="h5">Add event</Typography>
      </Pressable>
    );
  }

  return (
    <Layout>
      <Header
        bordered
        showBack
        title="Add pet detail"
        rightButton={<Button size="small" variant="ghost" label="Skip" />}
      />
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
          <Formik
            initialValues={{
              name: '',
              species: null,
              breed: null,
              gender: null,
              reminders: [],
            }}
            validationSchema={petValidationSchema}
            onSubmit={handleSubmit}>
            {(formikProps) => (
              <FormikForm style={styles.formWrapper}>
                <View style={styles.section}>
                  <Avatar boss wrapperStyle={styles.avatar} />
                  <Typography variant="h3" style={styles.sectionTitle}>
                    General information
                  </Typography>
                  <FormikTextInput
                    name="name"
                    label="Pet's name"
                    wrapperStyle={styles.formInput}
                    autoCapitalize="words"
                    autoFocus
                    returnKeyType="next"
                  />
                  <FormikSelectInput
                    name="species"
                    label="Species of your pet"
                    wrapperStyle={styles.formInput}
                    options={SPECIES}
                    onSelect={(value: any) =>
                      value.key !== (formikProps.values.species as any)?.key &&
                      formikProps.setFieldValue('breed', null)
                    }
                  />
                  <FormikSelectInput
                    name="breed"
                    label="Breed"
                    wrapperStyle={styles.formInput}
                    options={(BREEDS as any)[(formikProps.values.species as any)?.key] || []}
                  />
                  <FormikGenderInput name="gender" label="Gender" wrapperStyle={styles.formInput} />
                  <FormikSelectInput
                    name="birthdate"
                    label="Day of birth"
                    wrapperStyle={styles.formInput}
                    options="dates"
                  />
                  <Typography variant="h3" style={styles.sectionTitle}>
                    Additional information
                  </Typography>
                  <FormikSwitchInput
                    label="Neutered"
                    name="isNeutered"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Vaccinated"
                    name="isVaccinated"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Friendly with dogs"
                    name="isFriendlyWithDogs"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Friendly with cats"
                    name="isFriendlyWithCats"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Friendly with kids"
                    name="isFriendlyWithKids"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Microchipped"
                    name="isMicrochipped"
                    wrapperStyle={[styles.formInput, styles.switchInput]}
                  />
                  <FormikSwitchInput
                    label="Purebred"
                    name="isPurebred"
                    wrapperStyle={[styles.formInput]}
                  />
                  <FormikTextInput
                    name="nurseryName"
                    label="Pet's nursery name (optional)"
                    wrapperStyle={styles.formInput}
                    autoCapitalize="words"
                    returnKeyType="next"
                  />
                  <Typography variant="h3" style={styles.sectionTitle}>
                    Reminders
                  </Typography>
                  <Typography variant="body1">
                    Add vaccines, haircuts, pills, estrus, etc. and you will receive notifications
                    for the next event.
                  </Typography>
                  <FlatList
                    data={formikProps.values.reminders}
                    renderItem={renderReminderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    ListHeaderComponent={renderAddReminder}
                    style={styles.reminderList}
                    contentContainerStyle={styles.reminderListContainer}
                  />
                  <Button
                    label="Save"
                    variant="primary"
                    disabled={loading}
                    onPress={formikProps.handleSubmit}
                  />
                </View>
              </FormikForm>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default AddPetDetailView;
